import { View, Text, FlatList } from "react-native";
import style from "./style";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useState, useContext } from "react";
import { Context } from "../../data/context";
import Card from "./Card";

export default function Cadastros(){

    const {buscar, registros} = useContext(Context)

    const [nome,setNome] = useState()
    const [cpf,setCpf] = useState()
    const [rendimento,setRendimento] = useState()

    return(
        <View style={style.container}>
            <View style={style.blue_elipse} />
            <Text style={style.titulo_span}>Cadastrados</Text>
            <View style={style.search_bar}>
                <TextInput onChangeText={(text)=>{
                    buscar([text])
                }} style={style.search} />
                <AntDesign name="search1" size={style.right.size} color={style.right.color} />
            </View>

            <FlatList
                style={style.list}
                showsVerticalScrollIndicator={false}
                data={registros}
                keyExtractor={(item)=>item.idPessoa}
                renderItem={({item}) =>(
                    <Card
                        idPessoa = {item.idPessoa}
                        nomePessoa = {item.nomePessoa}
                        cpfPessoa = {item.cpfPessoa}
                        rendimentoPessoa = {item.rendimentoPessoa}
                        dividaPessoa = {item.dividaPessoa}
                        percentualPessoa = {item.percentualPessoa}
                    />
                )}
            />
            
        </View>
    )
}