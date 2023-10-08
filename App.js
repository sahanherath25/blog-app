import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from "./src/components/CustomButton";

//Navigation Imports
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {SafeAreaProvider} from "react-native-safe-area-context";

import Home from "./src/screens/Home";
import IndexScreen from "./src/screens/IndexScreen";


const Stack=createStackNavigator();

export default function App() {
  return (
      // <View>
      //     <Text> Hello </Text>
      // </View>

          <SafeAreaProvider>
                  <NavigationContainer>
                      <Stack.Navigator>

                          <Stack.Screen name={"Home"}
                                        component={Home}
                                        options={{
                                            title: "HomeScreen",
                                            headerTitleAlign: "center",
                                            headerStyle: {
                                                backgroundColor: "purple",
                                            },
                                            headerTintColor: "white",
                                            headerTitleStyle: {
                                                fontWeight: "bold",
                                                fontSize: 18,
                                            },
                                        }}

                          />
                          <Stack.Screen name={"IndexScreen"}  component={IndexScreen}/>
                          <Stack.Screen name={"IndexScreen"}  component={IndexScreen}/>

                      </Stack.Navigator>
                  </NavigationContainer>
          </SafeAreaProvider>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
