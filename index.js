const emoji = require('node-emoji');

module.exports = async function (req) {
    console.log(emoji.get('coffee'));

    return {
        raw: emoji.get('coffee'),
    };
};