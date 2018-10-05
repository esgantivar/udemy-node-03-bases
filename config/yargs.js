const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola', options)
    .command('crear', 'crea archivo', options)
    .help()
    .argv;

module.exports = { argv }