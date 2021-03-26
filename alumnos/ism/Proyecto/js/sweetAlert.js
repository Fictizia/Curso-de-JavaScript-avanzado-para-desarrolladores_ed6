document.addEventListener('DOMContentLoaded', () => {
  Swal.fire({
    html: "<p>Bienvenido al Buscacuñados. En el siguiente tablero hay 20 cuñados bien enterrados. Encuéntralos señalándolos con la insignia patria</p><p>Si no sabes cómo se juega, lo gugleas, que los chavales queréis todo hecho para ayer y yo a tu edad no tenía tantas facilidades.</p>",
    confirmButtonText: "Al ruedo",
    stopKeydownPropagation: true,
    buttonsStyling: false,
    customClass: {
      popup: 'alert-container bienvenida',
      confirmButton: 'alert-button'
    }
  });

  const helpBtn = document.getElementById('help');

  helpBtn.addEventListener('click', function() {
    Swal.fire({
      title: "Instrucciones",
      html: "<h3>Plantar bandera</h3><p>click</p><h3>Quitar bandera</h3><p>ctrl/alt + click o click derecho</p>",
      confirmButtonText: "comprendido",
      customClass: {
        popup: 'alert-container instrucciones',
      }
    })
  });
  
});