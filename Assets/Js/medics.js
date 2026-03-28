const modal = document.getElementById("modalForm");
const btnOpen = document.getElementById("openModalBtn");
const btnClose = document.querySelector(".close-btn");
const form = document.getElementById("addMedicForm");

// 1. Abrir modal
btnOpen.onclick = () => modal.style.display = "block";

// 2. Cerrar modal (al dar clic en X o fuera de la caja)
btnClose.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
};

// 3. Capturar datos y añadir a la tabla
form.onsubmit = (e) => {
    e.preventDefault();
    
    // Obtener valores
    const nombre = document.getElementById("newMedicName").value;
    const tipo = document.getElementById("newMedicType").value;
    const Stock = document.getElementById("newMedicStock").value;
    const precio = document.getElementById("newMedicPrice").value;

    // Llamamos a la función que crea la fila en la tabla
    agregarMedicamento(nombre, tipo, Stock, precio);
    form.reset();
    modal.style.display = "none";
};

// Reutilizamos tu función de la tabla
function agregarMedicamento(nombre, tipo, Stock, precio) {
    const tabla = document.getElementById('medic-body');
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${tipo}</td>
        <td>${Stock}</td>
        <td>${precio}</td>
        <td>
            <span class="btn-edit">Editar</span>
            <span class="btn-delete" onclick="this.parentElement.parentElement.remove()">Eliminar</span>
        </td>
    `;
    tabla.appendChild(fila);
}