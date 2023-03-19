const mongoDbConnection1=()=> {
    try {
        const mongoose=require('mongoose');
        
        // const CONNECTION_URL="mongodb://localhost:27017/userDB"
        
        //Connection Part
        mongoose
            .connect(CONNECTION_URL,{
                useNewUrlParser:true,useFindAndModify:false,useUnifiedTopology:true
            })
            .then(()=>console.log("connection successful"))
            .catch((err)=>console.log(err));        
    } catch (error) {
        console.log(`Database connection error!`);
    }

}

module.exports.mongoDbConnection1=mongoDbConnection1;