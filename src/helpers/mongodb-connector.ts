import { MongoClient, ServerApiVersion } from 'mongodb'
import {SECRETS} from "@/configs/secrets";

const uri =
    `mongodb+srv://${SECRETS.MONGODB_USERNAME}:` +
    `${SECRETS.MONGODB_PASSWORD}@${SECRETS.CLUSTER_ADDRESS}/?retryWrites=true&w=majority`;

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