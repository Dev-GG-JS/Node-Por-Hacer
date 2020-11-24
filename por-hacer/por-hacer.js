const fs = require("fs");
const colors = require("colors");
let listadoPorHacer = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile("db/data.json", data, (err) => {
    if (err) throw err;

    
  });
};

const cargarDB = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

const crearTarea = (descripcion) => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false,
  };

  listadoPorHacer.push(porHacer);

  guardarDB();
  return porHacer;
};

const actualizarTarea = (descripcion, estado) => {
  cargarDB();
  if (estado) {
    listadoPorHacer.some((tarea) => {
      if (tarea.descripcion === descripcion) {
        tarea.completado = estado;

        return tarea;
      } else {
        return tarea;
      }
    });
    guardarDB();
  }
};

const listarTareas = () => {
  cargarDB();

  if (listadoPorHacer.length === 0) {
    console.log("No hay tareas");
    return;
  }

  for (const tarea of listadoPorHacer) {
    console.log("=====Por Hacer=====".green);
    console.log(tarea.descripcion);
    console.log(`Estado: ${tarea.completado}`);
    console.log("===================".green);
  }
};

const listarTareasCompletadas = () =>{

    let tareasCompletas = listadoPorHacer.filter((tarea)=>tarea.completado === true);

    console.log(tareasCompletadas);
}

const borrarTarea= (descripcion) =>{
    cargarDB();
    let existe=listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    let borrado=false;
    
    if(existe >= 0){
        listadoPorHacer = listadoPorHacer.filter((tarea) => tarea.descripcion !== descripcion );
        guardarDB();
        borrado=true
    }else{
        console.log('La tarea no existe')
    }


    
    
   return borrado
}

module.exports = {
  crearTarea,
  listarTareas,
  actualizarTarea,
  borrarTarea,
  listarTareasCompletadas
};
