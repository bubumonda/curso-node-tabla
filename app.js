const colors = require('colors');
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs');


console.clear();



// const [,,arg3 = 'base=5' ] = process.argv;
// const [,base = 5]= arg3.split('=');




// fs.writeFileSync('tabla-5.txt',  salida, (err)=>{
//     if(err) throw err;
//         console.log('The file has been saved')
// })

crearArchivo(argv.b, argv.l, argv.h)
                .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
                .catch(err=> console.log(err));

