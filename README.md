# Jaimito

[![version][version-badge]][CHANGELOG]
[![license][license-badge]][LICENSE]
[![Build Status][travis-badge]][TRAVIS]
[![Coverage Status][coveralls-badge]][COVERALLS]

Jaimito is an email validator library written in JavaScript. The library validates the email by checking its hostname on Mail Exchange (MX) records.

## Installing

Jaimito is available via npm

```bash
$ npm install jaimito
```

## Basic Usage

Using Jaimito is really simple: all you have to do is call the `validate` function.

To validate an email, you must provide the email itself and the callback that will be executed after its validation.

```javascript
const Jaimito = require('jaimito');

Jaimito.validate('yourEmail@gmail.com', function(err, res) {
    if(err) {
        // unexpected error
    }

    if(res) {
        // valid email
    } else {
        // invalid email
    }
});
```

Jaimito is also available for use with Promises:

```javascript
const Jaimito = require('jaimito');

Jaimito
.validate('yourEmail@gmail.com')
.then(res => {
    if(res) {
        // valid email
    } else {
        // invalid email
    }
})
.catch(err => {
    // unexpected error
});

```

## Why Jaimito?

Different from traditional email validators, Jaimito also checks wether the provided hostname is real. For this, the email domain is verified on Mail Exchange records.

## Who is Jaimito?

> Es que quiero evitar la fatiga
>
> -- Jaimito, el cartero

[Jaimito][1] is an old postman character from [El Chavo del Ocho][2] show. The character is know for its lazyness and for avoiding any task.

[1]: https://en.wikipedia.org/wiki/List_of_El_Chavo_del_Ocho_characters#Jaimito.2C_el_cartero
[2]: https://en.wikipedia.org/wiki/El_Chavo_del_Ocho

[LICENSE]: ./LICENSE
[CHANGELOG]: ./CHANGELOG.md
[TRAVIS]: https://travis-ci.org/jemaf/jaimito
[COVERALLS]: https://coveralls.io/github/jemaf/jaimito?branch=master
[version-badge]: https://img.shields.io/npm/v/jaimito.svg
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[travis-badge]: https://img.shields.io/travis/jemaf/jaimito/master.svg
[coveralls-badge]: https://img.shields.io/coveralls/github/jemaf/jaimito/master.svg
