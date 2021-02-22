const mongoose = require('mangoose');

const UserSessionSchema = new mangoose.Schema({
    userId:{
        type: Number,
        default: -1
    },
    
    timesamp:{
        type: Date,
        default: Date.now()
    },
    storecode:{
        type: String,
        default: ' '
    },
    rank:{
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
module.exports = mongoose.model('User', UserSessionSchema);