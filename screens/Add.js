import React, { useState, useEffect } from 'react';
import { Button, TextInput, StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import firestore from '@react-native-firebase/firestore'
function Add({ navigation }) {

 
  const addDeck = () =>{
    firestore().doc("title").add({
      cards: [word, definition]
    })
  }
  

  const[word, setWord] = useState();
  const[definition, setDef] = useState();
  const[name, setName] = useState();

const[listData, setListData] = useState([]);

  return (
  
      <LinearGradient style = {styles.container}
          colors= {["#08204f", "#92e8f1"]}>
          <Image source = {require('../assets/swiftDeck.png')}
                  style = {styles.head_logo}></Image>
          
          <View style = {styles.box}>
              <KeyboardAvoidingView enabled = {true} keyboardVerticalOffset={10}>

              <TextInput multiline= {true} style = {styles.title}
                          value={name}
                          placeholder='Title of the Deck'
                          onChangeText={(newText)=>{
                          setName(newText);}}/>
                           
              <TextInput multiline= {true} style = {styles.term}
                          value={word}
                          placeholder='Enter Term'
                          onChangeText={(newText)=>{
                          setWord(newText);}}/>

              <TextInput multiline= {true} style = {styles.definition}
                          value = {definition}
                          placeholder='Enter Definition'
                          onChangeText={(newText)=>{
                          setDef(newText);}}/>
             </KeyboardAvoidingView>

              <TouchableOpacity onPress ={()=>{listData.push({title: name, term: word, def: definition});navigation.navigate("Creates", listData);}}>
                  <View style = {styles.createB}>
                      <Text style = {{color: "#FFF" ,textAlign: 'center', fontFamily: 'Gill Sans', top: 10, fontSize: 30, fontWeight: 'bold'}}>
                          Create
                      </Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => {saveTitle(); navigation.navigate("Home", listData)}}>
                <View style = {styles.backB}>
                  <Text style = {{color: "#FFF" ,textAlign: 'center', fontFamily: 'Gill Sans', top: 5, fontSize: 15, fontWeight: 'bold'}}>BACK</Text>
                </View>
              </TouchableOpacity>
              
          </View>
      
      </LinearGradient>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
      borderRadius: 10,
      // borderWidth: 1,
      width: 300,
      height: 450,
      backgroundColor: '#a2d8f7',
      top: 50,
      right: 0,
      borderWidth:1,
      borderColor:"white",
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
  sets:{
      borderRadius: 10,
      backgroundColor: '#a2d8f7',
      width: 350,
      height: 150,
      left:20,
      marginBottom: 10,
      flexDirection: 'row',
      
    },

  create:{
    borderRadius: 10,
    // borderWidth: 1,
    width: 350,
    height: 500,
    top: 200,
    backgroundColor: '#a2d8f7',
    position: "absolute",
  },

  each:{
      paddingHorizontal: 10,
      borderRadius: 10,
      // borderWidth:1,
      width:300,
      height: 130,
      backgroundColor: "#b8e3ff",
      right:50,
      top: 50,
     position:'absolute', 
      fontFamily: "Gill Sans",
      fontSize: 30,
      
      paddingTop: 20,
      
    },

    title:{
      paddingHorizontal: 10,
      borderRadius: 10,
      
      // borderWidth:1,
      width:280,
      height:25,
      backgroundColor: "#b8e3ff",
      left:10,
      top: 30,
      color: "#FFF",
      fontFamily: "Gill Sans",
      fontSize: 15,
      borderWidth:1,
      borderColor:"white",
      marginBottom:-25,
      
      
    },

    term:{
      paddingHorizontal: 10,
      borderRadius: 10,
      
      // borderWidth:1,
      width:280,
      height:110,
      backgroundColor: "#b8e3ff",
      left:10,
      top: 90,
      color: "#FFF",
      fontFamily: "Gill Sans",
      fontSize: 25,
      borderWidth:1,
      borderColor:"white",
      
      
    },

    definition:{
      paddingHorizontal: 10,
      borderRadius: 10,
      // borderWidth:1,
      width:280,
      height: 110,
      backgroundColor: "#b8e3ff",
      left:10,
      top: 120,
      color: "#FFF",
      fontFamily: "Gill Sans",
      fontSize: 25,
      borderWidth:1,
      borderColor:"white",
      
      
    },

    createB:{
      borderRadius:10,
      width:180,
      height: 50,
      backgroundColor: "#b8e3ff",
      top: 150,
      right:60,
      position:'absolute'
      
    },

    backB:{
      borderRadius:10,
      width:210,
      height: 30,
      backgroundColor: "#b8e3ff",
      top: 300,
      position: 'absolute',
      left:42,
    },

});

export default Add;