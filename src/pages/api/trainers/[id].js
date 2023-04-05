import data from '../data'

export default function handler(req,res){
    const {id} = req.query;
    const {trainers} = data 
    console.log(data)

    if(id){

        const trainer = trainers.find(value => value.id == id)
        return res.status(200).json(trainer)
    }
    return res.status(404).json("no trainer")
}