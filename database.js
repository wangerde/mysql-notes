import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'notes_app'
}).promise()

async function getNotes() {
    const [rows] = await pool.query("SELECT * FROM notes");
    return rows
}

async function getNote(id) {
    const [rows] = await pool.query(`
        SELECT *
        FROM notes
        WHERE id = ?
    `, [id])
    return rows
}

async function createNote(title, contents) {
    const result = await pool.query(`
    INSERT INTO notes (title, contents)
    VALUES (?, ?)
    `, [title, contents])
    return {
        id: result.insertId,
        title,
        contents
    };
}

const result = await createNote('test', 'test')
console.log(result)