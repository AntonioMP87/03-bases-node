const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0]

switch (comando) {

    case 'listar':
        console.log(argv.b);
        console.log(listarTabla(argv.b, argv.l));
        break
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.b, argv.l)
            .then(archivo => console.log(`Archivo creado tabla-${argv.b}.txt`))
            .catch(err => console.log(err));
        break
    default:
        console.log('Comando no reconocido');

}