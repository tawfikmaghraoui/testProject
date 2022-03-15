import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Alert, ActivityIndicator, Image } from 'react-native';

// Redux
import { connect } from 'react-redux';
import { images } from '../constants/config';
import { getlistJoueurs } from '../redux/actions/appActions';
import ListGreens from './ListGreens';



function Home(props) {

    let {
        navigation,
        listJoueurs,

        // Functions
        getlistJoueurs,
    } = props;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getlistJoueurs();
        setLoading(false);

    }, []);



    return (
        <View style={styles.container}>

            {loading
                ?
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <ActivityIndicator size="large" color="#0066CC" />
                </View>
                :
                <View style={styles.bodyContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{
                            marginLeft: 20, marginTop: 50, textAlign: "center",
                            color: "#fff", fontWeight: "bold", fontSize: 28
                        }}>Ligue 1</Text>
                        <Image source={images.ligue}
                            style={{
                                width: 60, height: 60, borderRadius: 60, marginTop: 50, marginRight: 20,
                                resizeMode: "contain"
                            }} />
                    </View>
                    <ListGreens clubs={listJoueurs.listJoueurs} navigation={navigation} />
                </View>
            }

        </View>
    );
};

const styles = StyleSheet.create({
    bodyContainer: { flex: 1 },

    container: {
        flex: 1,
        backgroundColor: "#091c3e"
    },

});

const mapStateToProps = (state) => ({
    listJoueurs: state.appR.listJoueurs,
});

const mapDispatchToProps = {
    getlistJoueurs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);



