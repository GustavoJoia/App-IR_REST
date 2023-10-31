import { View, Text } from "react-native";
import style from "./style";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

export default function Home(){

    const [nome,setNome] = useState('')
    const [cpf,setCpf] = useState('')
    const [rendimento,setRendimento] = useState('')

    return(
        <View style={style.container}>
            <View style={style.blue_elipse} />
            <View style={style.titulo_area}>
                <Text style={style.titulo_span}>Calculadora</Text>
                <Text style={style.titulo}>Imposto de Renda</Text>
            </View>
            <View>
                <Text style={style.instrucoes}>Insira as informações abaixo</Text>
            </View>
            <View style={style.form}>
                <TextInput onChangeText={(text)=>{setNome(text)}} style={style.input} placeholder="Nome completo" />
                <TextInput onChangeText={(text)=>{setCpf(text)}} style={style.input} placeholder="CPF" />
                <TextInput onChangeText={(text)=>{setRendimento(text)}} style={style.input} placeholder="Rendimento anual" />
                <View style={style.btn_area}>
                    <TouchableOpacity style={style.btn}>
                        <AntDesign name="plus" size={style.plus.size} color={style.plus.color} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}