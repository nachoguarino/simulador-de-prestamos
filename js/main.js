
//Simulador de Prestamos Ignacio Guarino

function calcularPrestamo(monto, tasaInteres, plazo) {

    let tasaMensual = tasaInteres / 12 / 100

    let cuota = monto * tasaMensual / (1 - Math.pow(1 + tasaMensual, -plazo))

    let = cuota.toFixed(2)

    return cuota
}

let monto = prompt("Ingrese el monto del préstamo: ")
let tasaInteres = prompt("Ingrese la tasa de interés anual: ")
let plazo = prompt("Ingrese el plazo en meses: ")

monto = parseFloat(monto)
tasaInteres = parseFloat(tasaInteres)
plazo = parseInt(plazo)

if (isNaN(monto) || isNaN(tasaInteres) || isNaN(plazo)) {
    alert("Por favor ingrese valores numéricos.")
}
else {
    let cuotaMensual = calcularPrestamo(monto, tasaInteres, plazo)

    alert("La cuota mensual que debera abonar es de: $"+ cuotaMensual.toFixed(2))
}
