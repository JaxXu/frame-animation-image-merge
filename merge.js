const fs = require('fs');
const path = require('path');
const images = require('images');
images.setLimit(999999999, 999999999);

module.exports = (prefix = '') => {
    const rules = fs.readdirSync(path.resolve(__dirname, 'image/'))
        .filter(f => {
            return (prefix === '' || f.startsWith(prefix))
        })
        .map(f => {
            return path.basename(f, '.png').substring(prefix.length);
        })
        .sort((a, b) => {
            return parseInt(a) - parseInt(b)
        });

    const size = images('image/' + prefix + rules[0] + '.png').size();
    const result = images(size.width * rules.length, size.height);

    rules.forEach((value, index) => {
        let s = 'image/' + prefix + value + '.png';
        result.draw(images(s), index * size.width, 0)
    });

    result.save(path.resolve(__dirname, 'build/') + '/' + prefix + '.png');
};