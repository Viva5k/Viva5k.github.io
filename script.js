// перетаскивание файла
const initApp = () => {
  const dropArea = document.querySelector('.wrap_drop');
  const active = () => dropArea.classList.add("border_green");
  const inactive = () => dropArea.classList.remove("border_green");
  const inputFile = document.querySelector('.input_file');
  const prevents = (e) => e.preventDefault();
  ['dragenter',
    'dragover',
    'dragleave',
    'drop'].forEach(evtName => {
      dropArea.addEventListener(evtName, prevents);
    });
  ['dragenter',
    'dragover'].forEach(evtName => {
      dropArea.addEventListener(evtName, active);
    });
  ['dragleave',
    'drop'].forEach(evtName => {
      dropArea.addEventListener(evtName, inactive);
    });
  dropArea.addEventListener('drop', handleDrop);
  dropArea.addEventListener('click', () => {
    inputFile.click();
    
  });
  
  
}
// файл тут 
const handleDrop = (e) => {
  const dt = e.dataTransfer;
  const file = dt.files;
  const fileArroy = [...file];
  console.log(fileArroy);
}
// добавление блока информации
const addBlocInfo  = () => {
  const blockCode = '<img class="image_box" src="image/2.jpg" alt="" />'+'<h2 class="">test</h2>';
  const infoBlock = document.createElement('div');
  const main = document.querySelector('.wrapper');
  infoBlock.className = 'box';
  infoBlock.innerHTML = blockCode;
  main.appendChild(infoBlock);
}

document.addEventListener('DOMContentLoaded',() => {
  initApp();
  addBlocInfo();
});