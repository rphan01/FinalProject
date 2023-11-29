import React, { useState } from 'react';
import { Button, TextInput, StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
function Add({ navigation }) {
    const [word, setWord] = useState("");
    const [definition, setDefinition] = useState("");
    var count = 0;

    return (
    
        <LinearGradient style = {styles.container}
            colors= {["#08204f", "#92e8f1"]}>
            <Image source = {require('../assets/swiftDeck.png')}
                    style = {styles.head_logo}></Image>
            
            <View style = {styles.box}>
                
                <TextInput multiline= {true} style = {styles.term}
                            placeholder='Enter Term'
                            onChangeText={(newText)=>{
                            setWord(newText);}}/>

                <TextInput multiline= {true} style = {styles.definition}
                            placeholder='Enter Definition'
                            onChangeText={(newText)=>{
                            setDefinition(newText);}}/>
               

                <TouchableOpacity onPress ={()=>navigation.navigate("Creates", { key: '002',word: word, definition: definition})}>
                    <View style = {styles.createB}>
                        <Text style = {{color: "#FFF" ,textAlign: 'center', fontFamily: 'Gill Sans', top: 10, fontSize: 30, fontWeight: 'bold'}}>
                            Create
                        </Text>
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

      term:{
        paddingHorizontal: 10,
        borderRadius: 10,
        
        // borderWidth:1,
        width:280,
        height:110,
        backgroundColor: "#b8e3ff",
        left:10,
        top: 50,
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
        top: 100,
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


});

export default Add;