# Jaimito

[![Build Status](https://travis-ci.org/jemaf/jaimito.svg?branch=master)](https://travis-ci.org/jemaf/jaimito)

Jaimito is an email validator library written in JavaScript. The library validates the email by checking its hostname on Mail Exchange (MX) records.

## Installing

Jaimito is available via npm

```language=bash
$ npm install Jaimito
```

## Basic Usage

To validate your email, just call the `validate` function!!

To validate an email, you must provide the email itself and the callback that will be executed after its validation.

```language=javascript
const Jaimito = require('jaimito');

Jaiminho.validate('yourEmail@gmail.com', function(res) {
    if(res) {
        // valid email
    } else {
        // invalid email
    }
});
```

Jaimito is also available for use with Promises:

```language=javascript
const Jaimito = require('jaimito');

Jaimito
.validate('yourEmail@gmail.com')
.then(() => {
    // valid email
})
.catch(() => {
    // invalid email
});

```

## Why Jaimito?

> Es que quiero evitar la fatiga
>
> -- Jaimito, el cartero

[Jaimito](1) is an old postman character from [El Chavo del Ocho](2) show. The character is know for its lazyness and for avoiding any task.

[1]: https://en.wikipedia.org/wiki/List_of_El_Chavo_del_Ocho_characters#Jaimito.2C_el_cartero
[2]: https://en.wikipedia.org/wiki/El_Chavo_del_Ocho