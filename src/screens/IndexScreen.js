import React from "react";
import {Button, Text, View} from "react-native";

const IndexScreen=({navigation})=>{
    return(
        <View>
            <Text>IndexScreen</Text>
            <Button title={"Home Screen"} onPress={()=>navigation.navigate("Home")}/>
        </View>
    )
}

export  default  IndexScreen;
