# The Hustle Hub - Business Venture Manager

## Overview

The purpose of this software is to provide a robust tool to manage my personal business ventures, including my AI Agency, YouTube channels, and eCommerce projects. This application serves as a centralized "Command Center" to monitor startup costs and track individual income logs to evaluate the true profitability of each project.

By building this tool, I am not only organizing my professional life but also mastering the interaction between **TypeScript** and **PostgreSQL** to build secure, data-driven applications.

**YouTube Introductory Video:** [https://youtu.be/eRM-uCQuZ6c](https://youtu.be/eRM-uCQuZ6c)

**YouTube Demo Video:** [[https://youtu.be/eRM-uCQuZ6c](https://youtu.be/eRM-uCQuZ6c](https://youtu.be/MUYYqWcO5vQ))

## Relational Database Schema

The system implements a **One-to-Many (1:N) relationship**:
* **Business Ventures (Parent):** Stores the name and initial capital investment for each hustle.
* **Income Logs (Child):** Tracks every revenue entry linked back to a specific venture. This table also supports operational expenses recorded as negative values.



## Development Environment

* **IDE:** Visual Studio Code
* **Language:** TypeScript
* **Runtime:** Node.js
* **Database:** PostgreSQL (Configured on Port 5433)
* **Libraries:** `pg` (node-postgres) for database interaction and `readline/promises` for the CLI.

## Technical Accomplishments

* **Relational CRUD:** Implemented full Create, Read, Update, and Delete functionality for both tables, ensuring data integrity through Foreign Keys and `ON DELETE CASCADE` constraints.
* **SQL Aggregation:** Developed complex queries using `SUM`, `COALESCE`, and `LEFT JOIN` to calculate total revenue and net profit per project directly in the database.
* **Security & Sanitization:** Mitigated SQL Injection risks by using **parameterized queries** ($1, $2 placeholders) for all user-provided data.
* **Interactive CLI:** Built a recursive menu system that allows for real-time data entry and financial reporting within the terminal.

## Useful Websites

* [TypeScript Documentation](https://www.typescriptlang.org/docs/)
* [PostgreSQL Official Documentation](https://www.postgresql.org/docs/)
* [Node-Postgres (pg) Documentation](https://node-postgres.com/)

## Future Work

* **Dedicated Expense Tracking:** Transition from negative income logs to a dedicated "Expenses" table for more granular accounting.
* **Frontend Integration:** Build a React or Next.js dashboard to visualize profit trends.
* **Authentication:** Implement a login system to secure personal financial data.
