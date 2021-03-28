document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
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
  }, 500);
  

  const helpBtn = document.getElementById('help');

  helpBtn.addEventListener('click', function() {
    Swal.fire({
      title: "Instrucciones",
      html: "<p>Clavar la Rojigualda: <span>click</span></p><p>Desclavar la Rojigualda: <span>alt/ctrl + click</span> o <span>click derecho</span></p><p>(Mi nieto de 4 años no necesita estas instrucciones, también te digo eh, ¡JAJAJA!)</p>",
      confirmButtonText: "Gracias, caballero",
      buttonsStyling: false,
      customClass: {
        popup: 'alert-container instrucciones',
        confirmButton: 'alert-button'
      }
    })
  });
  
});