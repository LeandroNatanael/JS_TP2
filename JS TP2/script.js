
const colorAqua = document.getElementById("aqua");
const colorWhite = document.getElementById("white");
const colorGray = document.getElementById("gray");

const cambioColor = color => document.body.style.backgroundColor = color;


const contadorCaracteres = () => {
    let texto = document.getElementById("texTarea").value;
    let numbCaracteres = texto.length;
    console.log(texto);
    console.log(numbCaracteres);
    document.getElementById("contador").textContent = numbCaracteres;
    console.log(contador);

}
let alumnos = [
{nombre: 'Juan Gomez', nota: 7},
{nombre: 'Pedro Rodriguez',nota: 4}, 
{nombre: 'Roxana García',nota: 8}, 
{nombre: 'Luciano Lopez',nota: 5}, 
{nombre: 'Fernanda Gimenez',nota: 6}, 
{nombre: 'Florencia Martinez',nota: 10}, 
{nombre: 'Raul Sanchez',nota: 7}, 
{nombre: 'Sandra Figueroa',nota: 8}];

let salida = "<ul>" ;

for (let i = 0 ; i < alumnos.length ; i++) {
   salida += "<li>" + alumnos[i].nombre + ":" + alumnos[i].nota + "</li>" ;
}  

document.getElementById("salida").innerHTML = salida + "<ul>" ; 

let aprobados = "<ul>" ;

for (let j = 0 ; j < alumnos.length ; j++ ) {
    if ( alumnos[j].nota >= 7) {
        aprobados += "<li>" + alumnos[j].nombre + ":" + alumnos[j].nota + "</li>";
    }
}

document.getElementById("aprobados").innerHTML = aprobados + "</ul>" ;