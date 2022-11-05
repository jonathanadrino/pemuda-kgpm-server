require('dotenv').config()
const { Storage } = require("@google-cloud/storage");
let projectId = "sewa-parkir";
const storage = new Storage({
  projectId,
  credentials: JSON.parse(process.env.GKEY),
});

const bucket = storage.bucket("sewa-parkir.appspot.com");

module.exports = bucket