# The Hustle Hub - Business Venture Manager

## Overview

The **Hustle Hub** is a financial command center designed to manage and visualize various business ventures. This project demonstrates the evolution from a robust backend data structure to a dynamic, interactive web interface.

By building this software, I have focused on progessing with data integrity through relational databases and advanced logic through JavaScript, including **Recursion**, **DOM manipulation**, and **External Library Integration**.

**Project Intro Video:** [https://youtu.be/eRM-uCQuZ6c](https://youtu.be/eRM-uCQuZ6c)

**Module 1 (SQL) Demo Video:** [https://youtu.be/MUYYqWcO5vQ](https://youtu.be/MUYYqWcO5vQ)

**Module 2 (JavaScript) Demo Video:** [https://youtu.be/Zyt9631QBl0](https://youtu.be/Zyt9631QBl0)

---

## Technical Accomplishments (Module 2: JavaScript)

- **Recursive Profit Engine:** Implemented a recursive algorithm to traverse nested business structures (e.g., a "YouTube" parent project with "AdSense" and "Sponsorship" sub-projects), ensuring accurate total revenue calculation regardless of data depth.
- **Dynamic UI Architecture:** Built a "Live" dashboard using **Vanilla JavaScript** and **Bootstrap** that updates the DOM (Document Object Model) instantly when new ventures are added, without requiring a page refresh.
- **Data Visualization:** Integrated **Chart.js** via CDN to translate raw financial objects into interactive bar charts, providing immediate visual feedback on ROI.
- **Functional Programming:** Leveraged ES6 native array methods (`.map()`, `.filter()`, and `.reduce()`) to process business data efficiently and cleanly.
- **Robust Error Handling:** Developed a validation layer using `try...catch` blocks and custom `throw` statements to gracefully handle data inconsistencies.

---

## Previous Work (Module 1: SQL Relational Databases)

The foundation of this project began with a **PostgreSQL** relational database.

- **Relational Schema:** Established a One-to-Many (1:N) relationship between Ventures and Income Logs.
- **Security:** Implemented parameterized queries to mitigate SQL Injection risks.
- **Aggregation:** Developed SQL queries using `SUM` and `LEFT JOIN` to calculate net profit per project directly at the database level.

---

## Development Environment

- **Languages:** JavaScript (ES6+), SQL
- **Frontend Frameworks:** Bootstrap 5 (CSS Framework)
- **Libraries:** Chart.js (Data Visualization), `pg` (PostgreSQL client)
- **Database:** PostgreSQL (Configured on Port 5433)
- **Tools:** Visual Studio Code, Node.js, Git/GitHub

---

## Useful Websites

- [MDN Web Docs - JavaScript Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [Bootstrap 5 Introduction](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [PostgreSQL Official Documentation](https://www.postgresql.org/docs/)

---

## Future Work

- **Module 3 Integration:** Bridge the JavaScript Dashboard with the PostgreSQL backend to achieve a full-stack architecture.
- **Persistent State:** Implement LocalStorage or a backend session to save newly added ventures between browser refreshes.
- **Refinement:** Transition the entire codebase to **TypeScript** in the final module to implement strict type-safety and enterprise-level architecture.
