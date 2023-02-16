import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DrawerContent } from "./src/DrawerContent";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  function HomeScreen({ navigation }) {
    return (
      <View>
        <Text>Home Page</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("About");
          }}
          style={{
            backgroundColor: "green",
            padding: 20,
            marginTop: 20,
            borderRadius: 7,
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Next Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
  function AboutScreen({ navigation }) {
    return (
      <View>
        <Text>About Page</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            padding: 20,
            marginTop: 20,
            borderRadius: 7,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Return Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
  function WorkScreen() {
    return (
      <View>
        <Text>What We Do</Text>
      </View>
    );
  }
  function ServiceScreen() {
    return (
      <View>
        <Text>Service Page</Text>
      </View>
    );
  }
  function Contact() {
    return (
      <View>
        <Text>Contact Us</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={
          {
            // drawerStyle: { width: 100 },
            // drawerPosition: "right",
          }
        }
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Work" component={WorkScreen} />
        <Drawer.Screen name="Services" component={ServiceScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
