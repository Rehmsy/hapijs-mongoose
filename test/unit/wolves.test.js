const chai = require('chai');
const { assert } = chai;
const Wolf = require('../../lib/models/wolf');
//const { getErrors } = require('./helpers');


describe('Wolf model', () => {

    it('validates good model', () => {
        const data = {
            name: 'Wolf Face', 
        };
        const wolf = new Wolf(data);

        const json = wolf.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
    });
});




// const Lab = require('lab');

// const code = require('code');

// const lab = exports.lab = Lab.script();
// var server = require('../app.js').server;

// lab.test('starter pack', function(done) {
//     var options = {
//         method: 'GET',
//         url: '/api'
//     };

//     server.inject(options, function(response) {
//         code.expect(response.statusCode).to.equal(200);
//         code.expect(response.result).to.be.string();

//         done();
//     });
// });