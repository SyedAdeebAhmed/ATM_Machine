import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
const checkBalance = () => {
    console.log(`Your balance is ${myBalance}`);
    furtherAct();
};
const cashWithdraw = async () => {
    console.log(`Your current balance is ${myBalance}`);
    const withdraw = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "How much would you like to withdraw?"
        }
    ]);
    myBalance = myBalance - withdraw.amount;
    console.log(`Your new balance is ${myBalance}`);
    furtherAct();
};
const depositAmmount = async () => {
    console.log(`Your current balance is ${myBalance}`);
    const deposit = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "How much would you like to deposit?"
        }
    ]);
    myBalance = myBalance + deposit.amount;
    console.log(`Your new balance is ${myBalance}`);
    furtherAct();
};
const exit = () => {
    console.log("Thank you for using our ATM");
};
const furtherAct = () => {
    inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "Do you want to perform further activity with your account",
            choices: ["Yes", "Exit"]
        }
    ]).then((furtherAct) => {
        switch (furtherAct.action) {
            case "Exit":
                exit();
                break;
            default:
                atm();
                break;
        }
    });
};
const atm = async () => {
    const userPin = await inquirer.prompt([
        {
            name: "pin",
            type: "number",
            message: "Enter your pin to continue",
        }
    ]);
    if (userPin.pin == myPin) {
        const userAction = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                message: "What would you like to do?",
                choices: ["Withdraw", "Deposit", "Check Balance", "Exit"]
            }
        ]);
        switch (userAction.action) {
            case "Withdraw":
                cashWithdraw();
                break;
            case "Deposit":
                depositAmmount();
                break;
            case "Check Balance":
                checkBalance();
                break;
            case "Exit":
                exit();
                break;
        }
    }
    else {
        console.log("Wrong pin");
    }
};
atm();
