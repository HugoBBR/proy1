import React, { useState } from 'react';
import { Animated,StyleSheet, Text, View,Button, ActivityIndicator} from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Home from './GameScreen'
import Profile from './lul' ;


const Stack = createStackNavigator();
const StartGameScreen=props=>{
    
    
    return(
        <NavigationContainer>
        <View style={styles.screen}>
            <Text style={styles.titulo2}>Haz un robot lindowo</Text>
            <View >
            <Button title="Hola" onPress={()=> props.onStartGame(1)}></Button>
               </View>
        </View>
</NavigationContainer>
    );
    /*return(<NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome' }}
          />
           <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: 'Welcome2' }}
          />
         
        </Stack.Navigator>
      </NavigationContainer>);*/

};

function HomeScreen({ navigation }) {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:"center",
    },
    titulo2:{
        paddingTop:50,
        paddingBottom:50,
        fontSize:20,
        fontFamily:'Roboto'
    },
    boton:{
        fontSize:50,
        
    },
    piezasScreen:{
        alignItems:"flex-end",
        paddingTop:60
    }
    

});

export default StartGameScreen;
