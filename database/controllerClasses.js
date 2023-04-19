// import Classes from  "../model/class"

// export async function getClasses(req, res){
// try{
//     const classes =await Classes.find({})
//     if(!classes) return res.status(404).json({message:"no classes"})
//     res.status(200).json(classes)
// }catch(e){
//     res.status(404).json(e)
// }
// }
// export async function getClass(req, res){
//     try{
//         const {classId} = req.query;
//         console.log(classId)
//       if(classId){
//         const theClass = await Classes.findById(classId);
//        return res.status(200).json(theClass)
//       }
//       res.status(404).json({theClass:'not selected'})
//     }catch(e){
//         return res.status(404).json(e)
//     }
//     }

// // export async function postUser(req,res){
// //     try{
// //         const formData = req.body;
// //         if(!formData) return res.status(404).json({e:"error"})

// //         const data = await Users.create(formData);

// //         return res.status(200).json(data);
// //     } catch(e) {
// //         res.status(404).json(e);
// //     }
// // }

// export async function postClass(req,res){
//     try{
//         const formData = req.body;
//         if(!formData) return res.status(404).json({e:"error"})
//         const data = await Classes.create(formData);

//         return res.status(200).json(data);
//     } catch(e) {
//         res.status(404).json(e);
//     }
// }

// export async function updateClass(req,res){
//     try{
//         console.log(req.body)
//        const {_id} = req.body;
//        console.log(_id)
//        const formData = req.body;
//        console.log(formData)
//        if(_id && formData){
//            const options = { new: true };
//            const theClass = await Classes.findByIdAndUpdate(_id, formData, options);
//            return  res.status(200).json(theClass);
//        }
//        res.status(404).json({theClass:'not selected'})
//     } catch(e) {
//         res.status(404).json(e);
//     }
// }

// export async function deleteClass(req,res){
//     try{
//        console.log(req.body)
//        const {classId} = req.query
//         console.log(classId)
//        if(classId){
//            const theClass = await Classes.findByIdAndDelete(classId);
//            return  res.status(200).json({deleted: classId});
//        }
//        res.status(404).json({theClass:'not selected'})
//     } catch(e) {
//         res.status(404).json({e: "errroooorrr"});
//     }
// }
