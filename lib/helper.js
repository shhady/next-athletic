
const baseUrl = 'http://localhost:3000/'

// export default async function getTrainer (){
// const res = await fetch(`${baseUrl}api/trainers`)
// const trainers = await res.json()
// if(id){
//     return trainers.find(value => value.id == id)
// }
// return trainers;
// }



// get all users
export async function getUsers() {
    const res = await fetch(`${baseUrl}api/users/`);
    const users = await res.json();
    
    return users;
  }

  // get one user
  export async function getUser(userId) {
    console.log(userId)
    const res = await fetch(`${baseUrl}api/users/${userId}`);
    const user = await res.json();
    console.log(user)
    if(user) return user;
    return {}
  }

  // post user

  export async function addUser(formData) {
    try {
      const res = await fetch(`${baseUrl}api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(res.status); // log the response status code
      const json = await res.json();
      return json;
    } catch (err) {
      return err;
    }
  }
  //update user 
  export async function updateUser(userId,formData){
    try{
        const Options={
            method:"PUT",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        }
        const res = await fetch(`${baseUrl}api/users/${userId}`, Options)
        const json = await res.json();
        return json;
    }catch(err){
    return console.error({err:"no user found",})
    }
  }

  //detele user

  export async function deleteUser(userId){
    try{
        const Options={
            method:"DELETE",
            headers:{'Content-Type': 'application/json'},
        }
        const res = await fetch(`${baseUrl}api/users${userId}`, Options)
        const json = await res.json();
        return json;
    }catch(err){
    return err
    }
  }