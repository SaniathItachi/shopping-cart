function updatedProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + "-input");
    let productNumber = productInput.value;
    if(isIncreasing){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update casePrice
    const productTotal = document.getElementById(product + "-price");
    productTotal.innerText = productNumber * price;

    // calculate total
    calculateTotal();

}



// update in subtotal
function getInput(product){
    const productTotalInput = document.getElementById(product + '-input').value;
    const productTotalPrice = parseInt(productTotalInput);
    return productTotalPrice;
}

function calculateTotal(){
    const phoneTotal = getInput('phone') * 1219;
    const caseTotal = getInput('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;

    // implementation of the price 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;

}

// phone plus function
document.getElementById("phone-plus").addEventListener('click', function(){
    updatedProductNumber('phone', 1219, true);
});

// phone minus function
document.getElementById("phone-minus").addEventListener('click', function(){
    updatedProductNumber('phone', 1219, false);    
});




// case plus function
document.getElementById("case-plus").addEventListener('click', function(){
    updatedProductNumber('case', 59, true);
})
// case minus function
document.getElementById("case-minus").addEventListener('click', function(){
    updatedProductNumber('case', 59, false);
})


