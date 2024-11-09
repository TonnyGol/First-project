function calculateFunc(button_id){
    var num1 = parseInt(document.getElementById('num1').value)
    var num2 = parseInt(document.getElementById('num2').value)

    var result = document.getElementById('result')
    

    switch(button_id) {
        case 'plusB':
          result.innerText = "Result: "+(num1 + num2)
          break;
        case 'minusB':
          result.innerText = "Result: "+(num1 - num2)
          break;
        case 'multiB':
          result.innerText = "Result: "+(num1 * num2)
          break;
        case 'divideB':
          result.innerText = "Result: "+(num1 / num2)
          break;  
        default:
          //
      }
}