const fs = require('fs');
const colors = require('colors');

let data = ""

let listarTabla = ((base, limite = 10) => {
    for (x = 0; x <= limite; x++) {
        data += `${base} * ${x} = ${base*x}\n`;
    }
    return data

})


let crearArchivo = async(base, limite = 10) => {

    if (!Number(base)) {
        throw `La base ${base} no es un valor numerico`;
        return
    }


    for (let x = 0; x <= limite; x++) {
        data += `${base} * ${x} = ${x*base}\n`
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw err;
        else
            return `tablas/tabla-${base}.txt`;
    });


};


module.exports = {
    crearArchivo,
    listarTabla
}