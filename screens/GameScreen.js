import React, { useRef, createContext } from 'react';
import {Animated,StyleSheet,AppRegistry,PanResponder,Image, Text, View,Button, ActivityIndicator, RecyclerViewBackedScrollView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {createDndContext} from "react-native-easy-dnd"
import Draggable from '../components/Drop'




const GameScreen=props=>{
/*
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          pan.setOffset({
            x: pan.x._value,
            y: pan.y._value
          });
        },
        onPanResponderMove: Animated.event(
          [
            null,
            { dx: pan.x, dy: pan.y }
          ]
        ),
        onPanResponderRelease: () => {
          pan.flattenOffset();
        }
      })
    ).current;*/

      


      

    return(
   
    <View style={styles.screen}>
        
         
   
            
        <Text style={styles.texto}>Aqui estara tu pinche robot</Text>
       
     
       <Image style={styles.robot} source={require('../assets/Vato.png')}/>

</View>


    

    );
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        paddingTop:10,
        alignItems:"center",
        justifyContent:"center"
    },
    screen2:{
        flex:1,
        paddingTop:70,
        alignItems:"center",
     
    },
    texto:{
        fontSize:20,
        fontFamily:'Roboto'
    },
    ScrollPiezas:{
    
paddingTop:75,
paddingLeft:30 

    },
    ViewScroll:{
        paddingBottom:50,
        paddingTop:280
        
    },
    Img:{
        flex: 1, 
        width:140,
        height:140,
       
        alignItems: 'center',
        overflow: 'hidden'
    },
    robot:{
        alignItems:"center",
        height:300,
        width:125
    },
    moneda:{
        
    }
});

export default GameScreen;

