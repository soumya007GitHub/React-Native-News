import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { COLORS } from "../constants/Colors";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.heading}>NewsPulse</Text>
      <Image
        style={styles.profilePhoto}
        source={require('../assets/profilePicture.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: Dimensions.get('screen').width * 0.08,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: COLORS.secondary
    },
    profilePhoto: {
        width: Dimensions.get('screen').width * 0.1,
        height: Dimensions.get('screen').width * 0.1,
        borderRadius: 100
    }
})