import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import OrderItem from "../components/OrderItem";
import { useSelector } from "react-redux";
import { useGetOrdersQuery } from "../services/ShopService";

const OrderScreen = () => {
  const { user } = useSelector((state) => state.auth.value);


  const {data: OrderData, error, isLoading, isSuccess} = useGetOrdersQuery()
  const [ordersFiltered, setOrderFiltered] = useState()


  useEffect(() => {
    if (isSuccess && OrderData) {
      const responseTransformed = Object.values(OrderData);
      const ordersByUser = responseTransformed.filter(order => order.user === user);
      setOrderFiltered(ordersByUser);
    }
  }, [OrderData, isSuccess, user]);


  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
      Estas son las órdenes que has realizado
    </Text>
      <FlatList
        data={ordersFiltered}
        keyExtractor={(orderItem) => orderItem.id}
        renderItem={({ item }) => {
          return <OrderItem order={item} />;
        }}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});