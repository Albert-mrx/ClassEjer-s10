/*
Crear una clase Alumno con los atributos: código, nombre, nota1, nota2, nota3 y nota 4; y las operaciones: promedio (), condicion () y obsequio (). Para calcular el promedio considere la siguiente fórmula:
PROM = nota1(15%) + nota2(20%) + nota3(25%) + nota4(40%)
Para la condición determine si es “Aprobado” o “Desaprobado” (se aprueba con nota mínima 12).
Todo alumno que apruebe con nota mayor a 17 se le obsequiará una “Mochila”.
*/
let codigo = parseInt(prompt("ingrese codigo de Alumno",0));
let nombre = prompt("ingrese nombre");
let nota1 = parseInt(prompt("ingrese nota 1",0));
let nota2 = parseInt(prompt("ingrese nota 2",0));
let nota3 = parseInt(prompt("ingrese nota 3",0));
let nota4 = parseInt(prompt("ingrese nota 4",0));

class Alumno{
    constructor(codigo,nombre,nota1,nota2,nota3,nota4){
        this._codigo = codigo;
        this._nombre = nombre;
        this._nota1 = nota1;
        this._nota2 = nota2;
        this._nota3 =nota3;
        this._nota4 = nota4;
    }

    promedio(){
        let nota1 = this._nota1;
        let porcentaje1 =parseInt((nota1*15)/100);

        let nota2 = this._nota2;
        let porcentaje2 = parseInt((nota2*20)/100);

        let nota3 = this._nota3;
        let porcentaje3 = parseInt((nota3*25)/100);

        let nota4 = this._nota4;
        let porcentaje4 = parseInt((nota4*40)/100);

        let promedioFinal = parseInt(porcentaje1+porcentaje2+porcentaje3+porcentaje4);
        return promedioFinal;
    }
    condicion(){
        let promedio = this.promedio();
        let nombre = this._nombre;
        let codigo = this._codigo;
        if(promedio >= 12){
            alert(`el alumno : ${nombre} con codigo: ${codigo} esta aprobado`);
        }else{
            alert(`el alumno : ${nombre} con codigo: ${codigo} esta Desaprobado`);
        }
    }
    obsequio(){
        let prom = this.promedio();
        if(prom>17){
            alert("Felicidades 🎁! ganaste una mochila");
        }else{
            alert("no ganaste nada 😥");
        }
    }
}

let user1 = new Alumno(codigo,nombre,nota1,nota2,nota3,nota4);
user1.condicion();
user1.obsequio();