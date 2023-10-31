import React, { useState, createContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const Context = createContext({})

export function Provider({children}){

    useEffect(()=>{

        buscar('')

    },[user])

    const url = 'http://localhost/api_rest/controller/api_ir.php'
    const [registros, setRegistros] = useState([])
    const [user, setUser] = useState({})
    const Navigation = useNavigation()

    function moneyFormat(dinheiro){
        let valorFormatado = dinheiro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return valorFormatado
    }
    
    function cpfFormat(){

    }


    function isJson(json){

        try{
            JSON.parse(json)
            return true
        } catch {
            return false
        }

    }

    function buscar(query){

        fetch(`${url}?query=${query}`)
        .then(response=>response.text())
        .then(response=>{
            if(isJson(response)==true){
                let data = JSON.parse(response)
                setRegistros(data[1])
            } else {
                console.log(response)
            }
        })

    }

    function registrar(data){

        
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
            if(response[0]==true){
                let user = response[1]
                setUser(user)
                Navigation.navigate('resultado',{idPessoa: user.idPessoa, nomePessoa: user.nomePessoa, cpfPessoa: user.cpfPessoa, rendimentoPessoa: user.rendimentoPessoa, dividaPessoa: user.dividaPessoa, percentualPessoa: user.percentualPessoa})
            }
        })

    }

    return(
        <Context.Provider value={{registrar, user, setUser,registros,setRegistros, isJson, buscar, moneyFormat}}>
            {children}
        </Context.Provider>
    )

}