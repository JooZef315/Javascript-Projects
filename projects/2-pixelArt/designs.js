const Submit = document.querySelector('#submit');
const Del = document.querySelector('#Del');
const Table = document.querySelector('table');

function  makeOp() {

}

function  makeGrid() {
  var Height = document.querySelector('#inputHeight').value;
  var Width = document.querySelector('#inputWidth').value;

  for (var i = 0; i < Height; i++) {
    var Row = document.createElement('tr');
    Row.setAttribute('class', 'trow');
    for (var j = 0; j < Width; j++) {
      var Cell = document.createElement('td');
      Cell.setAttribute('id', 'ce'+i+j);
      Cell.setAttribute('class', 'ce');
      Row.appendChild(Cell);
    	 }
      Table.appendChild(Row);
     }
     Table.style.backgroundColor='white';

     const Cells = document.querySelectorAll('.ce');
      for(let z = 0; z < Cells.length; z++){
        Cells[z].addEventListener('click',function(){
          const Color = document.querySelector('#colorPicker').value;
          if (Cells[z].style.backgroundColor==='') {
            Cells[z].style.backgroundColor=Color;
          }
          else {
            Cells[z].style.backgroundColor='';
          }
        });
      }
}
function  delGrid() {
  const Cells = document.querySelectorAll('.trow');
  for(let z = 0; z < Cells.length; z++){
    Cells[z].remove();
  }
}
Submit.addEventListener("click",function check() {
  var Height1 = document.querySelector('#inputHeight').value;
  var Width1 = document.querySelector('#inputWidth').value;
  if ((Height1 >= 1 && Height1 <=50) && (Width1 >= 1 && Width1 <=50)) {
    return makeGrid();
  }
  else {
    return alert("please enter a number between 1 & 50");
  }
});
Del.addEventListener("click",delGrid);
