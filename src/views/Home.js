import React from "react";
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from "react-native";
import Text from "../components/Text";
import Ionicons from "../components/Ionicons";
import { RFPercentage } from "react-native-responsive-fontsize";

const Home = () => {
    
    return (
        <View style={styles.page}>
            <View
                style={{
                    marginBottom: 20,
                }}
            >
                <TouchableOpacity>
                    <Ionicons name="ios-menu-outline" size={RFPercentage(6)} />
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    horizontal
                    data={
                        [
                            "All",
                            "Photography",
                            "Graphic Design",
                            "Web Development"
                        ]
                    }
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity style={{marginHorizontal: 10}}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
            <FlatList
                data={
                    [
                        {
                            title: "DSLR Fundamentals",
                            description: "Learning the basic of using a DSLR camera with Justin Bridges",
                            duration: 1,
                            image: "",
                        }
                    ]
                }
                renderItem={({item}) => {
                    return(
                        <View style={{
                            flexDirection: "row",
                        }}>
                            <Image
                                source={require("../../assets/images/2.jpg")}
                                style={{
                                    width: RFPercentage(18),
                                    height: RFPercentage(18),
                                    borderRadius: 10,
                                }}
                            />
                            <View style={{marginLeft: 20, flex: 1, justifyContent: "space-between"}}>
                                <Text style={{fontFamily: "Nunito-ExtraBold", fontSize: RFPercentage(3.2), lineHeight: RFPercentage(3.2)}}>{item.title}</Text>
                                <Text>{item.description}</Text>
                                <View style={{flexDirection: "row"}}>
                                    <Ionicons name="time-outline" />
                                    <Text style={{marginLeft: 3}}>{item.duration}hr</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 20,
        justifyContent: "space-between"
    },
    image: {
        width: "100%", 
        height: 200
    },
})


export default Home;