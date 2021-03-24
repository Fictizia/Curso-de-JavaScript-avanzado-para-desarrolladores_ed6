document.addEventListener('DOMContentLoaded', () => {
  // Swal.fire({
  //   title: "Buenas",
  //   text: "Eres imbécil",
  //   confirmButtonText: "okis",
  //   stopKeydownPropagation: true,
  //   customClass: {
  //     popup: 'alert-container bienvenida',
  //   }
  // });

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