import React,{useState} from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Dimensions,ImageBackground,Vibration} from 'react-native';


const TapGameInfo = (props) => {
    return (<View style={styles.conteiner}>

                <Text style={styles.headine}>Welcome to TapCounter</Text>
                
                <Text style={styles.text}>You Have 20 seconds to Count as much as possible.</Text>
                <Text style={styles.text}>Notice ! every time you tap a number all the numbers relocate!</Text>
                <Text style={styles.text}>Good Luck!!</Text>
                
    </View>)
}

const styles=StyleSheet.create({
    conteiner:{
        flex:1,
       justifyContent:"flex-start",
        alignItems:"center",
    },
    headine:{
        fontSize:30,
        fontStyle:"italic",
        marginBottom:20

    },
    text:{
        fontSize:30,
        fontStyle:"italic",
        textAlign:"center"
        
    }
    
});

export default TapGameInfo;