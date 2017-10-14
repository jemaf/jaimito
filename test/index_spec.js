const Jaiminho = require('../index.js');
const expect = require('chai').expect;

describe('Jaiminho', function() {
    describe('Promises', function() {
        describe('#validate', function() {
            it('should return error for e-mails with invalid syntax', function(done) {
                Jaiminho
                .validate('@gmail.com')
                .then()
                .catch(err => done());
            });
            it('should return error for e-mails with non existent domain', function(done) {
                Jaiminho
                .validate('user@invalidddd.com')
                .then()
                .catch(err => done());
            });
            it('should return error for e-mails with invalid domain', function(done) {
                Jaiminho
                .validate('user@users.noreply.github.com')
                .then()
                .catch(err => done());
            });
            it('should not return error for e-mails with valid domain', function(done) {
                Jaiminho
                .validate('user@gmail.com')
                .then(res => done())
                .catch(done);
            });
        });
    });
    describe('Callbacks', function() {
        describe('#validate', function() {
            it('should return error for e-mails with invalid syntax', function(done) {

                Jaiminho.validate('@gmail.com', function(res) {
                    expect(res).to.be.false;
                    done();
                })
            });
            it('should return error for e-mails with non existent domain', function(done) {
                Jaiminho.validate('user@invaliddd.com', function(res) {
                    expect(res).to.be.false;
                    done();
                });
            });
            it('should return error for e-mails with invalid domain', function(done) {
                Jaiminho.validate('user@users.noreply.github.com', function(res) {
                    expect(res).to.be.false;
                    done();
                });
            });
            it('should not return error for e-mails with valid domain', function(done) {
                Jaiminho.validate('user@gmail.com', function(res) {
                    expect(res).to.be.true;
                    done();
                });
            });
        });
    });
});