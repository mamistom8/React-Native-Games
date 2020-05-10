import React,{useState} from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Dimensions,ImageBackground} from 'react-native';
import {LineChart} from "react-native-chart-kit";
 



const GameScreen = ({navigation}) => {
  
    const [day,setDay]=useState(1);
    const [Infected,setInfected]=useState(0);
    const [deaths,setDeaths]=useState(0);
    const [heald,setheald]=useState(0);
    const [economydamage,setEconomydamage]=useState(0);
    const [panic,setPanic]= useState(0);
    const [lablesArr,setLabelsArr] = useState([1]);
    const [Data,setData] = useState([0]);
    const dateArr =  [{ data: Data}];
    
    const arr= [

        {id: 0 ,headline:"a 39 year old woman health care worker from manhetten, returned from Iran on February 25th with no sympthomes at the time.",
        answer1:{text:'tweet "Coroana virus is dangeraus"',affect:{Infected:1,deaths:0,heald:0,damage:0,panic:1}},
        answer2:{text:'tweet "go on with your lives"',affect:{Infected:1,deaths:0,heald:0,damage:0,panic:0}}},

        {id: 1 ,headline:"A lawyer in his 50s who worked in Manhattan.After feeling ill in the hospital, he was released from isolation after testing negative, Instances of panic buying were reported after his case was confirmed.",
        answer1:{text:'tweet "get out of town despite CoronaVirus',affect:{Infected:20,deaths:0,heald:0,damage:0,panic:0}},
        answer2:{text:'tweet "be carefull in public trasportation"',affect:{Infected:11,deaths:0,heald:0,damage:0,panic:0}}},

        {id: 2 ,headline:"The number of cases in New York State increased to 11 as nine people linked to the lawyer tested positive, including his wife, a son, a daughter, a neighbor, and a friend and his family",
        answer1:{text:"Isolate all people that came in touch",affect:{Infected:6,deaths:0,heald:0,damage:0,panic:2}},
        answer2:{text:"Isolate only those tested positive",affect:{Infected:11,deaths:0,heald:0,damage:0,panic:-1}}},

        {id: 3 ,headline:"On March 6, eleven new cases were reported, All the new cases were tied to the first community transmission case, the lawyer.",
        answer1:{text:"prepare population for quarntine",affect:{Infected:19,deaths:0,heald:0,damage:0,panic:2}},
        answer2:{text:"business as usual",affect:{Infected:30,deaths:0,heald:0,damage:0,panic:-1}}},
        
        {id: 4 ,headline:'An article appeared in the New York Post stating that while Mayor de Blasio assigned responsibility for the lack of N95 masks and other personal protective equipment to the federal government, the city never ordered the supplies until that date.',
        answer1:{text:"Focus on medical equipment",affect:{Infected:20,deaths:0,heald:0,damage:100000,panic:1}},
        answer2:{text:"Focus on Covid-19 tests",affect:{Infected:24,deaths:0,heald:0,damage:115000,panic:1}}},
        
        {id: 5 ,headline:`Governor Andrew Cuomo declared a state of emergency in New York after ${Infected} cases had been confirmed in the state.`,
        answer1:{text:"declare state of ermangancy",affect:{Infected:26,deaths:0,heald:0,damage:200000,panic:2}},
        answer2:{text:"do not declare state of ermangey, its just panicink",affect:{Infected:40,deaths:0,heald:0,damage:0,panic:-1}}},
        
        {id: 6 ,headline:`the state reported 16 new confirmed cases and a total of ${Infected} cases statewide. New York City issued new commuter guidelines amid the current outbreak, asking sick individuals to stay off public transit, encouraging citizens to avoid densely packed buses, subways, or trains."`,
        answer1:{text:"Cancel public trasportation",affect:{Infected:50,deaths:0,heald:0,damage:35000,panic:3}},
        answer2:{text:"limit public trasportation",affect:{Infected:75,deaths:0,heald:0,damage:10000,panic:1}}},
        
        {id: 7 ,headline:`New York City mayor Bill de Blasio announced that there were ${Infected/2-10} confirmed cases of COVID-19 in New York City alone.`,
        answer1:{text:"quarntine the city",affect:{Infected:80,deaths:0,heald:0,damage:1500000,panic:5}},
        answer2:{text:"decalre stay-at-home",affect:{Infected:90,deaths:0,heald:0,damage:900000,panic:1}}},
       
        {id: 8,headline:"A number of schools and school districts announced closings or schedule modifications due to the virus.",
        answer1:{text:"close all schools",affect:{Infected:100,deaths:0,heald:0,damage:20000,panic:5}},
        answer2:{text:"close only schools in affected areas",affect:{Infected:120,deaths:0,heald:0,damage:5000,panic:3}}},
       
        {id: 9 ,headline:"All school trips were canceled for those in New York City.",
        answer1:{text:"cancel all school trips",affect:{Infected:245,deaths:1,heald:1,damage:1,panic:4}},
        answer2:{text:"cancel school trips in new york city",affect:{Infected:342,deaths:1,heald:1,damage:1,panic:2}}},
       
        {id: 10 ,headline:"Cuomo announced that the City University of New York and State University of New York schools would be closed for the following week",
        answer1:{text:"keep it closed further",affect:{Infected:320,deaths:0,heald:0,damage:350000,panic:3}},
        answer2:{text:"close it for just a week",affect:{Infected:367,deaths:0,heald:0,damage:100000,panic:1}}},
       
        {id: 11 ,headline:"These college systems would move most classes to an online-based system to rest of the spring semester",
        answer1:{text:"moving to distance learning model",affect:{Infected:478,deaths:1,heald:0,damage:500000,panic:1}},
        answer2:{text:"canceling school complitly",affect:{Infected:479,deaths:1,heald:0,damage:950000,panic:1}}},
       
        {id: 12 ,headline:" the first fatality in the state occurred. An 82-year-old woman in Brooklyn with pre-existing emphysema died in the hospital.",
        answer1:{text:"Invest in drive through testing",affect:{Infected:480,deaths:1,heald:0,damage:450000,panic:2}},
        answer2:{text:"invest in home delivey tests",affect:{Infected:423,deaths:1,heald:0,damage:600000,panic:4}}},
       
        {id: 13 ,headline:"the seconed fatality in the state was announsed,A 65-year-old person with other significant health problems died at their home",
        answer1:{text:"Close all Bars and restaurants expext take away and delivery",affect:{Infected:900,deaths:0,heald:1,damage:2000000,panic:3}},
        answer2:{text:"let Bars and restaurants work on limit capacity",affect:{Infected:1250,deaths:1,heald:0,damage:1000000,panic:1}}},
       
        {id: 14,headline:" the third fatality in the state was announced. A 79-year-old woman with underlying health issues died, who had been admitted to a New York City hospital.",
        answer1:{text:"shut down nonessential construction sites",affect:{Infected:1200,deaths:0,heald:0,damage:75000,panic:2}},
        answer2:{text:"let construction sites work under resrictions",affect:{Infected:1985,deaths:0,heald:0,damage:50000,panic:1}}},
       
        {id: 15 ,headline:"Cuomo announced that all Broadway theaters had been ordered to shut down at 5 p.m",
        answer1:{text:"Brodway theaters will shut down at 5 pm ",affect:{Infected:3200,deaths:2,heald:1,damage:40000,panic:1}},
        answer2:{text:"Brodway theaters will shut down completely ",affect:{Infected:3500,deaths:1,heald:1,damage:800000,panic:1}}},
       
        {id: 16 ,headline:"public gatherings in congregate spaces with more than 500 people were prohibited beginning 5 p.m.",
        answer1:{text:"Prohibit public gathring over 1000",affect:{Infected:4000,deaths:1,heald:1,damage:450000,panic:1}},
        answer2:{text:"Prohibit public gathring over 500",affect:{Infected:4000,deaths:2,heald:1,damage:300000,panic:2}}},
       
        {id: 17 ,headline:"Confirmed cases increased by 4,000 in a day, which brought the total number of confirmed cases statewide to nearly 21,000. 12,305 of these were in New York City.",
        answer1:{text:"stop sports ",affect:{Infected:9700,deaths:1,heald:1,damage:1,panic:1}},
        answer2:{text:"Allow sport with no audiance",affect:{Infected:11100,deaths:1,heald:1,damage:1,panic:1}}},
       
        {id: 18 ,headline:'Cuomo stated that "The apex is higher than we thought and the apex is sooner than we thought." He warned there was not enough assistance from the federal government and that the state had 25,000 cases and at least 210 deaths"',
        answer1:{text:"start work from home program",affect:{Infected:9000,deaths:1,heald:1,damage:500000,panic:1}},
        answer2:{text:"allow to work as usual if work from home isnt avalable",affect:{Infected:10000,deaths:1,heald:0,damage:750000,panic:1}}},
       
        {id: 19 ,headline:"Mayor Bill de Blasio said that the city may run out of supplies by April if the federal government does not send 3 million N95 masks, 50 million surgical masks, 15,000 ventilators, and 45 million surgical gowns, gloves, and face shields.",
        answer1:{text:"Stop incoming passenger flights to NY",affect:{Infected:8500,deaths:1,heald:1,damage:1000000,panic:1}},
        answer2:{text:"stop all flight in ny",affect:{Infected:7000,deaths:1,heald:1,damage:3000000,panic:1}}},
       
        {id: 20 ,headline:"The police union filed a complaint due to NYPD officers not being given masks and other protective gear.",
        answer1:{text:"obligate every one to wera mask in public",affect:{Infected:6400,deaths:1,heald:5,damage:4300,panic:1}},
        answer2:{text:"suplly masks to all public servers",affect:{Infected:6300,deaths:1,heald:4,damage:3000,panic:1}}},
       
        {id: 21 ,headline:"there were 100 deaths statewide, with the number of hospitalized patients increasing by 40 percent in New York City.",
        answer1:{text:"Deploy Navy's Hospital Ship in new york to treat corona ",affect:{Infected:6010,deaths:1,heald:1,damage:30000,panic:1}},
        answer2:{text:"Deploy Navy's Hospital Ship in new york to treat non corona",affect:{Infected:6000,deaths:1,heald:1,damage:25000,panic:1}}},
       
        {id: 22 ,headline:'The situation at Elmhurst Hospital Center in Queens has been described by one of the doctors there as "apocalyptic".',
        answer1:{text:"convert New York City's Javits Convention Center into a medical hospital. ",affect:{Infected:5400,deaths:1,heald:1,damage:1,panic:1}},
        answer2:{text:" convert New York City's Javits Convention Center into a 2,910-bed civilian medical hospital ",affect:{Infected:5300,deaths:1,heald:1,damage:1,panic:1}}},
       
        {id: 23 ,headline:'The New York Times reported that the city\'s 911 emergency response system was "overwhelmed" due to the large number of coronavirus patients needing transport to the hospital.',
        answer1:{text:"increase phone answers",affect:{Infected:4600,deaths:1,heald:1,damage:1,panic:1}},
        answer2:{text:"increase online instructions",affect:{Infected:5100,deaths:1,heald:1,damage:1,panic:1}}},
       
        {id: 24 ,headline:'Cuomo announced the statewide stay-at-home order, also known as the NYS on Pause Program.',
        answer1:{text:"enforce the law with fines",affect:{Infected:3000,deaths:1,heald:1,damage:-20000,panic:1}},
        answer2:{text:"enforce the law without fines",affect:{Infected:3200,deaths:1,heald:1,damage:10000,panic:1}}},
       
        {id: 25 ,headline:"The parmadic union filled a complain not having protacting gear",
        answer1:{text:"buy protactive gear",affect:{Infected:1900,deaths:1,heald:1,damage:40000,panic:1}},
        answer2:{text:"manufacture protective gear",affect:{Infected:2000,deaths:1,heald:1,damage:4000,panic:1}}},
       
        {id: 26 ,headline:" Dispatchers received more than 7,000 calls on March 26, a record since the September 11 attacks. Emergency workers had to decide which cases to prioritize, and some patients were being left at home without medical care",
        answer1:{text:"Help family abuse line",affect:{Infected:900,deaths:1,heald:1,damage:1,panic:1}},
        answer2:{text:"Help dipresion",affect:{Infected:1200,deaths:1,heald:1,damage:1,panic:1}}},
       
        {id: 27 ,headline:"Cuomo signed an executive order requiring all New York State residents to wear face masks or coverings in public places.",
        answer1:{text:"start alow to people go out side",affect:{Infected:650,deaths:1,heald:1,damage:1,panic:1}},
        answer2:{text:"keep the restrictios",affect:{Infected:417,deaths:1,heald:1,damage:1,panic:1}}},
       
        {id: 28 ,headline:" Cuomo announced the ther is a concern there will not be enough place for all the bodies",
        answer1:{text:"make new ceramonys in the state",affect:{Infected:216,deaths:1,heald:1,damage:1,panic:1}},
        answer2:{text:"invesst and rush for a cure",affect:{Infected:230,deaths:1,heald:1,damage:1,panic:1}}},
        
        {id: 29 ,headline:'several news outlets reported the hospital was at its "breaking point" after 13 patients died within a 24-hour period.',
        answer1:{text:"make field hospitals in central park",affect:{Infected:150,deaths:1,heald:1,damage:1,panic:1}},
        answer2:{text:"make field cermaoncy in sentral park",affect:{Infected:110,deaths:1,heald:1,damage:1,panic:1}}}
    ];
    
    const finish =() => {
      navigation.navigate('Home');
      }

    const nextQ=(affect)=>{
        if(day===30)
          finish();
        else{
          setDay(day+1);
          setInfected(Infected+affect.Infected);
          setDeaths(deaths+affect.deaths);
          setheald(heald+affect.heald);
          setEconomydamage(economydamage+affect.damage);
          setPanic(panic+affect.panic);
          setData([...Data,affect.Infected]);
          setLabelsArr([...lablesArr,day+1]);
        }}

    return (
    <View style={styles.container}> 
        <ImageBackground source={require('../src/pictures/background.jpg')} style={styles.container} >     
            <View style={styles.upperContainer}> 
                <Text style={styles.days}>DAY {day}</Text>
                <Text style={styles.headline}>{arr[day-1].headline}</Text>
                <TouchableOpacity onPress={()=> {nextQ(arr[day-1].answer1.affect)}}>
                    <Text style={styles.button}>{arr[day-1].answer1.text}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {nextQ(arr[day-1].answer2.affect)}} >
                    <Text style={styles.button}>{arr[day-1].answer2.text}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.chart}>
                    <LineChart 
                        data={{
                        labels: lablesArr,
                        datasets: dateArr
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={220}
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "#47150f",
                        backgroundGradientFrom: "#47150f",
                        backgroundGradientTo: "#47150f",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 0.2) => `rgba(181, 255, 255, ${opacity})`,
                        labelColor: (opacity = 0.2) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                          borderRadius: 16
                        },
                        propsForDots: {
                          r: "2",
                          strokeWidth: "1",
                          stroke: "#ffa726"
                        }
                        }}
                        bezier
                        style={{
                          marginVertical: 8,
                          borderRadius: 16
                        }}
                      />   
                </View>
                    
                <View style={styles.statsview}>
                    <Text style={styles.stats}>Infected: {Infected}</Text>
                    <Text style={styles.stats}>Number of deaths: {deaths} </Text>
                    <Text style={styles.stats}>Heald: {heald}</Text>
                    <Text style={styles.stats}>Economy Damage: -{economydamage} $ </Text>
                    <Text style={styles.stats}>Panic: {panic}</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:"space-between",
        flex: 1,
        alignItems:"center"
    },
    chart: {
        opacity:0.9
    },
    button: {
        fontSize :17,
        backgroundColor:"#f0c57f",
        color:"#47150f",
        borderRadius:5,
        borderWidth:1,
        borderColor:"#47150f",
        marginHorizontal: 20,
        padding:6,
        marginBottom:10,
        alignSelf:"center",
    },
    headline: {
        backgroundColor:"#5c241d",
        color:"#f0c57f",
        fontSize: 18,
        marginTop:15,
        marginBottom:20,
        marginLeft:10,
        alignSelf: "center",
        fontWeight:"bold",
        marginHorizontal:15,
        borderRadius:5,
        borderColor:"#f0c57f",
        borderWidth:1,
        textAlign:"center",
        opacity: 0.92,
        padding:1
    }, 
    days: {
        fontSize: 18,
        marginTop:10,
        alignSelf: "center",
        fontWeight:"bold",
        color:"#f0c57f"  
    },
    stats: {
        fontSize: 16,
        marginTop:2,
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
        fontSize:18,
        color:"#f0c57f",
        paddingLeft:2
    },
    statsview: {
        marginHorizontal:10,
        marginBottom:20,
        backgroundColor:"#5c241d",
        borderRadius:5,
        borderColor:"#f0c57f",
        borderWidth:1,
        opacity:0.92

    },
    upperContainer: {
      flexDirection:"column",
      justifyContent:"space-between",
      flex:1
    }
});

export default GameScreen;