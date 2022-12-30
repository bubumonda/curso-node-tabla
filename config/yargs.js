const argv = require('yargs')
                        .option('h',{
                            alias: 'hasta',
                            type:'number',
                            describe:'Hasta donde va llegar la tabla',
                            default: 10,
                        })
                        .option('l',{
                            alias:'list',
                            type:'boolean',
                            default: false,
                            describe: 'Muestra la tabla de multiplicar'
                        })
                        .option('b',{
                            alias: 'base',
                            type: 'number',
                            demandOption:true,
                            describe: 'Es la base de la tabla de multiplicar',

                        })
                        .check((argv, options) =>{
                            if( isNaN(argv.b)){
                                throw 'La base tiene que ser un numero'
                            }
                            return true;
                        })
                        .argv;

        module.exports= argv;