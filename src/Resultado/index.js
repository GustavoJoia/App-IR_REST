import { View, Text } from "react-native";
import style from "./style";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../data/context";
import { useRoute } from "@react-navigation/native";

export default function Resultado(){

    const {moneyFormat} = useContext(Context)
    const Route = useRoute()
    const data = Route.params

    return(
        <View style={style.container}>
            <View style={style.blue_elipse} />
            <Text style={style.titulo_span}>Resultado</Text>
            <View style={style.form}>
                <View style={style.info_area}>
                    <Text style={style.nome}>{data.nomePessoa}</Text>
                    <Text style={style.normal}>{data.cpfPessoa}</Text>
                </View>
                <Text style={style.normal}>
                    Com um rendimento de <Text style={style.span}>{moneyFormat(parseFloat(data.rendimentoPessoa))}</Text>. Este(a) deve <Text style={style.span}>{moneyFormat(parseFloat(data.dividaPessoa))}</Text> ao imposto de renda.
                </Text>
                <View style={style.info_area}>
                    <Text style={style.titulo_span}>{`${data.percentualPessoa}%`}</Text>
                    <Text style={style.normal}>Sobre o rendimento</Text>
                </View>
            </View>
        </View>
    )
}