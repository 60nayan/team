const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isVerify:{
        type:Boolean,

    },
    token:{
        type:String,
        default:''
    }
    

});

module.exports = mongoose.model('User',userSchema);
