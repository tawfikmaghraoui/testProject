
import React from 'react';
import { Dimensions } from 'react-native';


export const device = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};


export const images = {
    splash: require("../assets/splash.png"),
    logo: require('../assets/Logo2.png'),
    ligue: require('../assets/Ligue1.png')

};