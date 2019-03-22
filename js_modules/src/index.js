const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  // eslint-disable-next-line no-undef
  System.import('./image_viewer').then((module) => {
    module.default();
  });
};

document.body.appendChild(button);
