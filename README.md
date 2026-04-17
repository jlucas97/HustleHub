# The Hustle Hub - Full-Stack Business Manager

## Overview

The **Hustle Hub** is a financial command center designed to manage and visualize various business ventures. This project tracks my evolution as a software engineer—from building a robust backend data structure in SQL to crafting a type-safe logic layer in TypeScript and a dynamic web interface in JavaScript.

By building this software, I have focused on progressing from raw data integrity through relational databases to advanced logic implementation. This project demonstrates mastery of **Recursion**, **Asynchronous Programming**, and **Strict Type-Safety** to create a scalable architecture.

**Module 3 (TypeScript) Demo Video:** [\[http://youtube.link.goes.here](https://youtu.be/OQ6TKgHyRXE)]
**Module 2 (JavaScript) Demo Video:** [https://youtu.be/Zyt9631QBl0](https://youtu.be/Zyt9631QBl0)
**Module 1 (SQL) Demo Video:** [https://youtu.be/MUYYqWcO5vQ](https://youtu.be/MUYYqWcO5vQ)
**Full Project Intro:** [https://youtu.be/eRM-uCQuZ6c](https://youtu.be/eRM-uCQuZ6c)

---

## Technical Accomplishments (Module 3: TypeScript)

- **Strict Type-Safety & OOP:** Transitioned the business logic into classes (`Venture`, `IncomeLog`) to eliminate runtime type errors and enforce data integrity across the portfolio using TypeScript's strict mode.
- **Advanced Recursion:** Refactored the profit engine into a recursive class method that traverses deeply nested business hierarchies with absolute type certainty.
- **Asynchronous Data Bridge:** Developed a mock "Database Service" using `Promises` and `async/await` patterns to simulate real-world data fetching from a PostgreSQL backend.
- **Custom Exception Handling:** Created specialized error classes (`DatabaseConnectionError`) to gracefully manage system faults and provide meaningful terminal feedback.
- **Interactive Terminal Interface:** Leveraged the Node.js `readline` module to build a CLI (Command Line Interface) for real-time financial data entry and processing.

---

## Technical Accomplishments (Module 2: JavaScript)

- **Dynamic UI Architecture:** Built a "Live" dashboard using **Vanilla JavaScript** and **Bootstrap** that updates the DOM instantly when new ventures are added.
- **Data Visualization:** Integrated **Chart.js** via CDN to translate raw financial objects into interactive bar charts, providing immediate visual feedback on ROI.
- **Functional Programming:** Leveraged ES6 native array methods (`.map()`, `.filter()`, and `.reduce()`) to process business data efficiently and cleanly.

---

## Technical Accomplishments (Module 1: SQL)

- **Relational Schema:** Established a One-to-Many (1:N) relationship between Ventures and Income Logs in a **PostgreSQL** environment.
- **Aggregation Logic:** Developed SQL queries using `SUM` and `LEFT JOIN` to calculate net profit per project directly at the database level.
- **Security:** Implemented parameterized queries to mitigate SQL Injection risks.

---

## Development Environment

- **Languages:** TypeScript (ESNext), JavaScript (ES6+), SQL
- **Compilers/Runtimes:** `ts-node` with the **SWC** engine for high-speed transpilation.
- **Frontend Frameworks:** Bootstrap 5 (CSS Framework)
- **Libraries:** Chart.js (Visualization), `readline` (CLI Input), `pg` (PostgreSQL client)
- **Tools:** Visual Studio Code, Node.js, Git/GitHub

---

## Useful Websites

- [TypeScript Documentation - Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [MDN Web Docs - JavaScript Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [PostgreSQL Official Documentation](https://www.postgresql.org/docs/)

---

## Future Work

- **Live Database Integration:** Replace the current simulated service with a live connection to the PostgreSQL backend.
- **Frontend Refactor:** Migrate the Module 2 JavaScript dashboard into a TypeScript/React framework for a unified, type-safe full-stack experience.
- **Persistent Storage:** Implement user authentication and session-based state to save portfolio changes across browser refreshes.
