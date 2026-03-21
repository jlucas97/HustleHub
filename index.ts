import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { createVenture, getAllVentures, updateCost, deleteVenture, createIncome, getAllIncomes, updateIncome, deleteIncome } from './appDB';
import { pool } from './dbConfig';

const rl = readline.createInterface({ input, output });

async function mainMenu() {
    let exit = false;

    while (!exit) {
        console.log("\n--- THE HUSTLE HUB: MAIN MENU ---");
        console.log("1. View All Ventures (Financial Summary)");
        console.log("2. Create New Venture");
        console.log("3. Update Venture Cost");
        console.log("4. Delete Venture");
        console.log("---------------------------------");
        console.log("5. View All Income Logs");
        console.log("6. Create New Income Log");
        console.log("7. Update Income Log");
        console.log("8. Delete Income Log");
        console.log("9. Exit");

        const choice = await rl.question("\nSelect an option (1-9): ");

        switch (choice) {
            case '1':
                console.log("\n--- Project Financial Summary ---");
                const ventures = await getAllVentures();
                // We check if data exists, then display it
                if (ventures && ventures.length > 0) {
                    console.table(ventures);
                } else {
                    console.log("No ventures found. Use Option 2 to add one.");
                }
                break;

            case '2':
                const name = await rl.question("Enter Venture Name: ");
                const costInput = await rl.question("Enter Startup Cost: ");
                await createVenture(name, parseFloat(costInput) || 0);
                break;

            case '3':
                const upId = await rl.question("Enter Venture ID to Update: ");
                const newCost = await rl.question("Enter New Cost: ");
                await updateCost(parseInt(upId), parseFloat(newCost) || 0);
                break;

            case '4':
                const delId = await rl.question("Enter Venture ID to Delete: ");
                await deleteVenture(parseInt(delId));
                break;

            case '5':
                console.log("\n--- Detailed Income Records ---");
                const incomes = await getAllIncomes();
                if (incomes && incomes.length > 0) {
                    console.table(incomes);
                } else {
                    console.log("No income logs found. Use Option 6 to record income.");
                }
                break;

            case '6':
                const vId = await rl.question("Enter Venture ID for this income: ");
                const amount = await rl.question("Enter Income Amount: ");
                await createIncome(parseInt(vId), parseFloat(amount) || 0);
                break;

            case '7':
                const incId = await rl.question("Enter Income Log ID to update: ");
                const newAmt = await rl.question("Enter New Amount: ");
                await updateIncome(parseInt(incId), parseFloat(newAmt) || 0);
                break;

            case '8':
                const remId = await rl.question("Enter Income Log ID to delete: ");
                await deleteIncome(parseInt(remId));
                break;

            case '9':
                console.log("Exiting... Goodbye!");
                exit = true;
                break;

            default:
                console.log("Invalid option, try again.");
        }
    }
    
    await pool.end();
    rl.close();
}

mainMenu();
