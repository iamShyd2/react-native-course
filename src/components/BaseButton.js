import React from "react";
import { 
  Text, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  ActivityIndicator
} from "react-native-paper";
import { COLORS } from "../theme";
import LinearGradient from "react-native-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";

const BaseButton = ({children, style, loading, ...others}) => {
  return(
    <TouchableOpacity
      style={[styles.button, style]}
      {...others}
    >
      <LinearGradient colors={['#6dd5ed', '#2193b0']} 
        useAngle
        angle={90}
        style={{
          borderRadius: 10,
          padding: 10,
        }}
      >
        <Text
          style={styles.text}
          >
          {children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = new StyleSheet.create({
  button: {
    marginTop: 30,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: RFPercentage(3),
    fontFamily: "Nunito-Semibold",
  }
});

export default BaseButton;
