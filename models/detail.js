//SETTING USER SCHEMA
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    habit:{  type:String,
             required:true,
          },
    status:{type:String,
        required:true,
         },
   streak: {  type:Number,
            reuired:true
          },
        },
           {timestamps: true
           }
);

const Detail=mongoose.model('Detail',userSchema);
module.exports=Detail;