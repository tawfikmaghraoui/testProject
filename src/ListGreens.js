import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, Pressable, Image } from 'react-native';
import { images } from '../constants/config';






function ListGreens({ clubs, navigation }) {


const clubDetails =(nomClub,detailsClub)=> {
  navigation.navigate("Details", {
    nomClub: nomClub,
    detailsClub: detailsClub,
});
}
  const Item = ({ item }) => (
    <Pressable onPress={() => clubDetails(item.nomClub,item.detailsClub) } style={styles.item}>
<Text style={{
        marginLeft: 10, marginTop: 0, textAlign: "center",
        color: "#fff", fontSize: 18
      }}>{item.id}</Text>
      <Text style={{
        marginLeft: 0, marginTop: 0, textAlign: "center",
        color: "#fff", fontWeight: "bold", fontSize: 18
      }}>{item.nomClub}</Text>
   
      <Image source={images.logo}
        style={{
          width: 60, height: 60, borderRadius: 60, marginTop: 0,backgroundColor:"black",
          resizeMode: "contain"
        }} />



    </Pressable>
  );

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList style={styles.styleFlat}
        showsHorizontalScrollIndicator={false}
        data={clubs} renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={false} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    //backgroundColor: '#f9c2ff',
    //padding: 20,
    marginVertical: 8,
    marginHorizontal: 15,
    paddingVertical: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    borderRadius: 25,
    //width: 372, height: 80, 
    backgroundColor: "#abb9c2",
    alignItems: "center",
    justifyContent: "space-between"
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }, styleFlat: {
    flex: 1
  },
  button: {
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginLeft: "70%",
    marginTop: "3%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ListGreens;