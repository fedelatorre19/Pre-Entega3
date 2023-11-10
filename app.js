let rutina = [];

function generarInputs() {
    const series = parseInt(document.getElementById('seriesInput').value);
    const ejerciciosSection = document.getElementById('ejerciciosSection');

    ejerciciosSection.innerHTML = '';
    for (let i = 1; i <= series; i++) {
        const ejercicioDiv = document.createElement('div');
        ejercicioDiv.innerHTML = `
            <h3>Ejercicio ${i}</h3>
            <label for="pesoEjercicio${i}">Peso (kg):</label>
            <input type="number" id="pesoEjercicio${i}">
            <label for="repeticionesEjercicio${i}">Repeticiones:</label>
            <input type="number" id="repeticionesEjercicio${i}">
        `;
        ejerciciosSection.appendChild(ejercicioDiv);
    }
}

function agregarOtroEjercicio() {
    const zonaCuerpo = document.getElementById('zonaCuerpo').value;
    const nombreEjercicio = document.getElementById('nombreEjercicio').value;

    const ejerciciosSection = document.getElementById('ejerciciosSection');
    const ejercicios = ejerciciosSection.getElementsByTagName('div');
    const datosEjercicios = [];

    for (let i = 0; i < ejercicios.length; i++) {
        const peso = document.getElementById(`pesoEjercicio${i + 1}`).value;
        const repeticiones = document.getElementById(`repeticionesEjercicio${i + 1}`).value;

        datosEjercicios.push({ peso, repeticiones });
    }

    
    const ejercicioInfoDiv = document.createElement('div');
    ejercicioInfoDiv.innerHTML = `
        <p>Zona del Cuerpo: ${zonaCuerpo}</p>
        <p>Nombre del Ejercicio: ${nombreEjercicio}</p>
    `;

    datosEjercicios.forEach((dato, i) => {
        ejercicioInfoDiv.innerHTML += `
            <p>Ejercicio ${i + 1}: Peso: ${dato.peso} kg, Repeticiones: ${dato.repeticiones}</p>
        `;
    });

    ejerciciosSection.appendChild(ejercicioInfoDiv);
}


function finalizarRutina() {
    
    alert('Rutina finalizada');
}
