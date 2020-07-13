import React from 'react';
import { FlatList, View, Image } from 'react-native';
import styles from '../../styles/appStyles'

const renderItem = ({ item }) => {
    return (
        <View style={{ flex: 0.5, alignItems: "center", flexDirection: "row", justifyContent: "center", marginBottom: 18 }}>
            <Image source={item.imgSource} style={{ width: 180, height: 180, borderRadius: 30 }}></Image>
        </View>
    )
}
const FlatlistItem = ({ data }) => {
    return (
        <FlatList
            data={data}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.flatList}
        />
    )
}
export default FlatlistItem;