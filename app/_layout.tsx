import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(shop)"
        options={{ headerShown: false, title: "Shop" }}
      />
      <Stack.Screen
        name="categories"
        options={{ headerShown: false, title: "Categories" }}
      />
      <Stack.Screen
        name="product"
        options={{ headerShown: true, title: "Product" }}
      />
      <Stack.Screen
        name="cart"
        options={{
          headerShown: true,
          title: "Shopping Cart",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="Auth"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
