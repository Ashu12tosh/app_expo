import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Liked" component={SettingsScreen} />
      <Tab.Screen name="Suggested" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home🏠</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings🤖</Text>
    </View>
  );
}

