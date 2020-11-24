const { argv } = require("./config/yargs");

const colors = require('colors');


const porHacer = require('./por-hacer/por-hacer');

const {crearTarea,listarTareas,actualizarTarea,borrarTarea,listarTareasCompletadas} = porHacer;


let comando = argv._[0];

switch (comando) {
  case "listar":
    
     let listado=listarTareas();
    break;
  case "crear":

   let tarea= crearTarea(argv.descripcion)
    // console.log(tarea);
    break;
  case "actualizar":
    actualizarTarea(argv.descripcion,argv.completado)
    break;

    case 'borrar':

    let borrado =borrarTarea(argv.descripcion);
    console.log(borrado);
        break;
  default:
    console.log("Comando no reconocido");
    break;
}
