import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation/Navigator';
import Header from './src/components/Header';
import { color } from './src/global/color';
import style from './src/global/style';
import Home from './src/screens/Home';
import ItemListCategory from './src/screens/ItemListCategory';
import { useState } from 'react';

export default function App() {

  const [categorySelected, setCategorySelected] = useState('');
  const [itemIdSelected, setItemIdSelected] = useState("");

  return (


    <Navigator/>




  );
}



// //{/* <<Home/> 
//       <ItemListCategory 
//       categorySelected={categorySelected}
//       setCategorySelected={setCategorySelected}/>
//  */}