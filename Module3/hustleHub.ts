// @ts-ignore
const readline = require('readline');

/**
 * Represents an individual financial record.
 * Used to populate the logs within a Venture.
 */
class IncomeLog {
    constructor(
        public amount: number, 
        public source: string, 
        public date: Date = new Date()
    ) {}
}

/**
 * The core business unit. Handles nested sub-projects 
 * and calculates total revenue using recursion.
 */
class Venture {
    public subProjects: Venture[] = [];
    public logs: IncomeLog[] = [];

    constructor(public name: string, public description: string = "") {}

    
    //Adds a new income record to the venture's local logs.
    addLog(amount: number, source: string): void {
        const newLog = new IncomeLog(amount, source);
        this.logs.push(newLog);
    }

    /**
     * RECURSION: Traverses the tree of sub-projects to sum all 
     * income logs across the entire organizational hierarchy.
     */
    calculateTotalRevenue(): number {
        let total = this.logs.reduce((sum, log) => sum + log.amount, 0);
        
        // Recursive step: iterate through every sub-project
        for (const sub of this.subProjects) {
            total += sub.calculateTotalRevenue();
        }
        return total;
    }
}

/**
 * Custom error class for handling simulated database 
 * connection failures or data validation errors.
 */
class DatabaseConnectionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DatabaseConnectionError";
    }
}

async function fetchPortfolioData(portfolioName: string): Promise<Venture> {
    console.log(`\n[System] Connecting to PostgreSQL Bridge for: ${portfolioName}...`);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isOnline = true; 

            if (isOnline) {
                const root = new Venture(portfolioName, "Primary Aggregator");
                
                const devAgency = new Venture("Web Dev Agency", "Software Services");
                devAgency.addLog(5000, "Enterprise Contract");
                devAgency.addLog(1200, "Maintenance Fee");

                const marketingBranch = new Venture("Ad Stream", "Social Media Marketing");
                marketingBranch.addLog(2300, "Ad Campaign B");

                root.subProjects.push(devAgency);
                root.subProjects.push(marketingBranch);

                resolve(root);
            } else {
                reject(new DatabaseConnectionError("Remote bridge is unreachable. Verify Module 1 status."));
            }
        }, 1500);
    });
}

/**
 * INTERACTIVE TERMINAL OUTPUT: Manages the user input flow.
 * Note: Use 'as any' for process to bypass environment type issues.
 */
async function startInteractiveSession() {
    const rl = readline.createInterface({
        input: (process as any).stdin,
        output: (process as any).stdout
    });

    console.log("==========================================");
    console.log("       HUSTLE HUB: TS BRIDGE v1.0        ");
    console.log("==========================================");

    rl.question('Please enter the name for your Venture Portfolio: ', async (nameInput: string) => {
        const name = nameInput.trim() || "Default Portfolio";

        try {
            const myHustleHub = await fetchPortfolioData(name);

            console.log("\n--- INTEGRATION SUCCESSFUL ---");
            console.log(`Portfolio Name: ${myHustleHub.name}`);
            console.log(`Sub-Projects Managed: ${myHustleHub.subProjects.length}`);
            
            const totalRevenue = myHustleHub.calculateTotalRevenue();
            console.log(`Total Consolidated Revenue: $${totalRevenue}`);
            console.log("-------------------------------\n");

        } catch (error) {
            if (error instanceof DatabaseConnectionError) {
                console.error(`CRITICAL ERROR: ${error.message}`);
            } else {
                console.error("An unexpected system fault occurred.");
            }
        } finally {
            rl.close();
            console.log("Session ended. Closing database bridge...");
        }
    });
}

startInteractiveSession();