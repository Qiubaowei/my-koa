/**
 * Created by xaj on 2017/2/23.
 */
const dbhd = require('doohanpub').dbhd;
const Schema = dbhd.Schema;

const movieSchema = new Schema({
    title: {type: String, required: true},
    poster: String,
    rating: String,
    introduction: String,
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
});

function MovieModel() {
    this.movie = null;
}

MovieModel.prototype.createMovieModel = function(mongoHandle) {
    this.movie = mongoHandle.model('Movie', movieSchema);
    return this.movie;
};

MovieModel.prototype.getOneMovie = function () {
    return movieModel.movie.findOne({}).exec()
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

MovieModel.prototype.getMovie = function(title, callback){
    this.movie.find({title:title}, function(err, results){
        if (!err){
            if (results[0] != undefined){
                console.log('find movie information success: ' + results[0]);
                callback(results);
            }else{
                console.log("can't movie car information. carName: "+ carName);
                callback('');
            }
        }else {
            console.error('find movie information from db failed with err:' + err);
            callback(err);
        }
    });
};

const movieModel = module.exports = new MovieModel;

