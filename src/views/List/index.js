import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { css } from "../../assets/styles/global";
import Title from "../../components/Title";
import ListPasswords from "../../components/ListPasswords";

const StatusBarHeight = StatusBar.currentHeight;

export default function List() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    let response = fetch("http://192.168.15.10:3000/list")
      .then((response) => response.json())
      .then((passwords) => setValues(passwords));
  }, [values]);

  return (
    <View style={[css.container, styles.container]}>
      <StatusBar
        hidden={false}
        animated={true}
        backgroundColor="#FFF"
        barStyle="dark-content"
        showHideTransition={"fade"}
      />
      <Title text="Suas senhas" />
      {
        values.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.empty__text}>Não existe nenhuma senha salva!</Text>
          </View>
        ) : (
        <ListPasswords list={values} />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBarHeight,
  },
  empty:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty__text: {
    color: "#C1C1C1",
    fontSize: 16,
    fontWeight: "bold",
  }
});
