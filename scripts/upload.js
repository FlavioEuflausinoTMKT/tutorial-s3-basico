import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import {fromIni} from "@aws-sdk/credential-provider-ini";
import {readFileSync} from 'fs';

// Loading Credentials from ~/.aws/credentials
const config = {
    region: 'us-east-1',
    credentials: fromIni({profile: 'tutorials3'})
};



export async function uploadArchive(path,nome) {
// Preparing Object conte to submit
const file = readFileSync(path);
const putData = {
    Bucket: 'tmkttesteaudios',
    Key: nome+'.jpg',
    StorageClass: 'STANDARD',
    Body: file
};

const s3Client = new S3Client(config);
const response = await s3Client.send(new PutObjectCommand(putData));

return response;
}
