import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

export type IRoutes = {
    Home: undefined;
    Location: undefined;
    Palace: undefined;
  };

const Stack = createNativeStackNavigator<IRoutes>();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                {/* <Stack.Screen name="Location" component={Location} />
                <Stack.Screen name="Palace" component={Palace} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes