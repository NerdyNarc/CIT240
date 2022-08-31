var containerEle = document.body.querySelector(".container");

const bill = parseInt(prompt('Input your Bill: '));

const Tax = bill * .07;
const Tip_Bill = Tax + bill;
const Tip = Tip_Bill * .15;
let result;

result = bill + Tip + Tax;
const numberFormat = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD'
});
 
const newresult = numberFormat.format(result)

containerEle.innerHTML= "Your Final Bill is " +newresult;