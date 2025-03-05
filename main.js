 //Cómo declarar un array. El id para referirnos al innerHTML es declarar_arrays
var tipos_gatos =  [" Javanés ", "Egeo ", "Chartreux ", "Chausie ", "Ceilán ", "Ragamuffin ",]
console.log(tipos_gatos);
document.getElementById("declarar_arrays").innerHTML = tipos_gatos;
 //Cómo obtener el primer elemento de un array. El id para referirnos al innerHTML es acceder_primer_elemento
var tipos_gatos_1 = tipos_gatos[0]
console.log(tipos_gatos_1);
document.getElementById("acceder_primer_elemento").innerHTML = tipos_gatos_1;
 //Cómo obtener el segundo elemento de un array. El id para referirnos al innerHTML es acceder_segundo_elemento
var tipos_gatos_2 = tipos_gatos[1]
console.log(tipos_gatos_2);
document.getElementById("acceder_segundo_elemento").innerHTML = tipos_gatos_2;
 //Cómo obtener el tercer elemento de un array. El id para referirnos al innerHTML es acceder_tercer_elemento
var tipos_gatos_3 = tipos_gatos[2]
console.log(tipos_gatos_3);
document.getElementById("acceder_tercer_elemento").innerHTML = tipos_gatos_3;
 //Cómo obtener la longitud del array. El id para referirnos al innerHTML es ver_longitud_del_array

var gato_long = tipos_gatos.length

console.log(gato_long);
document.getElementById("ver_longitud_del_array").innerHTML = gato_long;

 //Cómo crear un bucle del array. El id para referirnos al innerHTML es bucle_del_array
var valor_ray = "";
for (i = 0; i < tipos_gatos.length; i++) {
    console.log(tipos_gatos[i]);
    valor_ray = valor_ray + tipos_gatos[i] + "<br>";
}

document.getElementById("bucle_del_array").innerHTML = valor_ray;

 //Añadir un elemento al final de un array con el método push
tipos_gatos.push( "Ragdoll ");
console.log(tipos_gatos);
document.getElementById("añadir_elemento_al_final_de_un_array").innerHTML = tipos_gatos;
 //Cómo añadir un elemento al final de un array. El id para referirnos al innerHTML es añadir_elemento_al_final_de_un_array
 tipos_gatos.push( "Gato esfinge ");
 console.log(tipos_gatos);
 document.getElementById("añadir_elemento_al_final_de_un_array").innerHTML = tipos_gatos;
 //Cómo añadir más elementos al final de un array. El id para referirnos al innerHTML es añadir_más_elementos_al_final_de_un_array

 //Cómo declarar un array con el alfabeto. El id para referirnos al innerHTML es ver_array_alfabeto

 //Cómo ordenar el array del alfabeto. El id para referirnos al innerHTML es ver_array_alfabeto_ordenado

 //Cómo invertir el array. El id para referirnos al innerHTML es ver_array_invertido

 //Cómo declarar un array con números. El id para referirnos al innerHTML es ver_array_num

 //Cómo declarar un número con valor máximo del array con números. El id para referirnos al innerHTML es ver_num_max

 //Cómo encontrar el número con valor mínimo del array con números. El id para referirnos al innerHTML es ver_num_min


//"ACTIVIDAD ADICIONAL"

 //Añadir un elemento al inicio de un array con el método unshift
 //Cómo añadir un elemento al inicio de un array. El id para referirnos al innerHTML es añadir_elemento_al_inicio_del_array

 //Cómo agregar más elementos al inicio de la matriz? El id para referirnos al innerHTML es añadir_más_elementos_al_inicio_del_array

 //Cómo remover un elemento al inicio de un array. El id para referirnos al innerHTML es remover_elemento_al_inicio_del_array

 //Cómo remover un elemento al final de un array. El id para referirnos al innerHTML es remover_elemento_al_final_del_array

 //Cómo declarar un array con doce estados de México

 //Cómo declarar un array con otros doce estados de México

 //Cómo unir dos arrays. El id para referirnos al innerHTML es unir_dos_arrays