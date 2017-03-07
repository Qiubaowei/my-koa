/**
 * Created by xaj on 2017/2/23.
 */
const dbhd = require('doohanpub').dbhd;
const Schema = dbhd.Schema;

const listSchema = new Schema({
    id:Number,
    userName: String,
    passWord: String
});

function ListModel() {
    this.list = null;
}

ListModel.prototype.createListModel = function(mongoHandle) {
    this.list = mongoHandle.model('List', listSchema);
    return this.list;
};

ListModel.prototype.getOneList = function () {
    return listModel.list.findOne({}).exec()
    // return new Promise (function (resolve, reject){
    //     movieModel.movie.findOne({}, function (err, result) {
    //         console.log(result)
    //         if(err)
    //         {
    //             reject(err);
    //         }
    //         else
    //         {
    //             resolve(result)
    //         }
    //     });
    // })
}

// UserModel.prototype.getMovie = function(title, callback){
//     this.movie.find({title:title}, function(err, results){
//         if (!err){
//             if (results[0] != undefined){
//                 console.log('find movie information success: ' + results[0]);
//                 callback(results);
//             }else{
//                 console.log("can't movie car information. carName: "+ carName);
//                 callback('');
//             }
//         }else {
//             console.error('find movie information from db failed with err:' + err);
//             callback(err);
//         }
//     });
// };

const listModel = module.exports = new ListModel;

