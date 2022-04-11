let opcion = prompt("Ingrese 1 para calcular el precio de un curso o Enter para salir")

while (opcion == "1") {
    const costoCapturar =  parseInt(prompt ('Ingrese costo del curso: '));
    const descuentoCapturar =   parseInt(prompt (`Ingrese el descuento del curso`)); 
    suma = costoCapturar-((descuentoCapturar*costoCapturar)/100);   
    
  totalCapturar = alert(`el valor del curso es $${costoCapturar} con un descuento del %${descuentoCapturar} da un total de = $${suma}`);
    opcion = prompt(`Si desea calcular el costo de otro curso, ingrese "1", si desea agregarle el iva (21%) ingresa "2" o pulse Enter para salir`);
  
}

while (opcion == 2) {
  var totalIva = suma *0.21
  var total = totalIva + suma
  var resultado = alert(`El costo del curso es $${suma} el IVA del 21% tiene un valor de $${totalIva} lo que nos da un total de $${total} `);
  opcion = prompt(`Si desea calcular el costo de otro curso, ingrese "1", si desea agregarle el iva (21%) ingresa "2" o pulse Enter para salir`);
}