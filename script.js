//increment event
const firstClassIncrement = document.getElementById('first-increment');
firstClassIncrement.addEventListener('click',function(){
    bookingUpdate('first-count', 1);
    subTotal(150);

})


// decrement event
const firstClassDecrement = document.getElementById('first-decrement');
firstClassDecrement.addEventListener('click',function(){
   const isDecrement =  bookingUpdate('first-count', -1);
   if(isDecrement){
       subTotal(-150);
   }  
})


// increment event economy class
const economyClassIncrement = document.getElementById('economy-increment');
economyClassIncrement.addEventListener('click',function(){
    bookingUpdate('economy-count',1);
    subTotal(100);
})


// decrement event economy class
const economyClassDecrement = document.getElementById('economy-decrement');
economyClassDecrement.addEventListener('click',function(){
   const isDecrement =  bookingUpdate('economy-count', -1);
   if(isDecrement){
       subTotal(-100);
   }  
})


// update increment or decrement booking
function bookingUpdate(id, countNumber){
    const booking = document.getElementById(id);
    const bookingCount =  parseInt(booking.value) + countNumber;
    if(bookingCount >= 0 ){
        booking.value = bookingCount;
        return true;
    }
}


//vat and total amount update 
function subTotal(amount){
    const subTotal = document.getElementById('subtotal');
    const subTotalCost = parseInt(subTotal.innerHTML) + amount;
    subTotal.innerText = subTotalCost;

    const vat = subTotalCost * .1;
    document.getElementById('vat').innerText = vat;

    const totalCost = subTotalCost + vat;
    document.getElementById('total').innerText = totalCost; 
}


// when book now button click  user alert
const bookNow = document.getElementById('book-now');
bookNow.addEventListener('click',function(){
    const totalAmount = parseInt(document.getElementById('total').innerText);
    if(totalAmount>109){
        alert('Your total amount is $'+totalAmount+'. Are you conform?');
    }
})