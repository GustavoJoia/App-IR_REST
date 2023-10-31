import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "../data/context";

import Home from "../src/Home";

export default function Routes(){

    const Drawer = createDrawerNavigator()

    return(
        <NavigationContainer>
            <Provider>
                <Drawer.Navigator initialRouteName='home'>
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
                </Drawer.Navigator>
            </Provider>
        </NavigationContainer>
    )
}