CREATE TABLE business_ventures (
    id SERIAL PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    startup_cost NUMERIC(10, 2) DEFAULT 0.00
);

CREATE TABLE income_logs (
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES business_ventures(id) ON DELETE CASCADE,
    amount_earned NUMERIC(10, 2) NOT NULL,
    payment_date DATE DEFAULT CURRENT_DATE
);