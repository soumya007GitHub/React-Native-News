import { View,Text, Image, StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../constants/Colors";

export default function LowerCard({title, image, source}){
    return (
        <View style={styles.container}>
            <Image
                    style={styles.newsImage}
                    source={
                        image != null
                        ? { uri: image }
                        : require('../assets/noNewsImage.jpg')
}

            />
            <Text numberOfLines={3} style={styles.newsText}>{title}</Text>
            <Text style={{color: COLORS.secondary, fontSize: 15}}>{source}</Text>
            <View style={{width: Dimensions.get('screen').width*0.9, borderColor: 'gray', borderWidth: 0.5, marginVertical: 15}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        alignItems: 'flex-start',
        width: Dimensions.get('screen').width*0.9,
        marginBottom: 10
    },
    newsImage: {
        width: Dimensions.get('screen').width*0.9,
        height: Dimensions.get('screen').height*0.3,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    newsText: {
        marginTop: 10,
        fontSize: 15
    }
})