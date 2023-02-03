import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Back = ({ onPress }) => {

    const navigation = useNavigation();

    return(
        <View>
            <TouchableOpacity style={styles.back} onPress={onPress || navigation.goBack}>
                <Ionicons name="arrow-back" color="#fff" size={20} />                
            </TouchableOpacity>
        </View>
    )
}

const styles = new StyleSheet.create({
    back: {
        width: 40,
        height: 40,
        backgroundColor: "#181818",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Back;