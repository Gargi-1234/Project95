import React, { Component } from 'react';
import {
    Text, View, ImageBackground, StyleSheet,
    SafeAreaView, Platform, StatusBar,
    TouchableOpacity, TextInput,
    Alert
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
import AddActivity from './AddActivity';

export default class Activities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            work: "",
            
        }
    }
    addTask = () => {
        
    }
    add = () => {
        return (
            //       const{}= this.props
            <View>
                {/* <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ work: text })}
                    placeholder={"Add your Task"}
                    placeholderTextColor={""}
                    autoFocus
                /> */}
                {/* <TouchableOpacity
                       style={{
                        width: RFValue(100),
                        height: RFValue(50),
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        borderRadius: RFValue(30),
                        backgroundColor: "#92D3B3",
                        marginBottom: RFValue(20),       
                       }}
                        onPress={()=>{this.addTask}}
                    >
                        <Text style={{
                            color : "#000000"

                        }} > Add </Text>
                    </TouchableOpacity> */}
                    <Text>Hello</Text>
                    

            </View>
        )
    }
    delete = () => {

    }
    done = () => {

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
                    source={require("../assets/activitiesBg.png")}
                    style={styles.imageBackgroundStyle}
                >
                    <View style={styles.titleTextContainer} >
                        <Text style={styles.titleText} > Activities </Text>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignSelf: 'flex-start',
                        margin: RFValue(10),
                    }}>
                        <TouchableOpacity
                            style={[styles.button, { marginTop: RFValue(20) }]}
                            onPress={() => {
                             // this.add
                             this.props.navigation.navigate("AddActivity")
                            }}
                        >
                            <Ionicons
                                name={"add-sharp"}
                                size={RFValue(40)}
                                color={"#FEFAF6"}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, { marginTop: RFValue(20) }]}
                            onPress={() => {
                             
                            }}
                        >

                            <Ionicons
                                name={"remove-sharp"}
                                size={RFValue(40)}
                                color={"#FEFAF6"}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, { marginTop: RFValue(20) }]}
                            onPress={() => {
                                this.done
                            }}
                        >
                            <Ionicons
                                name={"checkmark-done"}
                                size={RFValue(40)}
                                color={"#FEFAF6"}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, { marginTop: RFValue(20) }]}
                            onPress={() => {
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
                        alignSelf: "flex-end",
                        marginRight: RFValue(20),
                        marginBottom: RFValue(20),
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Text>Activities</Text>

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
        backgroundColor: "#92D3B3",
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
    textinput: {
        width: RFValue(250),
        height: RFValue(50),
        padding: RFValue(10),
        borderColor: "#CAEBDA",
        borderWidth: RFValue(4),
        borderRadius: RFValue(10),
        fontSize: RFValue(20),
        color: "#22423D",
        backgroundColor: "#CAEBDA",
        marginBottom: RFValue(10)
    },
    inputText: {
        color: '#CAEBDA',
        padding: RFValue(5),
        fontSize: RFValue(22),
        fontWeight: 'bold',
        textAlign: 'center',
    },
})