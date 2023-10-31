import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "../data/context";

import Home from "../src/Home";
import Resultado from "../src/Resultado";
import Cadastros from "../src/Cadastros";

export default function Routes(){

    const Drawer = createDrawerNavigator()

    return(
        <NavigationContainer>
            <Provider>
                <Drawer.Navigator initialRouteName='cadastros'>
                    <Drawer.Screen
                        name='home'
                        component={Home}
                        options={{
                            headerTitle: '',
                            headerStyle:{
                                backgroundColor: '#170073',
                            }
                        }}
                    />
                    <Drawer.Screen
                        name='resultado'
                        component={Resultado}
                        options={{
                            headerTitle: '',
                            headerStyle:{
                                backgroundColor: '#170073',
                            }
                        }}
                    />
                    <Drawer.Screen
                        name='cadastros'
                        component={Cadastros}
                        options={{
                            headerTitle: '',
                            headerStyle:{
                                backgroundColor: '#170073',
                            }
                        }}
                    />
                </Drawer.Navigator>
            </Provider>
        </NavigationContainer>
    )
}