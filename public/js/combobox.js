//Definir Las Variables Correspondintes
var opt_Cab = new Array ("Capitan","Primer Oficial","Segundo Oficial");
var opt_Des = new Array ("Azafata","Asistende de Azafata");

//crear una funcion que permita ejecutar el cambio dinamico
function cambia(){
    var puesto;
    //Se toma el vamor del "puesto seleccionada"
    puesto = document.formVac.puesto[document.formVac.puesto.selectedIndex].value;
    //se chequea si el "puesto" esta definida
    if(puesto!=0){
        //selecionamos los puestos Correctas
        mis_opts=eval("opt_" + puesto);
        //se calcula el numero del "puesto
        num_opts=mis_opts.length;
        //marco el numero de opt en el select
        document.formVac.rango.length = num_opts;
        //para cada opt del array, la pongo en el select
        for(i=0; i<num_opts; i++){
            document.formVac.rango.options[i].value=mis_opts[i];
            document.formVac.rango.options[i].text=mis_opts[i];
        }
        }else{
            //si no habia ninguna opt seleccionada, elimino el "puesto del select
            document.formVac.rango.length = 1;
            //ponemos un guion en la unica opt que he dejado
            document.formVac.rango.options[0].value="-";
            document.formVac.rango.options[0].text="-";
        }
        //hacer un reset de las opts
        document.formVac.rango.options[0].selected = true;
        
    }
