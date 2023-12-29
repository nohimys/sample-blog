import { MongoClient, ServerApiVersion } from 'mongodb'
import {CREDS} from "@/configs/creds";
import {SECRETS} from "@/configs/secrets";

const mongodbUsername = SECRETS.MONGODB_USERNAME || CREDS.MONGODB_USERNAME;
const mongodbPassword = SECRETS.MONGODB_USERNAME || CREDS.MONGODB_PASSWORD;
const mongodbClusterAddress = SECRETS.CLUSTER_ADDRESS || CREDS.CLUSTER_ADDRESS;

const uri = `mongodb+srv://${mongodbUsername}:${mongodbPassword}@${mongodbClusterAddress}/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectDatabase(databaseOperations: Function) {
    let resultObject = {}
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const database = await client.db("next-blog");

        resultObject = await databaseOperations(database);
        console.log('Database Operation Completed.');

    } finally {
        await client.close();
    }
    return resultObject;
}

export const saveContactMessage = async (message: object) => {
    return await connectDatabase(async (database:any)=>{
        const result = await database
            .collection('messages')
            .insertOne({...message});
        return {
            id: result.insertedId,
            ...message
        };
    });
}