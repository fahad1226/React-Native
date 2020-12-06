import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} from "react-native";

export default function App() {
    const handlePress = () => console.log("Button Press");
    const onPressLearnMore = () => {
        console.log("Hello");
    };
    return (
        <View style={styles.container}>
            <Text>Hello React Native! Fahad</Text>
            <Text numberOfLines={1} onPress={handlePress}>
                lorem Ipsum this is a long text, Im gomnn amake thi sevent
                lobnger, haha h how are you doing?
            </Text>
            <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Image source={require("./assets/favicon.png")}></Image>
            <TouchableOpacity onPress={() => console.log("Touchable")}>
                <Image
                    //blurRadius={2}
                    source={{
                        width: 300,
                        height: 300,
                        uri: "https://picsum.photos/200/300",
                    }}
                ></Image>
            </TouchableOpacity>

            {/* <TouchableHighlight onPress={() => console.log("Touchable")}>
                <Image
                    //blurRadius={2}
                    source={{
                        width: 300,
                        height: 300,
                        uri: "https://picsum.photos/200/300",
                    }}
                ></Image>
            </TouchableHighlight> */}
            <TouchableNativeFeedback>
                <View style={{ marginTop: 50, width:200, height: 70, backgroundColor: 'dodgerblue' }}>
                    <Text style={{textAlign: 'center', marginTop: 20, fontSize: 20 }}>Fahad</Text>
                </View>
            </TouchableNativeFeedback>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
