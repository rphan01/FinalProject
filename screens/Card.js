import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';

const Card = () =>{
  const dataSource = [
    {key: '001', word: "where i'm at", definition: 'ur moms house'},
    {key: '002', word: 'benevolent', definition: 'kind, generous'},
    {key: '003', word: 'clout', definition: 'special advantage or power'},
    {key: '004', word: 'tu madre', definition: 'ur mom'},
    {key: '005', word: 'exacerbate', definition: 'to make worse or increase the severity of'},
    {key: '006', word: 'flourish', definition: 'to prosper, grow'},
    {key: '007', word: 'geriatric', definition: 'referring to old age'},
    {key: '008', word: 'hostile', definition: 'harmful, dangerous'},
    {key: '009', word: 'infer', definition: 'to guess, conclude, derive by reasoning'},
    {key: '0010',word: 'lament', definition: 'to feel sorry for, to mourn'},
    {key: '0011',word: 'ur mother', definition: 'thy mother is courted by me'},
  ]; 

  var[whichCardAmIOnIdk, setWhichCardAmIOnIdk] = useState(0);
  var[cardFront, setCardFront] = useState(dataSource[0].word);
  var[isDef, setIsDef] = useState(true);

  function previousCard() {
    if (whichCardAmIOnIdk>0){
    setWhichCardAmIOnIdk(whichCardAmIOnIdk-1);
    setCardFront(dataSource[whichCardAmIOnIdk].word);
    }
    else {
      setWhichCardAmIOnIdk(dataSource.length-1);
      setCardFront(dataSource[whichCardAmIOnIdk].word);
    }
    setIsDef(true);
    console.log("prev " +whichCardAmIOnIdk);
  }

  function nextCard() {
    if(whichCardAmIOnIdk<dataSource.length-1){
    setWhichCardAmIOnIdk(whichCardAmIOnIdk+1);
    setCardFront(dataSource[whichCardAmIOnIdk].word);
    }
    else {
      setWhichCardAmIOnIdk(0);
      setCardFront(dataSource[whichCardAmIOnIdk].word);
    }
    setIsDef(true);
    console.log("next " +whichCardAmIOnIdk);
  }

  function flipCard() {
    if(isDef)
      setCardFront(dataSource[whichCardAmIOnIdk].definition);
    else
      setCardFront(dataSource[whichCardAmIOnIdk].word);
    setIsDef(!isDef);
    

  }

  const navigation = useNavigation();

  return(
    <LinearGradient style = {styles.container} colors= {["#08204f", "#92e8f1"]}>
      <Image source = {require('../assets/swiftDeck.png')} style = {styles.head_logo}></Image>
      <TouchableOpacity onPress={()=>flipCard()}>
        <View style = {styles.box}>
          <Text style = {{color: "#FFF" ,textAlign: 'center', fontFamily: 'Gill Sans', top: 100, fontSize: 14, fontWeight: 'bold'}}>
            {cardFront} 
          </Text>
        </View>
      </TouchableOpacity> 
      <View style = {{flexDirection: 'row'}}>  
        <TouchableOpacity onPress={()=>previousCard()} style = {styles.circleButton}>
          <Image source ={require('../assets/left_arrow.png')} style = {{height: 40, width: 40, top:10, right:2}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>nextCard()} style = {styles.circleButton}>
        <Image source ={require('../assets/right_arrow.png')} style = {{height: 40, width: 40, top:10, left: 2}}/>
        </TouchableOpacity>
      </View>
    </LinearGradient>
    )
}

const styles = StyleSheet.create({
  cardText: {
    color: "#FFF" ,
    textAlign: 'center',
    fontFamily: 'Gill Sans',
    top: 100, fontSize: 14,
    fontWeight: 'bold'
  },
  circleButton: {
    height: 60,
    width: 60,
    backgroundColor: '#b8e3ff',
    borderRadius: 60,
    alignItems: "center",
    marginRight: 30,
    marginTop: 40,
    left: 8
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head_logo:{
    position: 'absolute',
    flex:1,
    width: 400,
    height: 400,
    left: -5,
    resizeMode: 'contain',
    bottom: 515,
  },
  box:{
    borderRadius: 10,
    width: 300,
    height: 250,
    backgroundColor: '#a2d8f7',
    top: 0,
    right: 0,
  },
  learnB:{
    borderRadius: 10,
    width: 110,
    height: 110,
    backgroundColor: '#a2d8f7',
    bottom: 150,
    right: 10,
    },
  gameB:{
    borderRadius: 10,
    width: 110,
    height: 110,
    backgroundColor: '#a2d8f7',
    bottom: 150,
    right: 0,
  },
  cardB:{
    borderRadius: 10,
    width: 110,
    height: 110,
    backgroundColor: '#a2d8f7',
    bottom: 150,
    left: 10,
  },
  set:{
    borderRadius: 10,
    width: 350,
    height: 110,
    backgroundColor: '#a2d8f7',
    bottom:-30,
    right:-175,
    position: "absolute",
  }

  });

  export default Card;