import React from "react";
import {
    Text,
    StyleSheet,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";


const T = ({ children, style, ...others }) => <Text style={[styles.text, style]}  {...others}>{children}</Text>

const styles = new StyleSheet.create({
    text: {
        color: '#000', 
        fontFamily: 'Nunito-Regular',
        fontSize: RFPercentage(2.2),
    }
})


export default T;