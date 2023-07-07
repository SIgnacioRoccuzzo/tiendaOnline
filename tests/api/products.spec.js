const request = require('supertest');
const mongoose = require('mongoose')

const app = require('../../src/app');
const Product = require('../../src/models/products.model')

describe('API de products', () => {
    //metodos de ciclo de vida
    //antes que comiencen todas las pruebas me conecto a la ddbb
    beforeAll(async () => {
        await mongoose.connect('mongodb://127.0.0.1:27017/idtienda')
    })
    //cuando terminen las pruebas me desconecto
    afterAll(async () => {
        await mongoose.disconnect();
    })

    describe('GET /api/products', () => {

        let response;
        beforeAll(async () => {
            response = await request(app).get('/api/products').send();
        });

        it('deberia devolver status 200', () => {
            expect(response.statusCode).toBe(200);


        });
        it('deberia devolver un JSON', () => {
            expect(response.headers['content-type']).toContain('application/json');
        });
        it('deberia devolver un array', () => {
            //espero que el body de la respuesta sea un array
            expect(response.body).toBeInstanceOf(Array)
        })

    });
    describe('POST /api/products', () => {
        let response;
        const body = { name: 'lapiz verde', description: 'pinta cosas verdes', price: 12, department: 'test', available: true, stock: 23 }
        beforeAll(async () => {
            response = await request(app).post('/api/products').send(body);
        });
        afterAll(async () => {
            await Product.deleteMany({ department: 'test' });
        });
        it('deberia funcionar la URL', () => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('application/json');
        });
        it('deberia tener el _id definido', () => {
            expect(response.body._id).toBeDefined();
        });
        it('deberia insertar los mismos datos del body', () => {
            expect(response.body.name).toBe(body.name);
            expect(response.body.description).toBe(body.description);
            expect(response.body.price).toBe(body.price);
            expect(response.body.department).toBe(body.department);
            expect(response.body.available).toBe(body.available);
            expect(response.body.stock).toBe(body.stock);

        })
    });
    describe('PUT /api/products/IDPRODUCT', () => {
        const body = { name: 'nevera', description: 'te congela', price: 12, department: 'test', available: true, stock: 25 };
        let product;
        let response;
        beforeAll(async () => {
            product = await Product.create(body);
            response = await request(app).put(`/api/products/${product._id}`).send({
                available: false,
                price: 36,
                stock: 33
            })
        });
        afterAll(async () => {
            await Product.findByIdAndDelete(product._id);
        });
        it('deberia funcionar la URL', () => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('application/json');
        });
        //en el body me va a devolver un objeto producto y tengo que ver si se han hecho las modificaciones
        it('deberia ver las modificaciones en la BD', () => {
            expect(response.body.available).toBe(false);
            expect(response.body.price).toBe(36);
            expect(response.body.stock).toBe(33);
        });
    });
    describe('DELETE /api/products/IDPRODUCT', () => {
        const body = { name: 'nevera', description: 'te congela', price: 350, department: 'hogar', available: true, stock: 25 };
        let product;
        let response;
        beforeAll(async () => {
            product = await Product.create(body);
            //se quita el body en la fx send() xq no es necesario para el delete
            response = await request(app).delete(`/api/products/${product._id}`).send()
        });
        afterAll(async () => {
            await Product.findByIdAndDelete(product._id);
        });
        it('deberia funcionar la URL', () => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('application/json');
        });
        it('el producto no debe estar en la BD', async () => {
            const deleteProduct = await Product.findById(product._id);
            expect(deleteProduct).toBeNull();
        });
    })

});