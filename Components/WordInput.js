import React,{useState} from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";


const WordInput = () => {
    const [inputText, setText] = useState('');
    const inputHandler = (str)=>{
        setText(str);
    };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextInput
        style={styles.Input}
        placeholder="Add new word."
        placeholderTextColor="#8798AD"
        onChangeText={inputHandler}
        value = {inputText}
      />
      <Icon
        name="add-circle"
        type="ionicon"
        color="#CC0022"
        style={{marginHorizontal:10}}
        size={40}
        onPress={() => console.log(inputText)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Input: {
    flex:1,
    marginRight:20,
    borderWidth: 1,
    borderColor: "#8798AD",
    borderRadius: 13,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    color: "#2E384D",
    marginVertical: 15,
  },
});

export default WordInput;
