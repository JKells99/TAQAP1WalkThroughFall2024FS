let db = require('./dbauth');

// PostgreSQL connection


async function createTable(){
    const query = `
        CREATE TABLE IF NOT EXISTS jordan (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL
        );
    `;

    try{
        await db.pool.query(query)
        console.log('Table created successfully');
    } catch (error){
        console.log(error);
    }
}

createTable();

