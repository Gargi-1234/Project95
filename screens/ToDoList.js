import React, { Component } from 'react';
import {
    Text, View, ImageBackground, StyleSheet,
    SafeAreaView, Platform, StatusBar,
    TouchableOpacity,
    Alert
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Studies extends Component {

    constructor(props){
        super(props);
        this.state={
            
        }
    }

    add =()=>{

    }
    delete =()=>{

    }
    done =()=>{

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
                    source={require("../assets/toDoListBg.png")}
                    style={styles.imageBackgroundStyle}
                >
                    <View style={{
                        flex: 1, 
                        flexDirection: 'column',
                        alignSelf: 'flex-end',
                        margin: RFValue(10),
                    }}>
                        <TouchableOpacity
                            style={[styles.button, { marginTop: RFValue(20) }]}

                        >
                            <Ionicons
                                name={"add-sharp"}
                                size={RFValue(40)}
                                color={"#FEFAF6"}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, { marginTop: RFValue(20) }]}

                        >

                            <Ionicons
                                name={"remove-sharp"}
                                size={RFValue(40)}
                                color={"#FEFAF6"}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, { marginTop: RFValue(20) }]}

                        >
                            <Ionicons
                                name={"checkmark-done"}
                                size={RFValue(40)}
                                color={"#FEFAF6"}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, { marginTop: RFValue(20) }]}
                            onPress={()=>{
                                this.props.navigation.navigate("Timer")
                            }}
                        >
                            <Ionicons
                                name={"timer"}
                                size={RFValue(40)}
                                color={"#FEFAF6"}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flex: 20, 
                        width: RFValue(250),
                        alignSelf: "flex-start",
                        marginLeft: RFValue(20),
                        marginBottom: RFValue(20),
                        justifyContent : "space-between",
                        alignItems : "center"
                    }}>
                        <Text>To Do List</Text>

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
        flexWrap: "wrap"
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
        backgroundColor: "#000000",
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
        backgroundColor: '#92D3B3',
        alignSelf: "stretch"
    },

})