import main from "../../../../database/connection"
import {getUsers, postUser,putUser, deleteUser} from "../../../../database/controller"
export default async function handler(req, res) {
    main().catch(()=> res.status(405).json({error:"error connecting"}))

    const {method} = req
    switch (method) {
        case "GET":
            getUsers(req,res)
            
            break;
            case "POST":
                postUser(req,res)
            // res.status(200).json({method, name:'post'});
            break;
            // case "PUT":
            //     putUser(req,res)
            // break;
            // case "DELETE":
            //     deleteUser(req,res)
            // break;

            default:
                res.setHeader("allow",["GET", "POST", "PUT", "DELETE"])
                res.status(405).end(`medthod${method} not allowed`)
            
    }
  }
  