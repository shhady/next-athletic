import main from "../../../../database/connection"
import {getClasses, postClass,putClass, deleteClass} from "../../../../database/controllerClasses"

export default async function handler(req, res) {
    main().catch(()=> res.status(405).json({error:"error connecting"}))

    const {method} = req
    switch (method) {
        case "GET":
            getClasses(req,res)
            
            break;
            case "POST":
                postClass(req,res)
            // res.status(200).json({method, name:'post'});
            break;
            // case "PUT":
            //     putClass(req,res)
            // break;
            // case "DELETE":
            //     deleteClass(req,res)
            // break;

            default:
                res.setHeader("allow",["GET", "POST", "PUT", "DELETE"])
                res.status(405).end(`medthod${method} not allowed`)
            
    }
  }
  