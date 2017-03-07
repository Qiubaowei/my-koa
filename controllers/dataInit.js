/**
 * Created by xaj on 2017/3/1.
 */
const movieModel = require('../models/movies');
const userModel = require('../models/user');
const listModel = require('../models/list');

function dataInit(mongodbhd){
    /* 创建information数据库 */
    movieModel.createMovieModel(mongodbhd);
    userModel.createUserModel(mongodbhd);
    listModel.createListModel(mongodbhd);
}

exports.dataInit = dataInit;