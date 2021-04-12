import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WordInput from '../Components/WordInput';
function WordsList (){
    return (
        <View>
            <Text style={{fontSize:16,color:'#8798AD'}}>Your Record</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'baseline'}}>
               <Text style={{fontSize:56,fontWeight:'bold',color:'#0323C1'}}>0</Text> 
               <Text style={{fontSize:32,color:'#2E384D'}}>words</Text>
            </View>
            <WordInput/>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#2E384D',paddingTop:10}}>Words List</Text>
        </View>
    );
}


export default WordsList;