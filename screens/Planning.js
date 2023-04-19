import React, { Component } from 'react';
import {
    Text, View, ImageBackground, StyleSheet,
    SafeAreaView, Platform, StatusBar,
    TouchableOpacity, TextInput,
    Alert, ScrollView
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Planning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            event: "",
            venue: "",
            food: "",
            cost: "",
            travel: "",
            theme: "",
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
                    source={require("../assets/planningbg.png")}
                    style={styles.imageBackgroundStyle}
                >

                    <View style={styles.titleTextContainer} >
                        <Text style={styles.titleText} > Fun Planner </Text>
                    </View>


                    <ScrollView
                        style={{
                            margin: RFValue(20),
                            padding : RFValue(20),
                            backgroundColor: "#22423D",
                            borderRadius: RFValue(20),
                            shadowColor: "rgb(0, 0, 0)",
                            shadowOffset: {
                                width: 3,
                                height: 3
                            },
                            shadowOpacity: 0.5,
                            shadowRadius: 5,
                            elevation: 2
                        }}
                    >

                        <View style={{
                            flex: 5,
                            width: RFValue(300),
                            alignSelf: "center",
                            alignItems: "center",
                            marginBottom: RFValue(20),
                            justifyContent: "center"
                            //backgroundColor : "red"
                        }}>

                            <Text
                                style={styles.inputText}
                            >
                                Date :
                            </Text>
                            <TextInput
                                style={styles.textinput}
                                onChangeText={text => this.setState({ date: text })}
                                placeholder={"Enter Date"}
                                placeholderTextColor={""}
                                autoFocus
                            />

                            <Text
                                style={styles.inputText}
                            >
                                Event :
                            </Text>
                            <TextInput
                                style={styles.textinput}
                                onChangeText={text => this.setState({ event: text })}
                                placeholder={"Enter Event Name"}
                                placeholderTextColor={""}
                                autoFocus
                            />

                            <Text
                                style={styles.inputText}
                            >
                                Venue :
                            </Text>
                            <TextInput
                                style={styles.textinput}
                                onChangeText={text => this.setState({ venue: text })}
                                placeholder={"Enter Venue"}
                                placeholderTextColor={""}
                                autoFocus
                            />


<Text
                                style={styles.inputText}
                            >
                                Menue/Food Items :
                            </Text>
                            <TextInput
                                style={styles.textinput}
                                onChangeText={text => this.setState({ food: text })}
                                placeholder={"Enter Menue/ Food Items"}
                                placeholderTextColor={""}
                                autoFocus
                            />


<Text
                                style={styles.inputText}
                            >
                                Cost :
                            </Text>
                            <TextInput
                                style={styles.textinput}
                                onChangeText={text => this.setState({ cost: text })}
                                placeholder={"Cost"}
                                placeholderTextColor={""}
                                autoFocus
                            />


<Text
                                style={styles.inputText}
                            >
                                Travel Cost :
                            </Text>
                            <TextInput
                                style={styles.textinput}
                                onChangeText={text => this.setState({ venue: text })}
                                placeholder={"Travel Cost"}
                                placeholderTextColor={""}
                                autoFocus
                            />

<Text
                                style={styles.inputText}
                            >
                                Theme :
                            </Text>
                            <TextInput
                                style={styles.textinput}
                                onChangeText={text => this.setState({ theme: text })}
                                placeholder={"Enter Theme"}
                                placeholderTextColor={""}
                                autoFocus
                            />



                            
                        </View>
                    </ScrollView>
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
        color: '#CAEBDA',
        padding: 20,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titleTextContainer: {
        backgroundColor: '#22423D',
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
        marginBottom : RFValue(10)
    },
    inputText: {
        color: '#CAEBDA',
        padding: RFValue(5),
        fontSize: RFValue(22),
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

