let text = ""
let parsedA, parsedB = 0;
let operation = null

function setValues(){
  operandA = document.getElementById('input_a').value
  operandB = document.getElementById('input_b').value

  parsedA = parseInt(operandA)
  parsedB = parseInt(operandB)

  console.log({parsedA, parsedB})

  clear()

  if( isNaN(parsedA) | isNaN(parsedB) ){
    if((isNaN(parsedA) && isNaN(parsedA))){
      document.mycalculator.output.value = `Operands ${operandA} and ${operandB} are both not numbers`
    }else{
      let notNum  = isNaN(parsedA) ? operandA : operandB
      notNum = (isNaN(parsedA) && isNaN(parsedA)) ? notNum : `${operandA} and ${operandB}`
      document.mycalculator.output.value = `Operand ${notNum} is not a number`
    }
    return false
  }
  return true
}

function addValue(){
    if (!setValues()) return
    let total = parsedA + parsedB
    text = `${parsedA} + ${parsedB} = ${total}`
    document.mycalculator.output.value = text;
}


function mulValue(){
    if (!setValues()) return
    let result = parsedA * parsedB
    text = `${parsedA} x ${parsedB} = ${result}`
    document.mycalculator.output.value = text;
    console.log(text)
}

function divValue(){
    if (!setValues()) return
    let result = parsedA / parsedB
    text = `${parsedA} : ${parsedB} = ${result}`
    document.mycalculator.output.value = text;
    console.log(text)
}

function clear(){
  document.getElementById('input_a').value = ''
  document.getElementById('input_b').value = ''
}