import { View, Text } from "react-native";
import style from "./style";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../data/context";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function Deletar(){

    const {moneyFormat, cpfFormat, apagar} = useContext(Context)
    const Route = useRoute()
    const data = JSON.parse(Route.params.data)
    const Nav = useNavigation()

    return(
        <View style={style.container}>
            <View style={style.blue_elipse} />
            <Text style={style.normal}>Você está prestes a deletar o cadastro com as seguintes informações:</Text>
            <View style={style.form}>
                <View style={style.info_area}>
                    <Text style={style.nome}>nome</Text>
                    <Text style={style.normal}>{data.nomePessoa}</Text>
                </View>
                <View style={style.info_area}>
                    <Text style={style.nome}>CPF</Text>
                    <Text style={style.normal}>{cpfFormat(data.cpfPessoa)}</Text>
                </View>
                <View style={style.info_area}>
                    <Text style={style.nome}>rendimento</Text>
                    <Text style={style.normal}>{moneyFormat(parseFloat(data.rendimentoPessoa))}</Text>
                </View>
            </View>
            <View style={style.btn_area}>
                <TouchableOpacity onPress={()=>{
                    apagar([data.idPessoa])
                }} style={style.delete_btn}>
                    <Text style={style.btn_label}>Deletar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    Nav.navigate('resultado',{idPessoa: data.idPessoa, nomePessoa: data.nomePessoa, cpfPessoa: data.cpfPessoa, rendimentoPessoa: data.rendimentoPessoa, dividaPessoa: data.dividaPessoa, percentualPessoa: data.percentualPessoa})
                }} style={style.edit_btn}>
                    <Text style={style.btn_label}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}