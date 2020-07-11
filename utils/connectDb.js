import mongoose from 'mongoose';
const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    //use existing database connection
    console.log('Using existing connection');
    return;
  }

  //Use new database connection
  //go to mongoosejs.com/docs/deprecations to learn about deprecations

  const db = await mongoose.connect(process.env.MONGO_SRV, {
    //to turn off warnings of mongoose need to use these deprecations
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('DB Connected');
  //this is how to connect mondo db to serverless application, you with other severless backend like AWS lambda
  connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
