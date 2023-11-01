import React, { useState, createContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const Context = createContext({})

export function Provider({children}){

    useEffect(()=>{

        buscar('')

    },[])

    const url = 'http://localhost/api_rest/controller/api_ir.php'
    const [registros, setRegistros] = useState([])
    const [user, setUser] = useState({})
    const Navigation = useNavigation()

    function moneyFormat(dinheiro){
        let valorFormatado = dinheiro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return valorFormatado
    }
    
    function cpfFormat(cpf){
        // Remove caracteres não numéricos
        cpf = cpf.replace(/[^\d]/g, '');
    
        // Adiciona os separadores
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    
        return cpf;

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
                buscar('')
                Navigation.navigate('resultado',{idPessoa: user.idPessoa, nomePessoa: user.nomePessoa, cpfPessoa: user.cpfPessoa, rendimentoPessoa: user.rendimentoPessoa, dividaPessoa: user.dividaPessoa, percentualPessoa: user.percentualPessoa})
            }
        })

    }

    function editar(data){

        let opt = {
            method: 'PUT',
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
            buscar('')
            Navigation.navigate('resultado',{idPessoa: user.idPessoa, nomePessoa: user.nomePessoa, cpfPessoa: user.cpfPessoa, rendimentoPessoa: user.rendimentoPessoa, dividaPessoa: user.dividaPessoa, percentualPessoa: user.percentualPessoa})
            }
        })

    }

    function apagar(data){

        let opt = {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(url, opt)
        .then(response=>response.json())
        .then(response=>{
            if(response==true){
                let user = response[1]
                setUser(user)
                buscar('')
                Navigation.navigate('cadastros')
            }
        })

    }

    return(
        <Context.Provider value={{apagar,editar, registrar, user, setUser,registros,setRegistros, isJson, buscar, moneyFormat, cpfFormat}}>
            {children}
        </Context.Provider>
    )

}