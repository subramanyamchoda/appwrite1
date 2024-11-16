import { Client, Storage, Account } from "appwrite";

// Define API Key and Project ID


// Initialize Appwrite client
const client = new Client();

// Initialize Appwrite services correctly
client.setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
      .setProject("subbu") // Replace with your Appwrite Project ID
    //   .setKey("standard_07151739cc3504c4b1a225d637de64871023a919f171d605933853b90485431ad9eb4555fca62b91f55a4bf36c37f000acd381616da0673c5040dfd73a798e553e4da88d263ae228e777b4aa29bdea923d6fdc9d0d2d3ee0d36e9c63daced318f2408fabacf63c00bf759f2ef84e65f02a135906a1cb64f510e4c94d05d9df87"); // Replace with your API Key

// Initialize Appwrite services
const storage = new Storage(client);
const account = new Account(client);

export { client, storage, account };
