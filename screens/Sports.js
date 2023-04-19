import React, { Component } from 'react';
import {
    Text, View, ImageBackground, StyleSheet,
    SafeAreaView, Platform, StatusBar,
    TouchableOpacity,
    Alert
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Sports extends Component {
    constructor(props){
        super(props);
        this.state = {
            activtyState : "",           
        }
    }
    render() {
        return (
            <View

                style={styles.container}
            >
                <SafeAreaView
                    style={styles.droidSafeArea}
                />
                <ImageBackground
                    source={require("../assets/sportsBg.png")}
                    style={styles.imageBackgroundStyle}
                >
                    <View style={styles.titleTextContainer} >
                        <Text style={styles.titleText} > Sports </Text>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignSelf: 'center',
                        margin: RFValue(5),
                    }}>
                        <TouchableOpacity
                            style={[styles.button, { margin: RFValue(20) }]}

                        >
                            <Ionicons
                                name={"add-sharp"}
                                size={RFValue(40)}
                                color={"#FEFAF6"}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, { margin: RFValue(20) }]}

                        >

                            <Ionicons
                                name={"remove-sharp"}
                                size={RFValue(40)}
                                color={"#FEFAF6"}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, { margin: RFValue(20) }]}

                        >
                            <Ionicons
                                name={"checkmark-done"}
                                size={RFValue(40)}
                                color={"#FEFAF6"}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, { margin: RFValue(20) }]}

                        >
                            <Ionicons
                                name={"timer"}
                                size={RFValue(40)}
                                color={"#FEFAF6"}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flex: 5,
                        width: RFValue(250),
                        alignSelf: "center",
                        alignItems : "center",
                        marginBottom: RFValue(20),
                        justifyContent: "space-evenly",

                    }}>
                        <Text>Sports</Text>

                    </View>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignContent: 'space-between',
    },
    imageBackgroundStyle: {
        resizeMode: "cover",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    button: {
        width: RFValue(50),
        height: RFValue(50),
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: RFValue(30),
        backgroundColor: "#F0946E",
        marginBottom: RFValue(20),
    },
    buttonText: {
        fontSize: RFValue(24),
        color: "#FEFAF6",
    },
    containerTwo: {
        marginRight: RFValue(10),
        flex: 1,
        flexDirection: "column",
        alignSelf: "flex-end",
        direction: "rtl",
        backgroundColor: "black",
        flex: 3
    },
    titleText: {
        color: '#22423D',
        padding: 20,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titleTextContainer: {
        backgroundColor: '#F0946E',
        alignSelf: "stretch"
    },

})