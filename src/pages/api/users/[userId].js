import main from "../../../../database/connection"
import {getUser, postUser,updateUser, deleteUser} from "../../../../database/controller"
export default async function handler(req, res) {
    main().catch(()=> res.status(405).json({error:"error connecting"}))

const {method}  = req
switch (method) {
    case "GET":
        getUser(req, res)
        break;
        case "PUT":
            updateUser(req,res)
            break;
            case "DELETE":
                deleteUser(req,res)
            break;
        default:
            res.setHeader("allow", ["GET", "POST", "PUT", "DELETE"])
            res.status(405).end(`medthod${method} not allowed`);
}

}