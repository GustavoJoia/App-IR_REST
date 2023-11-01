import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import style from "./style";
import { useContext } from "react";
import { Context } from "../../../data/context";
import { useNavigation } from "@react-navigation/native";

export default function Card(pessoa){

    const {moneyFormat, cpfFormat} = useContext(Context)
    const Navigation = useNavigation()

    return(
        <View style={style.container}>
            <Text style={style.nome}>{pessoa.nomePessoa}</Text>
            <View style={style.info_area}>
                <Text>{cpfFormat(pessoa.cpfPessoa)}</Text>
                <Text>{moneyFormat(parseFloat(pessoa.dividaPessoa))}</Text>
            </View>
            
            <View style={style.info_area}>
                <Text style={style.perc}>{`${pessoa.percentualPessoa}%`}</Text>
                <TouchableOpacity onPress={()=>{
                    Navigation.navigate('resultado',{idPessoa: pessoa.idPessoa, nomePessoa: pessoa.nomePessoa, cpfPessoa: pessoa.cpfPessoa, rendimentoPessoa: pessoa.rendimentoPessoa, dividaPessoa: pessoa.dividaPessoa, percentualPessoa: pessoa.percentualPessoa})
                }} style={style.btn}>
                    <AntDesign name="eyeo" size={24} color="black" />
                </TouchableOpacity>
            </View>
            
        </View>
    )

}