import React from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Card from "./pages/Card/Card";
import Home from "./pages/Home/Home";
//import Loading from './components/Loading';

const {Navigator, Screen} = createStackNavigator();

const Router =  () =>{
     return(
        <NavigationContainer >
            <Navigator screenOptions={{
                headerShown: false,
                cardStyle:{backgroundColor: 'rgb(230, 230, 230)'}
            }}>

             <Screen   name="home" component={Home} />
             <Screen   name="card" component={Card} />       
            </Navigator>
        </NavigationContainer>
     )
}



export default Router