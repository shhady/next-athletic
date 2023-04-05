import main from "../../../../database/connection"
import User from "../../../../database/schema"
export default function getUsers(req, res) {

    main().catch(error=>console.log(error))

    // const {method} = req

    // switch  (method) {
    //     case "GET":
    //         res.status(200).json({method: 'GET', endpoint: 'users'});
    //         break;
    //         case "POST":
    //         res.status(201).json({method: 'POST', endpoint: 'users'})
    //         break;
    //         default:
    //             res.setHeader('Allow',['GET', 'POST'])
    //             res.status(404).end({method: 'not allowed'})
    //             break;
    // }
    // const create = new User({
    //     name: "test",
    //     email:"test@example.com",
    //     password:"1234567",
    //     description:"test test test"
    // })
    // create.save().then(() => {
    //     res.status(200).json(create)
    // })
    res.status(200).json([
    { id:1, name: 'trainer 1', description:"ww ww ww ww",image:"https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { id:2,name: 'trainer 2', description:"ww test ww ww",image:"https://images.unsplash.com/photo-1627197843575-00cc3965c2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { id:3,name: 'trainer 3', description:"ww test ww ww",image:"https://images.unsplash.com/photo-1584863265045-f9d10ca7fa61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { id:4,name: 'trainer 4', description:"ww test ww ww",image:"https://images.unsplash.com/photo-1632781297772-1d68f375d878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { id:5,name: 'trainer 5', description:"ww test ww ww",image:"https://images.unsplash.com/photo-1627197843575-00cc3965c2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    
])
}
  