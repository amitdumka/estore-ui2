const mongoose = require('mangoose');

const UserSchema = new mangoose.Schema({
    firstName:{
        type: String,
        default: ' '
    },
    lastName:{
        type: String,
        default: ' '
    },
    email:{
        type: String,
        default: ' '
    },
    storecode:{
        type: String,
        default: ' '
    },
    rank:{
        type: String,
        default: ' '
    },
    password:{
        type: String,
        default: ' '
    },
    isDeleted:{
        type: Boolean,
        default: false
    },

});

UserSchema.methods.genrateHash=function(password) {
    return bcrypt.hashSync(password, bcrypt.getGenSaltSync(8),null);
};

UserSchema.methods.validPassword=function(password){
    return  bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', UserSchema);