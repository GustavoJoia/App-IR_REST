import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from '@expo/vector-icons';
import { Provider } from "../data/context";
import Drawer from "./drawer";
import Resultado from "../src/Resultado";
import Editar from "../src/Editar";
import Deletar from "../src/Deletar";

export default function Routes(){

    const Stack = createStackNavigator()

    return(
        <NavigationContainer>
            <Provider>
                <Stack.Navigator>
                    <Stack.Screen
                        name='home'
                        component={Drawer}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name='resultado'
                        component={Resultado}
                        options={{
                            headerTitle: '',
                            headerStyle:{
                                backgroundColor: '#170073',
                            },
                            headerBackImage: ()=>(
                                <AntDesign name="arrowleft" size={24} color="white" />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name='editar'
                        component={Editar}
                        options={{
                            headerTitle: '',
                            headerStyle:{
                                backgroundColor: '#170073',
                            },
                            headerBackImage: ()=>(
                                <AntDesign name="arrowleft" size={24} color="white" />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name='deletar'
                        component={Deletar}
                        options={{
                            headerTitle: '',
                            headerStyle:{
                                backgroundColor: '#170073',
                            },
                            headerBackImage: ()=>(
                                <AntDesign name="arrowleft" size={24} color="white" />
                            ),
                        }}
                    />
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    )
    
}