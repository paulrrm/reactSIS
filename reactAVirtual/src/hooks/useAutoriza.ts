import { useState } from "react"


const useAutoriza = () => {


    const [authToken, setAuthToken] = useState("")



  return {
    authToken,setAuthToken
  }
}

export default useAutoriza