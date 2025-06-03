import { StyleSheet, Text, Dimensions, ScrollView, Image, View, Pressable, Share} from 'react-native';
import { COLORS } from '../constants/Colors';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import * as WebBrowser from 'expo-web-browser';
import { useState, useLayoutEffect } from 'react';

export default function NewsDetail({ route, navigation }) {
    const { title, link, description, image, source } = route.params;
    const [result, setResult] = useState(null);
    const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(link);
    setResult(result);
  };
  const onShare = async () => {
    try {
      await Share.share({
        message: `Check out this news: ${link}`,
      });
    } catch (error) {
      alert(error.message);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={onShare} style={{ marginRight: 10 }}>
          <EvilIcons name="share-apple" size={25} color="black" />
        </Pressable>
      ),
    });
  }, [navigation, link]);
  return (
    <>
    <ScrollView style={styles.container1}>
    <Image style={styles.newsImage} source={image != null ? { uri: image } : require('../assets/noNewsImage.jpg')}/>
    <Text style={styles.newsText}>{title}</Text>
    <Text style={{color: COLORS.secondary, marginVertical: 10}}>Source - {source}</Text>
    <Text style={{fontSize: 15}}>{description != null ? description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</Text>
    <Pressable style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline'}} onPress={_handlePressButtonAsync}>
    <Text style={{fontSize: 15, color: COLORS.primary, marginTop: 10}}>Read full article - </Text>
    <EvilIcons name="external-link" size={24} color="black"/>
    </Pressable>
    </ScrollView>
    <View style={styles.container2}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>{"Made by Soumya </>"}</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
   container1: {
      flex: 0.9,
          backgroundColor: COLORS.background,
          paddingTop: Dimensions.get('screen').height*0.05,
          paddingHorizontal: Dimensions.get('screen').width*0.05,
          paddingBottom: Dimensions.get('screen').height*0.05
    },
    container2: {
      flex: 0.1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.background,
      marginBottom: Dimensions.get('screen').height*0.01,
    },
    newsImage: {
        width: Dimensions.get('screen').width*0.9,
        height: Dimensions.get('screen').height*0.3,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    newsText: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
});
