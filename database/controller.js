import Users from  "../model/user"
export async function getUsers(req, res){
try{
    const users =await Users.find({})
    if(!users) return res.status(404).json({message:"no users"})
    res.status(200).json(users)
}catch(e){
    res.status(404).json(e)
}
}

export async function postUser(req,res){
    try{
        const formData = req.body;
        if(!formData) return res.status(404).json({e:"error"})
        Users.create(formData, function(err, data){
            return res.status(200).json(data)
        })
    }catch(e){
        res.status(404).json(e)
    }
}