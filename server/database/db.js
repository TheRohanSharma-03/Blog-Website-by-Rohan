import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://user:dsrbdsrb@ac-78etdzv-shard-00-00.u9jolbg.mongodb.net:27017,ac-78etdzv-shard-00-01.u9jolbg.mongodb.net:27017,ac-78etdzv-shard-00-02.u9jolbg.mongodb.net:27017/BLOG-WEBSITE?ssl=true&replicaSet=atlas-e623cz-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;