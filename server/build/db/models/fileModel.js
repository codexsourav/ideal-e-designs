import mongo from 'mongoose';
const files = new mongo.Schema({
    name: String,
    path: String,
    size: String || Number,
    date: {
        type: Date,
        default: Date.now(),
    },
});
const FilesModel = mongo.model("files", files);
export default FilesModel;
