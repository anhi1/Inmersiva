AFRAME.registerComponent('spheregenerator', {
  init: function () {
    let button = this.el;
    button.addEventListener('click', function () {
      let scene = document.querySelector('#scene');
      let newBox = document.createElement('a-sphere');

      newBox.setAttribute('color', 'blue');
      newBox.setAttribute('scale', '0.3 0.3 0.3');
     

      let newX = Math.random() * 2 - 1;
       newBox.setAttribute('position', `${newX} 5 -3`);
       newBox.setAttribute("dynamic-body", "shape:sphere");
      scene.appendChild(newBox);
    });
  }
});