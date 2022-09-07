import { useEffect, useState } from "react"




export const useFetch = (url) => {

  const [result, setResult] = useState({
    data: null,
    isLoading:true,
    hasError:null
  })

    const getData = async() =>{

        setResult({...result, isLoading:true})
        const data = await fetch(url)
        const dataJSON = await data.json()

        setResult({data:dataJSON, isLoading:false, hasError:null})
      
    }

    useEffect(()=>{
        getData()
    },[url])

  return {
    data: result.data,
    isLoading:result.isLoading,
    hasError: result.hasError
  }
}

