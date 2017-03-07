/**
 * Created by xaj on 2017/2/23.
 */
const dbhd = require('doohanpub').dbhd;
const Schema = dbhd.Schema;

const userSchema = new Schema({
    id:Number,
    userName: String,
    passWord: String
});

function UserModel() {
    this.user = null;
}

UserModel.prototype.createUserModel = function(mongoHandle) {
    this.user = mongoHandle.model('User', userSchema);
    return this.user;
};

UserModel.prototype.getOneUser = function () {
    return userModel.user.findOne({}).exec()
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

const userModel = module.exports = new UserModel;

