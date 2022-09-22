//EVENT HANDLER ON DEPOSITE BUTTON

//Step-1:Add Event Handler The Deposite Button
document.getElementById('deposite-Button').addEventListener('click', function () {

    //Step-2:Get The Ammount From The Deposite Input Field
    const depositeButton = document.getElementById('dep-field');
    const newDepositeAmmountString = depositeButton.value;
    const newDepositeAmmount = parseFloat(newDepositeAmmountString)



    //Step-3:Get The Current Deposite Ammount
    const currentAmmount = document.getElementById('dep-total')
    const previousAmmountString = currentAmmount.innerText;
    const previousAmmount = parseFloat(previousAmmountString);
    const updatedDepositeAmmount = previousAmmount + newDepositeAmmount;
    currentAmmount.innerText = updatedDepositeAmmount;

    //Step-4:Clear The Input Field
    depositeButton.value = '';

    //Step-5:Increase Balance of Total
    const currrentTotalBalance = document.getElementById('total-balance');
    const totalBalanceString = currrentTotalBalance.innerText;
    const totalBalance = parseFloat(totalBalanceString);


    const updatedTotalBalance = newDepositeAmmount + totalBalance;
    currrentTotalBalance.innerText = updatedTotalBalance;
})

//EVENT HANDLER ON WITHDRAW BUTTON
//Step-6:Add Event Handler The Withdraw Button
document.getElementById('withdraw-Button').addEventListener('click', function () {
    //step-7:To Get The Withdraw Ammount From Withdraw Input
    const withdrawField = document.getElementById('with-field');
    const withdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(withdrawAmmountString);


    //Step-8:To Set The New Withdraw Ammount In Withdraw Field
    const withhdrawAmmount = document.getElementById('with-ammount');
    const currentWithdrawAmmountString = withhdrawAmmount.innerText;
    const currentWithdrawAmmount = parseFloat(currentWithdrawAmmountString);


    //Step-9:To Decrease The Total Balance
    const previousTotalBalance = document.getElementById('total-balance')
    const totalBalanceString = previousTotalBalance.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    if (newWithdrawAmmount > totalBalance) {
        alert('You Do Not Have Sufficient Balance');
        return;
    }

    const updatedWithdrawAmmount = newWithdrawAmmount + currentWithdrawAmmount;
    withhdrawAmmount.innerText = updatedWithdrawAmmount;

    const updatedTotalBalance = totalBalance - newWithdrawAmmount;
    previousTotalBalance.innerText = updatedTotalBalance;



    //Step-10:Clear The Withdraw Field
    withdrawField.value = '';



})