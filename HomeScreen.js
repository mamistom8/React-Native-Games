import React,{useState} from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Dimensions,ImageBackground,Vibration} from 'react-native';
import ExpScreeen from './ExpScreen';

const HomeScreen = (props) => {
    return (<View style={styles.conteiner}>
                <Text style={styles.text}> Choose game to Play</Text>
                <TouchableOpacity  onPress={() =>props.navigation.navigate('Game')}>
                   <Text style={styles.button}>Corona Virus Game</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() =>props.navigation.navigate('TGame')}>
                   <Text style={styles.button}>Tap Game</Text>
                 </TouchableOpacity>    
            </View>)
}

const styles=StyleSheet.create({
    conteiner:{
        flex:1,
       justifyContent:"flex-start",
        alignItems:"center",
       
    },
    button: {
        fontSize :17,
        backgroundColor:"#f0c57f",
        color:"#47150f",
        borderRadius:20,
        borderWidth:1,
        borderRightColor:"#47150f",
        borderRightWidth:10,
        marginHorizontal: 20,
        padding:6,
        marginVertical:10,
        
    },
    text:{
        fontSize:30,
        textAlign:"center",
        marginTop:10,
        marginBottom:30
        
    }
});

export default HomeScreen;