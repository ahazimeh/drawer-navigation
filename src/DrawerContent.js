import React from "react";
import { View, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Text,
  TouchableRipple,
  Switch,
  Drawer,
} from "react-native-paper";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
        // style={styles.drawerContent}
        >
          <View
            style={[
              // styles.userInfoSection,
              { flexDirection: "row" },
            ]}
          >
            <View
              style={{
                marginTop: 15,
              }}
            >
              <Text>drawer</Text>
            </View>
          </View>
          <Drawer.Section style={{ flex: 1, marginTop: 15 }}>
            <DrawerItem
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              label="About Us"
              onPress={() => {
                props.navigation.navigate("About");
              }}
            />
            <DrawerItem
              label="What we do"
              onPress={() => {
                props.navigation.navigate("Work");
              }}
            />
            <DrawerItem
              label="Services"
              onPress={() => {
                props.navigation.navigate("Services");
              }}
            />
            <DrawerItem
              label="Contact Us"
              onPress={() => {
                props.navigation.navigate("Contact");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
