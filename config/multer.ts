import multer from 'multer';
import path from 'path';
import crypto from 'crypto'

const tmpFolder = path.resolve(__dirname,'..','..','tmp');

export default {
    directory: tmpFolder,
    storage: multer.diskStorage({
        destination: tmpFolder,
        filename(request,file,callback) {
            const fileBash = crypto.randomBytes(10).toString('hex');
            const filename = file.originalName;

            return callback(null,filename);
        }
    })
}