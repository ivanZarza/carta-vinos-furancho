// Utilidad para localStorage
const STORAGE_KEY = 'vinosFurancho';

function getVinos() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) return JSON.parse(data);
  // Array vacío: solo se guardan los vinos creados/gestionados por el usuario
  return [];
}

function saveVinos(vinos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(vinos));
}

// Crear vino
if(document.getElementById('form-crear')) {
  document.getElementById('form-crear').onsubmit = function(e) {
    e.preventDefault();
    const vinos = getVinos();
    const data = Object.fromEntries(new FormData(this));
    data.visible = this.visible.checked;
    vinos.push(data);
    saveVinos(vinos);
    document.getElementById('msg').innerText = 'Vino guardado correctamente.';
    this.reset();
  };
}

// Buscar y editar vino
if(document.getElementById('buscar')) {
  const buscarInput = document.getElementById('buscar');
  buscarInput.addEventListener('input', buscarVino);
  window.buscarVino = function() {
    const query = buscarInput.value.trim().toLowerCase();
    const vinos = getVinos();
    const resultados = vinos.filter(v => v.nombre.toLowerCase().includes(query) || (v.descripcion && v.descripcion.toLowerCase().includes(query)));
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';
    if(resultados.length > 0 && query.length > 0) {
      resultados.forEach(vino => {
        const item = document.createElement('div');
        item.className = 'result-item';
        item.textContent = vino.nombre;
        item.onclick = function() {
          const form = document.getElementById('form-editar');
          form.style.display = 'block';
          Object.keys(vino).forEach(k => {
            if(form[k]) {
              if(form[k].type === 'checkbox') {
                form[k].checked = vino[k] === true || vino[k] === 'true';
              } else {
                form[k].value = vino[k];
              }
            }
          });
          form.onsubmit = function(e) {
            e.preventDefault();
            Object.assign(vino, Object.fromEntries(new FormData(form)));
            vino.visible = form.visible.checked;
            saveVinos(vinos);
            document.getElementById('msg').innerText = 'Vino actualizado.';
          };
        };
        resultadosDiv.appendChild(item);
      });
    } else if(query.length > 0) {
      resultadosDiv.innerHTML = '<div style="color:#a04a5a;">No se encontraron vinos.</div>';
    }
  };
}

// Buscar y eliminar vino
if(document.getElementById('buscar-eliminar')) {
  const buscarEliminarInput = document.getElementById('buscar-eliminar');
  buscarEliminarInput.addEventListener('input', buscarEliminar);
  window.buscarEliminar = function() {
    const query = buscarEliminarInput.value.trim().toLowerCase();
    const vinos = getVinos();
    const resultados = vinos.filter(v => v.nombre.toLowerCase().includes(query) || (v.descripcion && v.descripcion.toLowerCase().includes(query)));
    const resultadosDiv = document.getElementById('resultados-eliminar');
    resultadosDiv.innerHTML = '';
    if(resultados.length > 0 && query.length > 0) {
      resultados.forEach(vino => {
        const item = document.createElement('div');
        item.className = 'result-item';
        item.textContent = vino.nombre;
        item.onclick = function() {
          document.getElementById('vino-eliminar').style.display = 'block';
          document.getElementById('info-vino').innerText = JSON.stringify(vino, null, 2);
          window.vinoAEliminar = vino;
        };
        resultadosDiv.appendChild(item);
      });
    } else if(query.length > 0) {
      resultadosDiv.innerHTML = '<div style="color:#a04a5a;">No se encontraron vinos.</div>';
      document.getElementById('vino-eliminar').style.display = 'none';
    }
  };
  window.confirmarEliminar = function() {
    if(confirm('¿Seguro que quieres eliminar este vino?')) {
      let vinos = getVinos();
      vinos = vinos.filter(v => v !== window.vinoAEliminar);
      saveVinos(vinos);
      document.getElementById('msg').innerText = 'Vino eliminado.';
      document.getElementById('vino-eliminar').style.display = 'none';
      document.getElementById('resultados-eliminar').innerHTML = '';
    }
  };
}
