function getInput(inputFieldName) {
    const fieldValue = document.getElementById(inputFieldName).value;
    const floatValue = parseFloat(fieldValue);
    if (floatValue >= 0 && typeof (floatValue) == 'number') {
        return floatValue;
    }
    else {
        alert(inputFieldName + " is empty or Invalid Input Type");
        document.getElementById(inputFieldName).value = '';
    }
}

function setFieldEmpty(fieldName, type) {
    if (type = 'innerText') {
        const emptyFiled = document.getElementById(fieldName);
        emptyFiled.innerText = ''
    }
    if (type = 'inputField') {
        const emptyFiled = document.getElementById(fieldName);
        emptyFiled.value = ''
    }
}

function displayValue(displayFieldName, displayValue) {
    const selectField = document.getElementById(displayFieldName);
    if (typeof (displayValue) == 'number') {
        selectField.innerText = displayValue;
    }
    else (
        displayFieldName.innerText = ''
    )
}

function calculate(plusOrminus, value1, value2, value3) {
    if (plusOrminus == true) {
        result = value1 + value2 + value3;
        return result;
    }
    if (plusOrminus == false) {
        result = value1 - value2;
        return result;
    }
}

//calculate

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeValue = getInput('income-input');
    const foodValue = getInput('food-input');
    const rentValue = getInput('rent-input');
    const clothesValue = getInput('cloth-input');
    const totalExpense = calculate(true, foodValue, rentValue, clothesValue);
    const totalBalance = calculate(false, incomeValue, totalExpense);
    console.log(incomeValue);
    console.log(totalExpense);
    console.log(totalBalance);
    if (incomeValue > totalExpense) {
        displayValue('total-expense', totalExpense);
        displayValue('balance', totalBalance);
    }
    else if (incomeValue < totalExpense) {
        alert("Your Expense is greater than your Income. Please spend within your income limit.")
        setFieldEmpty('food-input', 'inputField')
        setFieldEmpty('rent-input', 'inputField')
        setFieldEmpty('cloth-input', 'inputField')
    }
    else {
        setFieldEmpty('balance', 'innerText')
        setFieldEmpty('total-expense', 'innerText')
    }
})

//Save
document.getElementById('save-btn').addEventListener('click', function () {
    const balanceField = document.getElementById('balance').innerText;
    const balance = parseFloat(balanceField);
    const saveValue = getInput('save-percentenge');
    if (balance >= 0 && (saveValue.value != '')) {
        const savingAmount = (balance * saveValue) / 100;
        const remainginBalance = balance - savingAmount;
        if (saveValue <= 100) {
            displayValue('saving-amount', savingAmount);
            displayValue('remaining-balance', remainginBalance);
        }
        else {
            alert("You Can't Save more than 100%")
            setFieldEmpty('save-percentenge', 'inputField')
            setFieldEmpty('saving-amount', 'innerText')
            setFieldEmpty('remaining-balance', 'innerText')
        }
    }
})
