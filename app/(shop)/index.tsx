import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { PRODUCTS } from "@/assets/products";
import ProductItem from "@/components/ProductItem";
import ListHeader from "@/components/ListHeader";
import { useAuth } from "@/lib/providers/auth-provider";

export default function Home() {
  const { user } = useAuth();
  console.log("123", user);

  return (
    <View>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => {
          return <ProductItem product={item} />;
        }}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  flatListContent: { paddingBottom: 20 },
  flatListColumn: {
    justifyContent: "space-between",
  },
});
