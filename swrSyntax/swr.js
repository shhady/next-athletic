// first npm i swr 

// import SWR, {SWRConfig} from "swr"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const fetcher = (...args)=> fetch(...args).then(res => res.json())

// -----------------------------         or this way     -----------------------------


// const fetcher  = async url =>{
//     const res = await fetch(url)

//     if(!res.ok){
//         const error = new Error("error happened while fetching");
//         error.info = await res.json();
//         error.status = res.status;
//         throw error;
//     }
//     return res.json();
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// export default function Users ({user}){
//     const {user, isLoading, isError} = getData()

//     if(isError) return <div>error</div>
//     if(isLoading) return <div>loading ... </div>

//     return (
//         <>
//            { user.map(u=>(
//                 <div>{u.name}</div>
//             ))}
//         </>
//     )
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function getData (){
//     const {data, error} = useSWR("http://localhost:8080/api/users",fetcher)

//     return{
//         user:data,
//         isLoading : !error && !data,
//         isError: error
//     }
// }


// -------------------------------------------------------  or this way ----------------------------------------------------


function getData(){
    const {data, error} = useSWR("http://localhost:8080/api/users",fetcher,{
        onErrorRetry:(error, key, config, revalidate, {retryCount})=>{
            if (error.status == 404) return

            if(key === '/api/user') return
            if(retryCount >=10) return
            setTimeout(()=> revalidate(), 5000)
        }
    })
}

{/* <SWRConfig value={options}>

</SWRConfig> */}

{/* <SWRConfig value={{
    refreshInterval: 3000,
    fetcher: (resource, init)=> fetch(resource, init).then(res => res.json())
}
}>
    
    </SWRConfig> */}

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////


    