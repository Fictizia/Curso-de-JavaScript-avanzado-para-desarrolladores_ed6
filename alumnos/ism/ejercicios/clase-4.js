const estanteria = {
  libros: [{
    nombre: 'El caballero oscuro',
    autor: 'Frank Miller',
    leido: false
  },
  {
    nombre: 'El mundo amarillo',
    autor: 'Albert Espinosa',
    leido: false,
  },
  {
    nombre: 'Harry Potter y el caliz de fuego',
    autor: 'J.K. Rowling',
    leido: true,
  },
  {
    nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    leido: false
  },
  {
    nombre: 'Berserk',
    autor: 'Kentaro Miura',
    leido: true
  },
  {
    nombre: 'Iliada',
    autor: 'Homero',
    leido: false
  }],
  log() {
    this.libros.forEach((libro) => {
      if (libro.leido) {
        respuesta += `Ya has leído ${libro.nombre} de ${libro.autor} ✅\n`;      
      } else {
        respuesta += `Aún no has leído ${libro.nombre} de ${libro.autor} ❌\n`;      
      }
    });
    return respuesta
  },
    sugerencia() {
        
    }
    
    
}
