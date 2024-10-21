import { Stack } from "expo-router";
import { View, Text } from "react-native";

const OrdersLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Orders", headerShown: false }}
      />
    </Stack>
  );
};

export default OrdersLayout;
