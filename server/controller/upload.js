import AWS from 'aws-sdk';
import multer from 'multer';
import multers3 from 'multer-s3';
import 'dotenv/config'

const s3 = new AWS.S3({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

export const upload = multer({
    storage: multers3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET,
        acl: "private",
        metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
        key: (req, file, cb) => {
        const fileName = Date.now().toString() + '-' + file.originalname;
        cb(null, fileName);
        },
        limits: {
    fileSize: 3 * 1024 * 1024 
  }
    })
})