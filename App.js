import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import FlatlistItem from "./components/flatList/flatList";
import { Feather } from '@expo/vector-icons';
import styles from './styles/appStyles';
const imgData = [
  { id: 1, imgSource: require('./assets/food1.jpg') },
  { id: 2, imgSource: require('./assets/food2.jpg') },
  { id: 3, imgSource: require('./assets/food3.jpg') },
  { id: 4, imgSource: require('./assets/food3.jpg') },
  { id: 5, imgSource: require('./assets/food4.jpg') },

]
// const renderItem = ({ item }) => {
//   return (
//     <View style={{ flex: 0.5, alignItems: "center", flexDirection: "row", justifyContent: "center", marginBottom: 18 }}>
//       <Image source={item.imgSource} style={{ width: 180, height: 180, borderRadius: 30 }}></Image>
//     </View>
//   )
// }
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageWrapper}>
          <Image source={require('./assets/SONATA-hero-option1-764A5360-edit.jpg')} style={styles.avatar} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.nameText}>Chinh Nghia</Text>
          <Text style={styles.jobText}>Developer</Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendButton}>
              <Feather name="send" size={14} color={'white'}></Feather>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.countLikeGroup}>
        <View style={styles.countText}>
          <Text style={styles.countLable}>210</Text>
          <Text>Photo</Text>
        </View>
        <View style={styles.countText}>
          <Text style={styles.countLable}>15k</Text>
          <Text>Follower</Text>
        </View>
        <View style={styles.countText}>
          <Text style={styles.countLable}>605</Text>
          <Text>Following</Text>
        </View>
      </View>
      <FlatlistItem data={imgData} />
    </SafeAreaView  >
  );
}

