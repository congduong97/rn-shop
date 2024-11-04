import { Colors } from "@/constants/Colors";
import { useAuth } from "@/lib/providers/auth-provider";
import { FontAwesome } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} {...props} style={{ color: props.color }} />;
}

function TabLayout() {
  const { session, mounting } = useAuth();
  // if (mounting) return <ActivityIndicator color={"green"} />;
  if (!session) return <Redirect href={"/auth"} />;
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#1BC464",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 8,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Shop",
            tabBarIcon(props) {
              return <TabBarIcon name="home" {...props} />;
            },
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "Orders",
            tabBarIcon(props) {
              return <TabBarIcon name="book" {...props} />;
            },
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

export default TabLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
