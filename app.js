function updateProductNumber(product,selectedProductTotal,price,isIncreasing){
    const productInput = document.getElementById(product);
    let productInputText = productInput.value;
    if (isIncreasing == true) {
     
        productInputText = parseInt(productInputText)+1;
    } 
    else if(productInputText > 0) {
        
        productInputText = parseInt(productInputText)-1;
    }
    productInput.value = productInputText;
    // update product total
    const productTotal = document.getElementById(selectedProductTotal);
    const total = productInputText*price;
    productTotal.innerText = total;
    //calculate total
    calculateTotal();
}
//using this function for get total input product
function getInputValue(product){
    const productInput= document.getElementById(product).value;
    const productNumber  = parseFloat(productInput);
    return productNumber;
}
//using this function for get all product total price 
function calculateTotal(){

   
    const phoneTotal = getInputValue('phone-number') *1219 ;
    const caseTotal = getInputValue('case-number') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /10;
    const total = subTotal + tax;
    // update on the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total-price').innerText = total;
}
// phone increase decrease event 
document.getElementById('phone-plus').addEventListener('click',function(){
    const total
    = updateProductNumber('phone-number','phone-total',1219,true);
    
   
    })
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone-number','phone-total',1219,false);
    })

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click',function(){
   updateProductNumber('case-number','case-total',59,true);
})
document.getElementById('case-minus').addEventListener('click',function(){
   updateProductNumber('case-number','case-total',59,false);
     
})


