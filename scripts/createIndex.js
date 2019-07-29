const fs = require('fs');
const path = require('path');

const contentPath = path.resolve('./', 'content');
let idx = [];

const dirs = fs.readdirSync(contentPath);

dirs.forEach(file => {
    const content = fs.readFileSync(path.resolve('./', 'content', file), 'utf-8');

    let res = content.match(/## (.)*/g);
    console.info(res)
    if (res) {
        idx = idx.concat(res);
    }
});

fs.writeFileSync(path.resolve('./', 'README.md'), idx.join('\n'));

