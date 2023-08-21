import { connect, connection } from "mongoose";

const { URI } = process.env;

const conn = {
    isConected: false,
}

connection.on('connected', () => {
    console.log(`mongoose is connected`)
})

connection.on('error', (err) => {
    console.log("mongoose conection error:", err)
})

export async function Conectdb() {
    if (conn.isConected) return;
    const db = await connect(URI)
    conn.isConected = db.connections[0].readyState
}

