import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { generatePassword } from "../../utils/generatePassword";
import { Feather } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Notification from "../../components/Notification";

export default function Main() {
  const [characters, setCharacters] = useState(2);
  const [utility, setUtility] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(password);
  };

  async function sendForm() {
    let response = await fetch("http://192.168.15.4:3000/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        utility: utility,
        password: password,
      }),
    });
    let json = await response.json();
    setMessage(json);
  }

  useEffect(()=> {
    setTimeout(() => {
      setMessage(null);
    }, 7000);
  }, [message])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        {message !== null ? <Notification label={message} /> : <View /> } 
        <Input
          label="Qual será a utilidade da senha?"
          value={utility}
          setValue={setUtility}
        />
        <Text style={styles.characters}>Caracteres: {characters}</Text>
        <Slider
          style={styles.slider}
          minimumValue={2}
          maximumValue={20}
          step={2}
          thumbTintColor="#232323"
          minimumTrackTintColor="#FFAC33"
          maximumTrackTintColor="#232323"
          onValueChange={setCharacters}
          value={characters}
        />

        <Button
          text="Gerar senha"
          onPress={() => generatePassword(characters, password, setPassword)}
        />
        {password !== "" ? (
          <View style={styles.result}>
            <View style={styles.password}>
              <Text style={styles.result__text}>{password}</Text>
              <TouchableOpacity
                style={styles.clipboard}
                onPress={() => copyToClipboard()}
              >
                <Feather name="clipboard" size={32} color="#232323" />
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <Button text="Salvar senha" onPress={() => sendForm()} />
            </View>
          </View>
        ) : (
          <View style={styles.result} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  content: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  characters: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#232323",
  },
  slider: {
    width: "100%",
    height: 48,
  },
  button: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  result: {
    height: 48,
    width: "100%",
  },
  password: {
    width: "100%",
    height: "100%",
    marginTop: 60,
    paddingStart: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  result__text: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});
