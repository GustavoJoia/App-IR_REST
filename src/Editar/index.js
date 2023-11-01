import { View, Text } from "react-native";
import style from "./style";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useState, useContext } from "react";
import { Context } from "../../data/context";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Editar(){

    const Navigation = useNavigation()
    const Route = useRoute()
    const data = JSON.parse(Route.params.data)
    const {editar, moneyFormat, cpfFormat} = useContext(Context)

    const [nome,setNome] = useState('')
    const [cpf,setCpf] = useState('')
    const [rendimento,setRendimento] = useState('')

    return(
        <View style={style.container}>
            <View style={style.blue_elipse} />
            <Text style={style.titulo_span}>Alterar</Text>
            <Text style={style.titulo}>Cadastro</Text>
            <View>
                <Text>Insira as novas informações</Text>
            </View>
            <View style={style.form}>
                <TextInput onChangeText={(text)=>{setNome(text)}} style={style.input} placeholder={data.nomePessoa} />
                <TextInput onChangeText={(text)=>{setCpf(text)}} style={style.input} placeholder={cpfFormat(data.cpfPessoa)} />
                <TextInput onChangeText={(text)=>{setRendimento(text)}} style={style.input} placeholder={moneyFormat(parseFloat(data.rendimentoPessoa))} />
                <View style={style.btn_area}>
                    <TouchableOpacity onPress={()=>{
                        let envio = [data.idPessoa]
                        if(nome=='' || nome==null){
                            envio.push(data.nomePessoa)
                        } else {
                            envio.push(nome)
                        }
                        if(cpf=='' || cpf==null){
                            envio.push(data.cpfPessoa)
                        } else {
                            envio.push(cpf)
                        }
                        if(rendimento=='' || rendimento==null){
                            envio.push(data.rendimentoPessoa)
                        } else {
                            envio.push(rendimento)
                        }
                        editar(envio)
                    }} style={style.btn}>
                        <Entypo name="pencil" size={style.plus.size} color={style.plus.color} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}