import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { Redirect, Stack, useLocalSearchParams } from "expo-router";
import { CATEGORIES } from "@/assets/categories";
import { PRODUCTS } from "@/assets/products";
import ProductItem from "@/components/ProductItem";

const Category = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const category = CATEGORIES.find((c) => c.slug === slug);
  const products = PRODUCTS.filter((p) => p.category.slug === slug);
  if (!category) return <Redirect href={"/404"} />;
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: category.name }} />
      <Image style={styles.categoryImage} source={{ uri: category.imageUrl }} />
      <Text style={styles.categoryName}>{category.name}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        contentContainerStyle={styles.productsList}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  categoryImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
    borderRadius: 8,
  },
  categoryName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  productsList: {
    flexGrow: 1,
  },
  productRow: {
    justifyContent: "space-between",
  },
  productContainer: {
    flex: 1,
    margin: 8,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    resizeMode: "cover",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  productPrice: {
    fontSize: 14,
    marginTop: 4,
    color: "#888",
  },
});
