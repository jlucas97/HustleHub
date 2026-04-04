import { pool } from './dbConfig';

/*This file will include the DB functions that we will use in our app.
It will import the pool from dbConfig.ts and export functions to interact with the database.
To mitigate the risk of SQL injection, I implemented parameterized queries using the
pg library's built-in sanitization.*/


// --- Business Venture Functions ---

export async function getAllVentures() {
    //Coalescing SUM to 0 if there are no income logs for a venture, and calculating net profit 
    // directly in the query. The left join ensures we get all ventures with or 
    // without income logs.
    try {
        const query = `
            SELECT bv.id, bv.project_name, bv.startup_cost, 
                   COALESCE(SUM(il.amount_earned), 0) as total_income,
                   (COALESCE(SUM(il.amount_earned), 0) - bv.startup_cost) as net_profit
            FROM business_ventures bv
            LEFT JOIN income_logs il ON bv.id = il.project_id
            GROUP BY bv.id, bv.project_name, bv.startup_cost
            ORDER BY bv.id ASC;
        `;
        const res = await pool.query(query);
        return res.rows;
    } catch (err) {
        console.error('Error fetching ventures:', err);
        return [];
    }
}

export async function createVenture(name: string, cost: number) {
    try {
        const query = 'INSERT INTO business_ventures (project_name, startup_cost) VALUES ($1, $2) RETURNING *';
        const res = await pool.query(query, [name, cost]);
        console.log('Created Venture:', res.rows[0]);
        return res.rows[0].id;
    } catch (err) {
        console.error('Error creating venture:', err);
    }
}

export async function updateCost(id: number, newCost: number) {
    try {
        const query = 'UPDATE business_ventures SET startup_cost = $1 WHERE id = $2';
        await pool.query(query, [newCost, id]);
        console.log(`Updated ID ${id} with new cost: ${newCost}`);
    } catch (err) {
        console.error('Error updating cost:', err);
    }
}

export async function deleteVenture(id: number) {
    try {
        await pool.query('DELETE FROM business_ventures WHERE id = $1', [id]);
        console.log(`Deleted project ID: ${id}`);
    } catch (err) {
        console.error('Error deleting venture:', err);
    }
}

// --- Income Log Functions ---

export async function createIncome(projectId: number, amount: number) {
    try {
        const query = 'INSERT INTO income_logs (project_id, amount_earned) VALUES ($1, $2) RETURNING *';
        const res = await pool.query(query, [projectId, amount]);
        console.log(`Income of ${amount} recorded for Project ID ${projectId}`);
        return res.rows[0];
    } catch (err) {
        console.error('Error creating income log:', err);
    }
}

export async function getAllIncomes() {
    try {
        const query = `
            SELECT il.id, bv.project_name, il.amount_earned, il.payment_date 
            FROM income_logs il
            JOIN business_ventures bv ON il.project_id = bv.id
            ORDER BY il.payment_date DESC;
        `;
        const res = await pool.query(query);
        return res.rows;
    } catch (err) {
        console.error('Error fetching incomes:', err);
        return [];
    }
}

export async function updateIncome(id: number, newAmount: number) {
    try {
        const query = 'UPDATE income_logs SET amount_earned = $1 WHERE id = $2';
        await pool.query(query, [newAmount, id]);
        console.log(`Updated Income Log ${id} with amount: ${newAmount}`);
    } catch (err) {
        console.error('Error updating income:', err);
    }
}

export async function deleteIncome(id: number) {
    try {
        const query = 'DELETE FROM income_logs WHERE id = $1';
        await pool.query(query, [id]);
        console.log(`Deleted Income Log: ${id}`);
    } catch (err) {
        console.error('Error deleting income:', err);
    }
}