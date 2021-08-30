function EnterNumber(num){
    document.getElementById('Answer').value += num;
}

function EnterOperator(op){
    document.getElementById('Answer').value += op;
}

function EnterEqual(){
    var val = document.getElementById('Answer').value;   
    document.getElementById('Answer').value = eval(val);    
}
function EnterClear(){
    document.getElementById('Answer').value = '';
}