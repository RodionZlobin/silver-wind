/**
 * Created by storste on 20/07/17.
 */

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName     : { type: String },
    password     : { type: String }
});

//mongoose.model('User', UserSchema);