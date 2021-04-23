import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import WordInput from "../Components/WordInput";
import "../Classes/firebase";
import * as firebase from "firebase";
import "firebase/firestore";
import * as Speech from "expo-speech";

class WordsList extends React.Component {
  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection("WordList").orderBy('createdOn',"desc");
    this.state = {
      isLoading: true,
      wordArr: [],
      amount:0,
    };
  }
  componentDidMount() {
    this.deleteItem = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.deleteItem();
  }

  getCollection = (querySnapShot) => {
    const wordArr = [];
    querySnapShot.forEach((res) => {
      const { word } = res.data();
      wordArr.push({ word });
    });
    this.setState({ wordArr, isLoading: false , amount: wordArr.length});
  };
  speak = (str) => {
    Speech.speak(str);
  };
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
            {this.state.amount}
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
          {this.state.wordArr.map((item, i) => {
            return (
              <TouchableOpacity onPress={() => this.speak(item.word)}>
                <ListItem key={i} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title
                      style={{
                        color: "#CC0022",
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      {item.word}
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default WordsList;
