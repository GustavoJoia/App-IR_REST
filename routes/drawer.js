import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "../data/context";
import { Feather } from '@expo/vector-icons';

import Home from "../src/Home";
import Resultado from "../src/Resultado";
import Cadastros from "../src/Cadastros";

export default function Drawer(){

    const Drawer = createDrawerNavigator()

    return(

        <Drawer.Navigator initialRouteName='home'>
            <Drawer.Screen
                name='home'
                component={Home}
                options={{
                    drawerLabel: 'Início',
                    drawerIcon: ()=>(
                        <Feather name="home" size={24} color="black" />
                    ),
                    headerTitle: '',
                    headerStyle:{
                        backgroundColor: '#170073',
                    },
                    headerPressColor: '#fff'
                }}
            />
            <Drawer.Screen
                name='cadastros'
                component={Cadastros}
                options={{
                    headerTitle: '',
                    drawerLabel: 'Cadastros',
                    drawerIcon: ()=>(
                        <Feather name="clipboard" size={24} color="black" />
                    ),
                    headerStyle:{
                        backgroundColor: '#170073',
                    }
                }}
            />
        </Drawer.Navigator>
    )
}