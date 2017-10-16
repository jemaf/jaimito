"use strict";

/**
 * Jaiminho library features. 
 * 
 * @author João Eduardo Montandon
 */

const dns = require('dns');

class Jaimito {

    /**
     * check e-mail validity
     * 
     * @param {String} email email that will be checked
     * @param {Function} callback a callback that can be used instead of Promise
     */
    static validate(email, callback) {

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        callback = callback || function() { };

        return new Promise((resolve, reject) => {
            let emailDomain = email.split('@')[1];
            const options = {
                family: 4,
                hints: dns.ADDRCONFIG | dns.V4MAPPED,
                all: true
              };
        
            if(!regex.test(email)) {
                resolve(false);
                return callback(null, false);
            }
            else {
                dns.resolve(emailDomain, 'MX', (err, records) => {
                    if(!err && records.length > 0) {
                        resolve(true);
                        return callback(null, true);
                    } else if((err && err.code === "ENOTFOUND") || records.length === 0) {
                        resolve(false);
                        return callback(null, false);
                    } else {
                        reject(err);
                        return callback(err);
                    }
                });
            }
        });
    }
}


module.exports = Jaimito;