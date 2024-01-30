AFRAME.registerComponent('spheregenerator', {
  init: function () {
    let button = this.el;
    button.addEventListener('click', function () {
      let scene = document.querySelector('#scene');
      let newBox = document.createElement('a-sphere');

      newBox.setAttribute('color', 'white');
      newBox.setAttribute('scale', '0.3 0.3 0.3');
     

      let newX = Math.random() * 2 - 1;
       newBox.setAttribute('position', `${newX} 5 -3`);
       newBox.setAttribute("dynamic-body", "shape:sphere");

        // Agregar textura
      newBox.setAttribute('material', 'src: ./assets/copos.png');
      scene.appendChild(newBox);
    });
  }
});


// AFRAME.registerComponent('spheregenerator', {
//   init: function () {
//     let button = this.el;
//     button.addEventListener('click', function () {
//       let scene = document.querySelector('#scene');
//       let newCube = document.createElement('a-box');

//       newCube.setAttribute('color', 'white'); // Color de respaldo si la textura no se carga correctamente
//       newCube.setAttribute('scale', '0.3 0.3 0.3');

//       let newX = Math.random() * 2 - 1;
//       newCube.setAttribute('position', `${newX} 5 -3`);
//       newCube.setAttribute("dynamic-body", "shape:box");

//       // Agregar textura
//       newCube.setAttribute('material', 'src: url(ruta_de_la_textura.jpg)');

//       scene.appendChild(newCube);
//     });
//   }
// });