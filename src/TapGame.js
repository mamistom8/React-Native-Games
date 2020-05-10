import React,{useState} from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Dimensions,Alert, Modal,TouchableHighlight,Vibration,TouchableWithoutFeedback} from 'react-native';
import ExpScreen from './ExpScreen';
import { set } from 'react-native-reanimated';
import {Entypo} from '@expo/vector-icons'
import { Header } from 'react-native/Libraries/NewAppScreen';
const screen = Dimensions.get('window');

const button_size=100;

const TapGame = (props) => {
 
    const topGenerator=()=>{
        return Math.floor(Math.random() * (screen.height - 280)) + 100;
    }

    const leftGenerator=()=>{
        return Math.floor(Math.random()*(screen.width-button_size));
    }

    const random3pos=()=>{
    var x1,y1,x2,y2,x3,y3;
      do{
        x1=leftGenerator();
        x2=leftGenerator();
        x3=leftGenerator();
        y1=topGenerator();
        y2=topGenerator();
        y3=topGenerator();
            }while( (Math.abs(x1-x2)<button_size && Math.abs(y1-y2)<button_size) || (Math.abs(x2-x3)<button_size && Math.abs(y2-y3)<button_size) || (Math.abs(x1-x3)<button_size && Math.abs(y1-y3)<button_size) );
        return posarr={x1,y1,x2,y2,x3,y3};
}



    const posArr=random3pos();
    const [top1,Settop1]=useState(screen.height);
    const [left1,Setleft1]=useState(screen.width);
    const [top2,Settop2]=useState(screen.height);
    const [left2,Setleft2]=useState(screen.width);
    const [top3,Settop3]=useState(screen.height);
    const [left3,Setleft3]=useState(screen.width);
    const [i,setI]=useState(1);
    const [j,setJ]=useState(2);
    const [k,setK]=useState(3);
    const [modalVisible, setModalVisible] = useState(false);
    const [mistakes,setMistakes] =useState(0);
    const [highscore,Sethighscore]=useState(0);
    
    const reset=()=>{
        numbersRemove();
        setI(1);
        setJ(2);
        setK(3);
        setMistakes(0);
    }
    const numbersRemove= ()=>{
        Settop1(screen.height);
        Setleft1(screen.width);
        Settop2(screen.height);
        Setleft2(screen.width);
        Settop3(screen.height);
        Setleft3(screen.width);
    }
    const updateScore=()=>{
      if(i-mistakes>highscore)
      Sethighscore(i-mistakes);
    }
  

    const Start= ()=> {
      const posArr1=random3pos()

        Settop1(posArr1.y1);
        Setleft1(posArr1.x1);
        Settop2(posArr1.y2);
        Setleft2(posArr1.x2);
        Settop3(posArr1.y3);
        Setleft3(posArr1.x3);
    }

    const RandomPos1=(pressed)=>{
      
       const posArr1=random3pos()

        Settop1(posArr1.y1);
        Setleft1(posArr1.x1);
        Settop2(posArr1.y2);
        Setleft2(posArr1.x2);
        Settop3(posArr1.y3);
        Setleft3(posArr1.x3);
        if(pressed==i)
        {
        setI(i+1);
        setJ(j+1);
        setK(k+1);
    }

        if(pressed!==i) {
          setMistakes(mistakes+1);
            Vibration.vibrate();
        }
        
        //setModalVisible(true);
    
    }
    
    
    return (<View style={styles.conteiner}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>You Counted to {i} with {mistakes} mistakes !! </Text>
            <Text>Finel Score: {i-mistakes}</Text>


            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
                
              }}
            >
              <Text >NEW GAME!</Text>
            </TouchableHighlight>
            <Text>highscore: {highscore}</Text>
          </View>
        </View>
      </Modal>

        <ExpScreen 
        onStart={()=>Start()} 
        onReset={()=>reset()} 
        finish={()=>{numbersRemove();updateScore();setModalVisible(true);}}
        
        style={styles.timer}>
        </ExpScreen>
        <TouchableOpacity style={[styles.button,{top:top1, left:left1}]} 
        onPress={()=>RandomPos1(i)}>
            <Text style={styles.buttonText}>{i}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{top:top2, left:left2}]} 
        onPress={()=>RandomPos1(j)}>
            <Text style={styles.buttonText}>{j}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{top:top3, left:left3}]} 
        onPress={()=>RandomPos1(k)}>
            <Text style={styles.buttonText}>{k}</Text>
        </TouchableOpacity>
        
       
    </View>)
}

TapGame.navigationOptions= ({navigation}) => {
return{
  
  headerRight:()=> <TouchableOpacity onPress={()=>navigation.navigate('Tapinfo') }>
    <Entypo name="info-with-circle" size={30} style={styles.info} />
  </TouchableOpacity>
};
};

const styles=StyleSheet.create({
  info: {
    margin:10

  },
    conteiner: {
        justifyContent:"flex-start",
        flex: 1,
        alignItems:"flex-start",
        backgroundColor:"#AC3B61"
        
    },
button:{
    height:100,
    width:100,
    backgroundColor:'#123c69',
    borderRadius:60,
    position:"absolute",
    flex:1,
    justifyContent:"center",
    borderColor:"#BAB2B5",
    borderWidth:3,
   
    

},
buttonText:{
    alignSelf:"center",
    fontSize:30,
    color:"#BAB2B5"
    
},
timer:{
    flex:1,
    borderWidth:1,
    borderColor:'black',
    width:screen.width

},
centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
      height:300,
      width:300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default TapGame;