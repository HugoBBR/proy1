import React, { useState } from 'react';
import { StyleSheet, Text, View,Button,Animated} from 'react-native';
import Header from './components/header';
import StartGameScreen from './screens/StartGame';
import GameScreen from './screens/GameScreen';
import Lul from './screens/lul' ;
import { createDndContext } from "react-native-easy-dnd";






export default function App({navigation}) {

  
 
  
  const [count, setCount] = useState();
  const handler=(selected)=>{
    setCount(selected);
  };
  let content=<StartGameScreen onStartGame={handler} />
  if(count){
    content=<GameScreen />
  }
  
  return (
    <View style={styles.screen}>
        <Header title="Robots chidos"></Header>
      
    
      
    
  
       {content}
   
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
