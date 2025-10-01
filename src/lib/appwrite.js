import { Client, Functions } from 'appwrite';

const client = new Client();
client
    .setEndpoint('https://nyc.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('pro26');

export const functions = new Functions(client);