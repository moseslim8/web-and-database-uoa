var helper = require('./helper.js');

module.exports = {
    getAll (successCallback) {
        helper.get('/restaurants', successCallback);
    }
};