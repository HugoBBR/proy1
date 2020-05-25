import React from 'react';
import {View,Text,StyleSheet ,Image}from 'react-native';
const Header =props=>{

return(
    <View style={styles.header}>
<Text style={styles.headerTitle}>{props.title}</Text>
<Text style={styles.headerCount}>00.00</Text>
<Image  style={styles.img} source={require('../assets/moneda.jpeg')}></Image>
    </View>

);

};

const styles=StyleSheet.create({
    header: {
            width:'100%',
            flexDirection:"row",
            height: 90,
            paddingTop:25,
            paddingLeft:20,
            backgroundColor:'#f7287b',
            alignItems:"center",
            justifyContent:"flex-start"
           
            

    },
    headerTitle:{
            color: 'black',
            fontSize:22,
            fontFamily:'Roboto'

    },
    headerCount:{
        position:"absolute",
        color: "blue",
        fontSize:20,
        fontFamily:'Roboto',
        right:55,
        top:45

},
    img:{
        position:"absolute",
        left:350,
        top:40,
        height:40,
        width:40,
        
    }

});

export default Header;