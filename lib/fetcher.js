// import useSWR from "swr"

// const baseUrl = 'http://localhost:5000/'

// const response = (...args)=> fetch(...args).then(res => res.json())

// export default function fetcher (endpint){
//     const {data, error} = useSWR(`${baseUrl}${endpint}`,response)

//     return{
//         data,
//         isLoading: !error && !data,
//        isError: error,

//     }
// }