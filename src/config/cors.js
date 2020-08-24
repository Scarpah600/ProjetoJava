module.exports = function (req,res,next){
    res.header('Acess-Control-Allow-Origin','*')
    res.header('Acess-Control-Allow-Methods','GET,POST,DELETE,PUT,OPTIONS,PATCH')
    res.header('Acess-Control-Allow-Headers','Orgin, X-Requested-With, Content-Type, Accept')
    next()
    
}