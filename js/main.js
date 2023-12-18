//document.querySelector('#check').addEventListener('click', compute)
//
//function compute() {
//    let item = document.querySelector('#item').value
//    let price = document.querySelector('#price').value
//    let longTermGoal = document.querySelector('#goal').value
//    console.log(item)
//    console.log(price)
//
//    let priceWithInterest = price*1.08*1.05
//    let finalPrice =priceWithInterest.toFixed(2)
//
//    document.querySelector('#comparisonHere').innerText = `One year from now, would you rather have ${item} or $${finalPrice} in your ${longTermGoal} savings fund?`
//
//}


//Retype code from memory here//
document.querySelector('#check').addEventListener('click', compute)

function compute() {
   const item = document.querySelector('#item').value 
   const price = document.querySelector('#price').value
   const priceInAYear = price*1.08*1.05
   const finalPrice = priceInAYear.toFixed(2)
   const goal = document.querySelector('#goal').value

   document.querySelector('#comparisonHere').innerText = `In one year, would you rather have ${item} or $${finalPrice} in your ${goal} fund?`
}