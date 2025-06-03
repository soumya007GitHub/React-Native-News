import { Text, View, StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../constants/Colors";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

export default function SectionHeading({title, iconName}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <MaterialIcons name={iconName} size={Dimensions.get('screen').width * 0.05} color="gray" />
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex', flexDirection: 'row', alignItems: 'flex-end', marginTop: 15
    },
  heading: {
    fontSize: Dimensions.get('screen').width * 0.05,
    fontWeight: 300,
    letterSpacing: 1,
    color: COLORS.primary,
    paddingRight: 5
  }
})