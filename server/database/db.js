import mongoose from "mongoose";


const DBConnection = async () => {
    const MONGO_URI = `mongodb://user:codeforinterview@ac-t2vwhyr-shard-00-00.9ps2vnc.mongodb.net:27017,ac-t2vwhyr-shard-00-01.9ps2vnc.mongodb.net:27017,ac-t2vwhyr-shard-00-02.9ps2vnc.mongodb.net:27017/?ssl=true&replicaSet=atlas-odhn71-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;