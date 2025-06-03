import { View,Text, Image, StyleSheet, Dimensions } from "react-native";

export default function UpperCard({title, image}){
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
            <Text numberOfLines={2} style={styles.newsText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        alignItems: 'center',
        width: Dimensions.get('screen').width*0.8,
        height: Dimensions.get('screen').height*0.5,
        marginRight: 10
    },
    newsImage: {
        width: Dimensions.get('screen').width*0.8,
        height: Dimensions.get('screen').height*0.2,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    newsText: {
        marginTop: 10,
        fontSize: 15
    }
})