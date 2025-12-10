const incomeInput = document.querySelector("#income");
const expenseInputs = document.querySelectorAll(".expense"); 
const remainingBudget = document.querySelector("#remainingBudget");
const calcBtn = document.querySelector("#calcBtn");

//calculate remaining budget by subracting all expenses from total income
function updateBudget () {
    const income = parseFloat(incomeInput.value) || 0;
//loop through expenses and add its value to the toal
let totalExpense = 0;
    for (let i = 0; i < expenseInputs.length; i++) {
        totalExpense += parseFloat(expenseInputs[i].value) || 0;
    }
//update the remaining budget
    const budget = income - totalExpense;
    remainingBudget.textContent = "$" + budget.toFixed(2);
}

incomeInput.addEventListener("click", updateBudget);
expenseInputs.forEach(exp => exp.addEventListener("click", updateBudget));
calcBtn.addEventListener("click", updateBudget);
