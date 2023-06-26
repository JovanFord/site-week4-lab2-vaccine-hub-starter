CREATE TABLE users{
    id SERIAL PRIMARY KEY,
    password TEXT NOT NULL,
    first_name STRING NOT NULL,
    last_name STRING NOT NULL,
    email TEXT NOT NULL UNIQUE CHECK (POSITION('@') IN email > 1),
    location STRING NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT NOW(),
};