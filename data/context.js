import React, { useState, createContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const Context = createContext({})

export function Provider({children}){

    const [registros, setRegistros] = useState([])
    const [user, setUser] = useState({})
    const Navigation = useNavigation()


    function isJson(json){

        try{
            JSON.parse(json)
            return true
        } catch {
            return false
        }

    }

    function registrar(data){

        let url = 'http://localhost/front_api-rest'
        let opt = {
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(url, opt)
        .then(response=>response.json())
        .then(response=>{
            if(response == true){

            }
        })

    }

    return(
        <Context.Provider value={{user, setUser,registros,setRegistros, isJson}}>
            {children}
        </Context.Provider>
    )

}