import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, FlatList, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import Api from '../backCode/Api';
import Api2 from '../backCode/Api2';
import UpperCard from '../components/UpperCard';
import LowerCard from '../components/LowerCard';
import SectionHeading from '../components/SectionHeading';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants/Colors';

export default function HomePage() {
  const navigation = useNavigation();
  const [newsData, setNewsData] = useState(null);
  const [newsData2, setNewsData2] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
    setIsLoading(true);
      const data = await Api();
      if (data) {
        setNewsData(data.results);
        
    setIsLoading(false);
      }
    };
    fetchData();

    const fetchData2 = async () => {
    setIsLoading(true);
      const data2 = await Api2();
      if (data2) {
        setNewsData2(data2.results);
    setIsLoading(false);
      }
    };
    fetchData2();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <SectionHeading title="Highlights" iconName="view-headline"/>
      { isLoading ? 
      <ActivityIndicator size="large" /> 
      : <FlatList
        data={newsData}
        renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('NewsDetail', {
            title: item.title,
            link: item.link,
            description: item.description,
            image: item.image_url,
            source: item.source_name
          })}><UpperCard title={item.title} image={item.image_url}/></TouchableOpacity>}
        keyExtractor={item => item.article_id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.upperContent}
      />}
      <SectionHeading title="Trending News" iconName="trending-up"/>
      { isLoading ? <ActivityIndicator size="large" /> : 
      <FlatList
        data={newsData2}
        renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('NewsDetail', {
            title: item.title,
            link: item.link,
            description: item.description,
            image: item.image_url,
            source: item.source_name
          })}><LowerCard title={item.title} image={item.image_url} source={item.source_name}/></TouchableOpacity>}
        keyExtractor={item => item.article_id}
        showsHorizontalScrollIndicator={false}
        style={styles.lowerContent}
      />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: Dimensions.get('screen').height*0.05,
        paddingHorizontal: Dimensions.get('screen').width*0.05
  },
  upperContent: {
    marginVertical: 10,
  },
  lowerContent: {
    marginVertical: 20
  }
});
