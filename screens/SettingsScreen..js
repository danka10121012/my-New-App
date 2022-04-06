import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";

export function SettingsScreen({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getColors = async () => {
    try {
      const response = await fetch(
        "https://api.sampleapis.com/csscolornames/colors"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getColors();
  }, []);

  function handleSettingsPress() {
    navigation.navigate("Home");
  }


  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.header}>Hello! These are all the colors in the world:</Text>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.itemWrapper}>
                <View style={styles.item}>
                  <View style={{backgroundColor: item.hex, marginRight: 10, padding: 10}} >
                    <Text style={styles.color}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                  </View>
                  <View style={styles.text}>
                    <Text style={styles.textSpecific}>Name: {item.name}</Text>
                    <Text style={styles.textSpecific}>HEX value: {item.hex}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </View>
      <Button title="Home" onPress={handleSettingsPress} color={"#808080"} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0F1812",
  },
  header: {
    fontSize: 30,
    backgroundColor: "#0F1812",
    color: "#EBEBEB",
    padding: 15,
    marginBottom: 10,
  },
  itemWrapper: {
    backgroundColor:"#0F1812" 
  },
  item: {
    flexDirection: "row",
    margin: 10,
  },
  text: {
    width: 230,
  },
  textSpecific: {
    color: "#EBEBEB"
  },
});