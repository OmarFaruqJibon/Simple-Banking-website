
function getInputValue(inputId){
    const inputField= document.getElementById(inputId);
    const  totalAmount= parseFloat(inputField.value);
    
    // clear input field
    inputField.value = '';
    return totalAmount;
}


function updateAmount(inputId,currentAmount){
    const previousAmountText  = document.getElementById(inputId);
    const previousAmount  = parseFloat(previousAmountText.innerText);

    const totalAmount = previousAmount + currentAmount;
    previousAmountText.innerText = totalAmount;
}

function getCurrentBalance(){
    const balance = document.getElementById('total-balance');
    const balanceAmount  = parseFloat(balance.innerText);
    return balanceAmount;
}

function updateTotalBalance(currentAmount, isAdd) {
    const balance = document.getElementById('total-balance');
    const balanceAmount  = getCurrentBalance();

    if(isAdd == true) {
        balance.innerText  = balanceAmount + currentAmount;
    }else{
        balance.innerText  = balanceAmount - currentAmount;
    }
}



// handle deposit
document.getElementById('deposit-btn').addEventListener('click', function(){

    // add deposit
    const currentDepositAmount =  getInputValue('deposit-input');

    if(currentDepositAmount>0){
        //update deposit amount
        updateAmount('deposit-amount',currentDepositAmount);
        // update balance
        updateTotalBalance(currentDepositAmount, true);
    }else{
        alert('Warning! Please enter a valid deposit amount..!');
    }

});



// handle withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){

    //add amount for withdraw
    const currentWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if(currentWithdrawAmount>0){
        if(currentWithdrawAmount > currentBalance){
            alert('Sorry! You do not have enough balance..!');
        }else{
        //update withdraw amount
        updateAmount('withdraw-amount',currentWithdrawAmount);
        // update balance
        updateTotalBalance(currentWithdrawAmount, false);
        }
    }else{
        alert('Warning! Please enter a valid withdraw amount..!');
    }

});





