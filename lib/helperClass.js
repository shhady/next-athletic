
// const baseUrl = 'http://localhost:3000/'

// // export default async function getTrainer (){
// // const res = await fetch(`${baseUrl}api/trainers`)
// // const trainers = await res.json()
// // if(id){
// //     return trainers.find(value => value.id == id)
// // }
// // return trainers;
// // }



// // get all users
// export async function getClasses() {
//     const res = await fetch(`${baseUrl}api/classes/`);
//     const classes = await res.json();
    
//     return classes;
//   }

//   // get one user
//   export async function getClass(classId) {
//     console.log(classId)
//     const res = await fetch(`${baseUrl}api/classes/${classId}`);
//     const theClass = await res.json();
//     console.log(theClass)
//     if(theClass) return theClass;
//     return {}
//   }

//   // post user

//   export async function addClass(formData) {
//     try {
//       const res = await fetch(`${baseUrl}api/classes`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       console.log(res.status); // log the response status code
//       const json = await res.json();
//       return json;
//     } catch (err) {
//       return err;
//     }
//   }
//   //update user 
//   export async function updateClass(classId,formData){
//     try{
//         const Options={
//             method:"PUT",
//             headers:{'Content-Type': 'application/json'},
//             body:JSON.stringify(formData)
//         }
//         const res = await fetch(`${baseUrl}api/classes/${classId}`, Options)
//         const json = await res.json();
//         return json;
//     }catch(err){
//     return console.error({err:"no user found",})
//     }
//   }

//   //detele user

//   export async function deleteClass(classId){
//     console.log(classId)
//     try{
//         const Options={
//             method:"DELETE",
//             headers:{'Content-Type': 'application/json'},
//         }
//         const res = await fetch(`${baseUrl}api/classes/${classId}`, Options)
//         const json = await res.json();
//         return json;
//     }catch(err){
//       return console.error({err:"no user found",})
//     }
//   }