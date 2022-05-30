/* Aplicado a Arrays */
let colores = ["Rojo","Azul","Amarillo",{
    colorMezcla : "Violeta"
}]

let colorRojo = colores[0]
let colorAzul = colores[1]
let colorAmarillo = colores[2]

let [,,,oreo] = colores

console.log(colorRojo,oreo.colorMezcla);

let auto = {
    color: "turquesa",
    anio : 2020,
    km: 600000,
    marca: "volswagen",
    modelo: "vento",
    patente: "com017",
    precio: 6000000 ,
    vendido: true
}







let {color,anio,km,marca,modelo,patente,precio,vendido} = auto

console.log(color);