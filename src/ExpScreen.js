import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions } from 'react-native';

const screen = Dimensions.get('window');

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}


const ExpScreen=({onStart,onReset,finish}) =>{
  const [remainingSecs, setRemainingSecs] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const { mins, secs } = getRemaining(remainingSecs);
  const [started,setStarted]=useState(false);

  toggle = () => {
    setIsActive(!isActive);
    setStarted(true);
  }

  reset = () => {
    setRemainingSecs(10);
    setIsActive(false);
    setStarted(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && remainingSecs===0){
    toggle(); finish(); setStarted(false);
    }
    else if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs -1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity onPress={()=>{!started? onStart():null; this.toggle();}} >
          <Text style={styles.button} >{isActive ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
      <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
      <TouchableOpacity onPress={()=>{this.reset(); onReset();}} >
          <Text style={styles.button}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex:0,
    flexDirection:"row",
    //alignItems: 'center',
    justifyContent: "space-around",
    width:screen.width,
    paddingTop:10
  },
  button: {
      
      alignItems: 'center',
      justifyContent: 'center',
      color:'#AC3B61',
      fontSize:30,
      marginBottom:2,
      backgroundColor:'#123c69',
      borderRadius:15,
      padding:5
      

  },
  timerText: {
      color: '#AC3B61',
      fontSize: 40,
      marginBottom: 2,
      backgroundColor:'#123c69',
      borderRadius:15,
      padding:5
  },
  
});

export default ExpScreen;