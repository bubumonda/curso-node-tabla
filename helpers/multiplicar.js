const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');
const crearArchivo = async(base=5, list, hasta) =>{


    try {
        let salida, consola = '';


        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${index*base}\n`
            consola+=`${base} ${'x'.red} ${index} ${'='.green} ${index*base}\n`;
            
        }
        if(list) console.log(consola);
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,  salida, );
        
        return `table ${base} creada`;
    } catch (error) {
        throw error;
        
    }

    // return new Promise((resolve, reject)=>{

    // resolve(`table ${base} creada`)

    // })
    


}

module.exports = {
     crearArchivo
}