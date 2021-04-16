import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import { ListItem } from 'react-native-elements'
import WordInput from "../Components/WordInput";
import "../Components/firebase";
import * as firebase from "firebase";
import "firebase/firestore";

class WordsList extends React.Component {
  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection("WordList");
    this.state = {
      isLoading: true,
      wordArr: [],
    };
  }
  componentDidMount() {
    this.deleteItem = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
      this.deleteItem();
  }

  getCollection = (querySnapShot) =>{
    const wordArr = [];
    querySnapShot.forEach(res => {
        const {word} = res.data();
        wordArr.push({word});
    });
    this.setState({wordArr,isLoading:false});
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 16, color: "#8798AD" }}>Your Record</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Text style={{ fontSize: 56, fontWeight: "bold", color: "#0323C1" }}>
            0
          </Text>
          <Text style={{ fontSize: 32, color: "#2E384D" }}>words</Text>
        </View>
        <WordInput />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#2E384D",
            paddingTop: 10,
          }}
        >
          Words List
        </Text>
        <ScrollView>
        {
            this.state.wordArr.map((item,i)=>{
                return(
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title style={{color:'#CC0022',fontSize:20,fontWeight:'bold'}}>
                                {item.word}
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                )
            })
        }
      </ScrollView>
      </View>
    );
  }
}

export default WordsList;
