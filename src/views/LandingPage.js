import React from "react";
import { AppContext } from "..";
import {
    View,
    Image,
    StyleSheet,
} from "react-native";
import Text from "../components/Text";
import BaseButton from "../components/BaseButton";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage } from "react-native-responsive-fontsize";

const LandingPage = () => {

    const navigation = useNavigation();

    const goToHome = () => navigation.navigate("Home");
    
    return (
        <View style={styles.page}>
            <Image source={require("../../assets/images/1.png")} style={styles.image} />
            <View>
                <Text style={styles.title}>Learn anytime and anywhere</Text>
                <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum soluta ex corrupti veniam dolore incidunt iure sint similique, enim.</Text>
                <BaseButton onPress={goToHome}>Start Learning</BaseButton>
            </View>
        </View>
    );
}

const styles = new StyleSheet.create({
    page: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    image: {
        width: RFPercentage(60), 
        height: RFPercentage(40)
    },
    title: {
        fontSize: RFPercentage(7), 
        fontFamily: "Lora-Bold", 
        marginBottom: 20, 
        color: "#000"
    }
})


export default LandingPage;