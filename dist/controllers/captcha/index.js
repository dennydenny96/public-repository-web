'use strict'

const captchaGenerator = require('./captcha');

class Captcha {
    constructor(params) {
        this.params = params
    }

    image(req, res) {
        let captcha = captchaGenerator.create(this.params);
        return captcha;

    }

    loadFont(url) {
        captchaGenerator.loadFont(url)
    }
}

module.exports.create = params => new Captcha(params)