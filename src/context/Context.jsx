import { createContext,useState } from "react";

const Context = createContext()

export const ContextProvider = ({children}) =>{
    
    const [users,setUsers] = useState([])
    const [text,setText] = useState("")
    const [selectedValue,setSelectedValue] = useState("")
    const [dummy,setDummy] =useState([])

    //MockData.json dosyasından kullanıcı bilgilerini almak için
    const fetchData= async ()=>{
        const response = await fetch("./mockData.json")
        const liste = await response.json();
        const data = liste.data;
        setUsers(data)
    }



    return  <Context.Provider value={{

        users,
        text,
        fetchData,
        setText,
        selectedValue,
        setSelectedValue,
        dummy,
        setDummy,
    }}>
        {children}
    </Context.Provider>
}

export default Context;