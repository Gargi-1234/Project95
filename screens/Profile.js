import React, { Component } from 'react';
import {
    Text, View, ImageBackground, StyleSheet,
    SafeAreaView, Platform, StatusBar,
    Alert
} from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <SafeAreaView
                    style={styles.droidSafeArea}
                />
                <ImageBackground
                    source={require("../assets/profileBg.png")}
                    style={styles.imageBackgroundStyle}
                >
                


                    <Text>Profile</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
       
    },
    imageBackgroundStyle: {
        resizeMode: "cover",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }

})