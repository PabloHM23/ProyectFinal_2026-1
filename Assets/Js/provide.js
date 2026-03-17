const modal = document.getElementById("modalForm");
const btnOpen = document.getElementById("openModalBtn");
const btnClose = document.querySelector(".close-btn");
const form = document.getElementById("addProviderForm");

// 1. Abrir modal
btnOpen.onclick = () => modal.style.display = "block";

// 2. Cerrar modal (al dar clic en X o fuera de la caja)
btnClose.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};

// 3. Capturar datos y añadir a la tabla
form.onsubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Obtener valores
    const nombre = document.getElementById("newProviderName").value;
    const cargo = document.getElementById("newProviderCargo").value;
    const telefono = document.getElementById("newProviderPhone").value;

    // Llamamos a la función que crea la fila en la tabla
    agregarProvider(nombre, cargo, telefono, "Activo");

    // Limpiar y cerrar
    form.reset();
    modal.style.display = "none";
};

// Reutilizamos tu función de la tabla
function agregarProvider(nombre, cargo, telefono, estado) {
    const tabla = document.getElementById('provider-body');
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${cargo}</td>
        <td>${telefono}</td>
        <td><span class="status-active">${estado}</span></td>
        <td>
            <span class="btn-edit">Editar</span>
            <span class="btn-delete" onclick="this.parentElement.parentElement.remove()">Eliminar</span>
        </td>
    `;
    tabla.appendChild(fila);
}