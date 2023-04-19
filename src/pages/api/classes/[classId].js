import main from "../../../../database/connection"
import {getClass, postClass,updateClass, deleteClass} from "../../../../database/controllerClasses"
export default async function handler(req, res) {
    main().catch(()=> res.status(405).json({error:"error connecting"}))

const {method}  = req
switch (method) {
    case "GET":
        getClass(req, res)
        break;
        case "PUT":
            updateClass(req,res)
            break;
            case "DELETE":
                deleteClass(req,res)
            break;
        default:
            res.setHeader("allow", ["GET", "POST", "PUT", "DELETE"])
            res.status(405).end(`medthod${method} not allowed`);
}

}