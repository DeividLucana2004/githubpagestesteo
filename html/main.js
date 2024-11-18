 // Variables globales
const tableBody = document.querySelector("#crudTable tbody");
let selectedRow = null; // Para rastrear la fila seleccionada

 // Nuevo: Agregar fila vacía para edición
 document.querySelector("#btnNuevo").addEventListener("click", () => {
     const newRow = document.createElement("tr");
     newRow.innerHTML = `
         <td></td>
         <td><input type="text" class="form-control" placeholder="Nombres"></td>
         <td><input type="text" class="form-control" placeholder="Apellidos"></td>
         <td><input type="email" class="form-control" placeholder="@Email"></td>
         <td><input type="number" class="form-control" placeholder="Edad"></td>
     `;
     tableBody.appendChild(newRow);
     selectedRow = newRow;
     enableButtons();
 });

 // Agregar: Guardar datos de la fila
 document.querySelector("#btnAgregar").addEventListener("click", () => {
     if (!selectedRow) return;

     const inputs = selectedRow.querySelectorAll("input");
     const rowData = Array.from(inputs).map(input => input.value.trim());

     if (rowData.some(value => value === "")) {
         alert("Por favor, llena todos los campos.");
         return;
     }

     selectedRow.innerHTML = `
         <td>${tableBody.children.length}</td>
         <td>${rowData[0]}</td>
         <td>${rowData[1]}</td>
         <td>${rowData[2]}</td>
         <td>${rowData[3]}</td>
     `;
     selectedRow = null;
     disableButtons();
 });

 // Modificar: Habilitar edición en la fila seleccionada
 document.querySelector("#btnModificar").addEventListener("click", () => {
     if (!selectedRow) return;

     const cells = selectedRow.querySelectorAll("td:not(:first-child)");
     cells.forEach(cell => {
         const currentText = cell.textContent;
         cell.innerHTML = `<input type="text" class="form-control" value="${currentText}">`;
     });
 });

 // Eliminar: Quitar la fila seleccionada
 document.querySelector("#btnEliminar").addEventListener("click", () => {
     if (selectedRow) {
         tableBody.removeChild(selectedRow);
         selectedRow = null;
         disableButtons();
     }
 });

 // Hacer clic en una fila para seleccionarla
 tableBody.addEventListener("click", event => {
     if (event.target.tagName === "TD" || event.target.tagName === "TR") {
         if (selectedRow) selectedRow.classList.remove("table-active");
         selectedRow = event.target.closest("tr");
         selectedRow.classList.add("table-active");
         enableButtons();
     }
 });

 // Habilitar botones de modificar y eliminar
 function enableButtons() {
     document.querySelector("#btnModificar").disabled = false;
     document.querySelector("#btnEliminar").disabled = false;
 }

 // Deshabilitar botones de modificar y eliminar
 function disableButtons() {
     document.querySelector("#btnModificar").disabled = true;
     document.querySelector("#btnEliminar").disabled = true;
 }
