function agregarTarea() {
    var nuevaTareaTexto = document.getElementById("nuovacosa").value;
    if (nuevaTareaTexto.trim() === "") {
        alert("Por favor, ingrese una tarea válida.");
        return;
    }

    var listaTareas = document.getElementById("listaTareas");
    var nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;
    nuevaTarea.addEventListener("click", function() {
        this.classList.toggle("completed");
    });

    var botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function() {
        listaTareas.removeChild(nuevaTarea);
    });

    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    document.getElementById("nuovacosa").value = "";
}