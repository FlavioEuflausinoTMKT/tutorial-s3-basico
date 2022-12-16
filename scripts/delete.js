import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import {fromIni} from "@aws-sdk/credential-provider-ini";

// Loading Credentials from ~/.aws/credentials
const config = {
    region: 'us-east-1',
    credentials: fromIni({profile: 'tutorials3'})
};

// Preparing Object conte to submit



export async function deleteArchive(file) {

    const deleteData = {
        Bucket: 'tmkttesteaudios',
        Key: file+'.jpg'
    };
    const s3Client = new S3Client(config);
    const response = await s3Client.send(new DeleteObjectCommand(deleteData));


    
    return response;


}