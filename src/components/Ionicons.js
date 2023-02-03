
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { RFPercentage } from "react-native-responsive-fontsize";

const Ionicons = ({name, color = "#000", size = RFPercentage(2.5)}) => {
    return(
        <Icon name={name} size={size} color={color} />
    )
}

export default Ionicons;