document.addEventListener("DOMContentLoaded", function() {
    const nombreEjercicio = document.getElementById("nombreEjercicio");
    const seriesInput = document.getElementById("series");
    const listaEjercicios = document.getElementById("listaEjercicios");

    const ejercicios = [];

    document.getElementById("agregarEjercicio").addEventListener("click", function() {
        const ejercicio = {
            nombre: nombreEjercicio.value,
            series: seriesInput.value,
            cargas: [],
            repeticiones: []
        };

        // Generar campos de carga y repeticiones según la cantidad de series
        for (let i = 0; i < ejercicio.series; i++) {
            ejercicio.cargas.push(prompt(`Carga para la serie ${i + 1}:`));
            ejercicio.repeticiones.push(prompt(`Repeticiones para la serie ${i + 1}:`));
        }

        ejercicios.push(ejercicio);

        // Mostrar el ejercicio en la lista
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${ejercicio.nombre}</h3>
            <p>Cargas: ${ejercicio.cargas.join('KG, ')}</p>
            <p>Repeticiones: ${ejercicio.repeticiones.join(', ')}</p>
        `;
        listaEjercicios.appendChild(li);

        // Limpiar los campos del formulario
        nombreEjercicio.value = "";
        seriesInput.value = "";
    });
});
