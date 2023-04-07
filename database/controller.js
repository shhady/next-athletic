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
export async function getUser(req, res){
    try{
        const {userId} = req.query;
        console.log(userId)
      if(userId){
        const user = await Users.findById(userId);
       return res.status(200).json(user)
      }
      res.status(404).json({user:'not selected'})
    }catch(e){
        return res.status(404).json(e)
    }
    }

export async function postUser(req,res){
    try{
        const formData = req.body;
        if(!formData) return res.status(404).json({e:"error"})

        const data = await Users.create(formData);

        return res.status(200).json(data);
    } catch(e) {
        res.status(404).json(e);
    }
}

export async function updateUser(req,res){
    try{
        console.log(req.body)
       const {_id} = req.body;
       console.log(_id)
       const formData = req.body;
       console.log(formData)
       if(_id && formData){
           const options = { new: true };
           const user = await Users.findByIdAndUpdate(_id, formData, options);
           return  res.status(200).json(user);
       }
       res.status(404).json({user:'not selected'})
    } catch(e) {
        res.status(404).json(e);
    }
}

export async function deleteUser(req,res){
    try{
       
       const {id} = req.query
    
       if(id){
           const user = await Users.findByIdAndDelete(id);
           return  res.status(200).json({deleted: id});
       }
       res.status(404).json({user:'not selected'})
    } catch(e) {
        res.status(404).json(e);
    }
}
