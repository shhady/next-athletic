import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import main from "../../../../database/connection"
import Users from "../../../../model/user"
import {compare} from "bcryptjs"
export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name:"Credentials",
            async authorize(credentials, req){
                main().catch(error => {error:"connect failed"})
                const result = await Users.findOne({email:credentials.email})
                if(!result){
                    throw new Error("Couldn't find")
                } 
                const checkPassword = await compare(credentials.password, result.password)
                if(!checkPassword  || result.email !== credentials.email ){
                    throw new Error("not matching password")
                }
                return result
            }
        })
    ]
})