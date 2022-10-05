var userInputBillAmount = document.querySelector("#bill-amount");
var checkButton = document.querySelector(".btn-change")
var userInputCashGiven = document.querySelector("#cash-given");
var tableOutput = document.querySelector("#notes");
var errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

function showErrorMessage(message)
{
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}
function checkButtonClickHandler()
{
    errorMessage.style.display = "none";
    const billAmount = parseInt(userInputBillAmount.value);
    const cashGiven = parseInt(userInputCashGiven.value);
    var notesAvailable = [2000, 500, 100, 20, 10, 5, 1];

    if (billAmount > 0)
    {
        if (cashGiven > billAmount)
        {
            var changeToBeReturned = cashGiven - billAmount;
            for (let i = 0; i < notesAvailable.length; i++)
            {
                const numberOfNotes = Math.trunc(changeToBeReturned / notesAvailable[i]);
                changeToBeReturned %= notesAvailable[i];
                noOfNotes[i].innerText = numberOfNotes;
            }
        }
        else
        {
            showErrorMessage("Cash given should atleast be equal to the bill amount");
        }
    }
    else
    {
        showErrorMessage("Invalid Bill Amount")
    }
}

checkButton.addEventListener("click", checkButtonClickHandler);