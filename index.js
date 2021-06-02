const AWS = require('aws-sdk');
const fs = require('fs');
const config = require('./config.json');

const spacesEndpoint = new AWS.Endpoint(config.DomainStorage);
const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: config.AccessKey,
    secretAccessKey: config.SecretKey
});
// const params = {
//     Bucket: config.Bucket,
// };

// s3.createBucket(params, function(err, data) {
//     if (err) console.log(err, err.stack);
//     else     console.log(data);
// });
const params = {
    Bucket: config.Bucket,
    Key: "file.ext",
    Body: "The contents of the file.",
    ACL: "private",
    Metadata: {
        "x-amz-meta-my-key": "your-value"
    }
};

s3.putObject(params, function(err, data) {
    if (err) {console.log(err, err.stack);}
    else     {console.log(data);}
});