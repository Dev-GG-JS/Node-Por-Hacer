const descripcion = {
  alias: "d",
  demand: true,
  desc: "Descripcion de la tareas por hacer",
};

const completado = {
  alias: "c",
  default: true,
};
const argv = require("yargs")
  .command("crear", "Crear una tarea", {
    descripcion,
  })
  .command("listar", "Listar la tareas")
  .command("actualizar", "Actualizar una tarea", {
    descripcion,
    completado,
  })
  .command("borrar", "Borrar una tarea", {
    descripcion,
  })
  .help().argv;

module.exports = {
  argv,
};
