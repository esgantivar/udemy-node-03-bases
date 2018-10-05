const fs = require('fs');


let buildFile = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }
        fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            }
            resolve(`table-${base}.txt`);
        });
    })
}

module.exports = { buildFile }