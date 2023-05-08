import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://user:dsrbdsrb@ac-78etdzv-shard-00-00.u9jolbg.mongodb.net:27017,ac-78etdzv-shard-00-01.u9jolbg.mongodb.net:27017,ac-78etdzv-shard-00-02.u9jolbg.mongodb.net:27017/BLOG-WEBSITE?ssl=true&replicaSet=atlas-e623cz-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 