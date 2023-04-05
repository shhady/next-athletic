
const baseUrl = 'http://localhost:3001/'

// export default async function getTrainer (){
// const res = await fetch(`${baseUrl}api/trainers`)
// const trainers = await res.json()
// if(id){
//     return trainers.find(value => value.id == id)
// }
// return trainers;
// }

export default async function getTrainer (id){
    const res = await fetch(`${baseUrl}api/trainers`)
    const trainers = await res.json()
    console.log(id)
    if(id){
        return trainers.find(value => value.id == id)
    }
    return trainers;
    }
