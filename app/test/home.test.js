const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');


describe('Pruebas Unitarias sobre la web app', function()
{
    it('Se prueba la respuesta del servidor', function()
    {
        return request(app)
        .get('/')
        .then(function(response){
            assert.equal(response.status, 200)
        })
    });

    it('Se prueba la respuesta de la página de error del servidor', function()
    {
        return request(app)
        .get('/error')
        .then(function(response){
            assert.equal(response.text, 'Error page');
        })
    });


});