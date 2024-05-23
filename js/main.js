let tareas = [];

function agregarTarea() {
  let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

  if (nuevaTareaTexto === "") {
    alert("Por favor, ingresa una tarea");
    return;
  }

  let nuevaTarea = {
    descripcion: nuevaTareaTexto,
    completada: false
  };

  tareas.push(nuevaTarea);
  mostrarListaTareas();
  document.getElementById("nuevaTarea").value = "";
}

function mostrarListaTareas() {
  let listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = "";

  tareas.forEach(function(tarea, indice) {
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tarea.descripcion + " ";

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function() {
      eliminarTarea(indice);
    };

    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
  });
}

function eliminarTarea(indice) {
  tareas.splice(indice, 1); 
  mostrarListaTareas();
}
