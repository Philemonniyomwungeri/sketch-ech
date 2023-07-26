let color = "gray";
const container = document.querySelector('.container');
const resizeBtn = document.querySelector('.resize');

createGrid(16);

function createGrid(size) {
  container.innerHTML = '';

  const squareSize = `${500 / size}px`;
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove()); 

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.addEventListener("mouseover",colorSquare); 
      square.style.backgroundColor = "gray";
    
    square.style.backgroundColor ="white"
    square.className = 'square';
    square.style.width = squareSize;
    square.style.height = squareSize;
  
    square.addEventListener('mouseenter', function () {
      square.classList.add('hovered');
    });

    square.addEventListener('mouseleave', function () {
      square.classList.remove('hovered');
    });

    container.appendChild(square);

    if ((i + 1) % size === 0) {
      container.appendChild(document.createElement('br'));
    }
  }
}

resizeBtn.addEventListener('click', function () {
  let newSize = prompt('Enter the new grid size (1 to 100):');
  newSize = parseInt(newSize);

  if (!isNaN(newSize) && newSize >= 1 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Invalid grid size. Please try again.');
  }
});

function colorSquare(){
if(color == "random"){
  this.style.backgroundColor = `hsl($(MATH.random() * 360), 100% 50%)`;
} else {
  this.style.backgroundColor = color;
}
}
function changecolor(choice){
  color = choice;
}
function resetbtn(){
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach(div) = (div.style.backgroundColor ="white");
}