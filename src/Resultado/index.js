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

export default function Resultado(){

    const {moneyFormat, cpfFormat} = useContext(Context)
    const Route = useRoute()
    const Nav = useNavigation()
    const data = Route.params

    return(
        <View style={style.container}>
            <View style={style.blue_elipse} />
            <Text style={style.titulo_span}>Resultado</Text>
            <View style={style.form}>
                <View style={style.info_area}>
                    <Text style={style.nome}>{data.nomePessoa}</Text>
                    <Text style={style.normal}>{cpfFormat(data.cpfPessoa)}</Text>
                </View>
                <Text style={style.desc}>
                    Com um rendimento de <Text style={style.span}>{moneyFormat(parseFloat(data.rendimentoPessoa))}</Text>. Este(a) deve <Text style={style.span}>{moneyFormat(parseFloat(data.dividaPessoa))}</Text> ao imposto de renda.
                </Text>
                <View style={style.info_area}>
                    <Text style={style.titulo_span}>{`${data.percentualPessoa}%`}</Text>
                    <Text style={style.normal}>Sobre o rendimento</Text>
                </View>
            </View>
            <View style={style.btn_area}>
                <TouchableOpacity onPress={()=>{
                    Nav.navigate('editar',{data: JSON.stringify(data)})
                }} style={style.edit_btn}>
                    <Entypo name="pencil" size={style.icon.size} color={style.icon.color} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    Nav.navigate('deletar',{data: JSON.stringify(data)})
                }} style={style.delete_btn}>
                    <FontAwesome5 name="trash" size={style.icon.size} color={style.icon.color} />
                </TouchableOpacity>
            </View>
        </View>
    )
}