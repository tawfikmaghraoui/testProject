
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, ScrollView, Image } from 'react-native';
import { images } from '../constants/config';



function Details({ route, navigation }) {

  const { nomClub, detailsClub } = route.params;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, []);



  return (
    <View style={styles.container}>


      {loading
        ?
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#022759" />
        </View>
        :
        <>
          <ScrollView>

            <Text onPress={() => navigation.navigate('Home')} style={styles.header}> Retour </Text>
            <Text style={{
              marginLeft: 10, marginTop: 0, textAlign: "center",
              color: "#fff", fontSize: 24
            }}>{nomClub}</Text>

            <Image imageStyle={{ borderRadius: 10 }}
              style={styles.imageStyle} source={images.logo} />

            <Text style={{
              marginLeft: 25, marginTop: 20, textAlign: "left",
              color: "#fff", fontSize: 20
            }}>List des joueurs session 2021/2022</Text>

            {detailsClub.map((item, index) => (
              <View key={(index * Math.random()).toString()}>

                <Text style={styles.listJoueur}> {item.idJoueur}  {item.nomJoueur}</Text>
              </View>
            ))}

          </ScrollView>
        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#091c3e",
    flex: 1
  },

  imageStyle: {
    height: 300,
    width: 385,
    marginLeft: "5%",
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  listJoueur:{
    marginLeft: 25, marginTop: 10, textAlign: "left", paddingTop: 10,
    color: "#fff", fontSize: 20
  },
  
  header:
  {
    fontSize: 16, fontWeight: "700", color: "#75b7e4",
    marginTop: "10%", marginLeft: "5%"
  }
});

export default Details;