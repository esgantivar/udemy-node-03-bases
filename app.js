const { argv } = require('./config/yargs')
const { buildFile } = require('./multiplicar/multiplicar')
const { colors } = require('colors');
const command = argv._[0];
switch (command) {
    case 'listar':
        console.log('listar');
        break;
    case 'crear':
        buildFile(argv.base, argv.limite).then((data) => {
            console.log(data.red);
        }).catch((error) => {
            console.log(error);
        });
        break;
    default:
        console.log('comando no reconocido');
}