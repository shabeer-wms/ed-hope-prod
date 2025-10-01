import { Client, Account, ID, Functions, Databases, Query } from 'appwrite';

const client = new Client();
client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('pro26');

export const account = new Account(client);
export { ID };
export const functions = new Functions(client);
export const database = new Databases(client);
export const query = Query;
