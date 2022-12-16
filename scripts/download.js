import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import {fromIni} from "@aws-sdk/credential-provider-ini";
import {writeFileSync} from 'fs';

// Loading Credentials from ~/.aws/credentials
const config = {
    region: 'us-east-1',
    credentials: fromIni({profile: 'tutorials3'})
};

// Preparing Object conte to submit


async function stream2buffer(stream) {
    
    return new Promise((resolve, reject) => {
        const _buf = [];
        stream.on("data", (chunk) => _buf.push(chunk));
        stream.on("end", () => resolve(Buffer.concat(_buf)));
        stream.on("error", (err) => reject(err));
    });
}


export async function downloadArchive(file) {

    const s3Client = new S3Client(config);
    const downloadData = {
        Bucket: 'tmkttesteaudios',
        Key: file+'.jpg'
    };
    const response = await s3Client.send(new GetObjectCommand(downloadData));

    writeFileSync('C:/Users/883914/Downloads/'+file+'.jpg', await stream2buffer(response.Body));

    console.log('Arquivo salvo em downloads/'+file+'.jpg');

    
    return response;
}