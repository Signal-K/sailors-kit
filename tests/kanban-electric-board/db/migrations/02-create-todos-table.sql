CREATE TABLE IF NOT EXISTS todos (
    id UUID PRIMARY KEY, 
    todo_description TEXT,
    status TEXT
);
ALTER TABLE todos ENABLE ELECTRIC;