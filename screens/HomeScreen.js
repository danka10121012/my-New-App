import React, { useEffect, useState } from "react";
import {
  View,
  Button,
  StyleSheet,
} from "react-native";

export function HomeScreen({ navigation }) {

  function handleSettingsPress() {
    navigation.navigate("Settings");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>

      <Button
        title="Wanna see some colors?"
        onPress={handleSettingsPress}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#0F1812" 
  },
  buttonContainer: {
    borderRadius: 250,
  },
  button: {
    width: 500,
    height: 200,
    borderRadius: 250,
    padding: 50,
  },
});