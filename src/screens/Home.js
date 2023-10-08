import React from "react";
import {Button, Text, View} from "react-native";
import store from "../store/redux";

const state=store.getState()

const Home=({navigation})=>{

    console.log("MY STORE",state)
    return(
        <View>
            <Text>Home Screen</Text>
            <Button title={"Index Screen"} onPress={()=>navigation.navigate("IndexScreen")}/>

        </View>
    )
}


export  default  Home;
