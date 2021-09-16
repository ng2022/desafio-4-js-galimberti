// DESAFIO ENTREGABLE 4
// Calcular el promedio de las notas de alumnos ingresados

alert('DESAFIO ENTREGABLE \nCalcular nota de alumnos ingresados')

function solicitarNombre() {
    let nombreAlumno = prompt('Nombre Alumno');
    console.log(nombreAlumno);
}

function solicitarApellido() {
    let apellidoAlumno = prompt('Apellido Alumno');
    console.log(apellidoAlumno);
}

function asignaturas() {
    let matematica = parseFloat(prompt('Matematica'));
    console.log('Matematica= ' + matematica);
    let lengua = parseFloat(prompt('Lengua'));
    console.log('Lengua= ' + lengua);
    let fisica = parseFloat(prompt('Fisica'));
    console.log('Fisica= ' + fisica);
    let salir = prompt("Si desea salir ingrese ESC")
    let promedio = (matematica + lengua + fisica)/3;

    if (promedio===0) {
        console.log('Nota final= ' + promedio + '\nNo Prersentado');
    } else if (promedio <5) {
        console.log('Nota final= ' + promedio + '\nNo Aprobado');
    } else if (promedio >=5) {
        console.log('Nota final= ' + promedio + '\nAprobado');
    }   
    if(salir != "ESC"){
        solicitarNombre();
        solicitarApellido();
        asignaturas();
      } else{
        alert("Gracias")
      }
}

solicitarNombre();
solicitarApellido();
asignaturas();


/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


// DESAFIO COMPLEMENTARIO
// Calculo Iva

alert('DESAFIO COMPLEMNTARIO \nCalcular IVA')

let costo = parseFloat(prompt('Ingrese el Precio'));
console.log('Precio= ' + costo);

const suma = (a,b) => a+b;
const resta = (a,b) => a-b;
const porcentajeIva = (c) => c * 0.21;

function calculo(){
    let precioFinal = suma(costo, porcentajeIva(costo));
    let iva = resta(precioFinal, costo);
    console.log('iva=' + iva);
    console.log('TOTAL=' + precioFinal);
    alert('Precio = ' + costo + '\niva = ' + iva + '\nTOTAL = ' + precioFinal);
}

calculo();