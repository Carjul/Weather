import { MongoClient } from 'mongodb';

const { URI } = process.env;

let db = null;

async function connectToDatabase() {
    if (db) {
        return db;
    }

    const client = new MongoClient(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();
        console.log('MongoDB connected');
        db = client.db();
        return db;
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}


export async function getDatosModel() {
    try {
        const database = await connectToDatabase();
        const datosCollection = database.collection('Datos');
        return datosCollection;
    } catch (error) {
        throw error;
    }
}

export async function getUserModel() {
    try {
        const database = await connectToDatabase();
        const userCollection = database.collection('Users');
        return userCollection;
    } catch (error) {
        throw error;
    }
}
 