const fs=require('fs');
const path = require('path');

function logMiddleware(req,res,next){
    fs.appendFileSync(path.join(__dirname,'../logs/userLogs.txt'),`El usuario ingresó a la ruta: ${req.url}\n`) 
next() 
};
 
module.exports=logMiddleware;