import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useFonts, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Three() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require('./Three.png')} /> 
    <Text style={styles.TitleText}>Cape May</Text>
    <View style={styles.line}></View>
    <View style={styles.box}>
    <Text style={styles.subText}>Cape May, located at the southern tip of New Jersey, is renowned for its Victorian architecture, pristine beaches, and vibrant arts scene. Visitors can admire the beautifully preserved Victorian homes on a leisurely stroll through the historic district, known as one of the country's best-preserved examples of Victorian architecture. Nature lovers will delight in exploring Cape May's diverse ecosystem, which includes birdwatching opportunities at the Cape May Bird Observatory and stunning sunsets at Sunset Beach. With its picturesque beaches, quaint shops, and delicious seafood restaurants, Cape May offers a perfect retreat.</Text>
    </View>
    <View style={styles.bottom}>
      <TouchableOpacity onPress={() => navigation.navigate("Screen 2")}>
      <Ionicons name="chevron-back" size={40} color="black"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Ionicons name="home" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Screen 4")}>
      <Ionicons name="chevron-forward" size={40} color="black" />
      </TouchableOpacity>
    </View>
    <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2EFF6"
  },

  image: {
    width: '100%',
    height: '55%',
    borderRadius: 40,
  },

  TitleText: {
    paddingTop: 10,
    paddingLeft: 20,
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 35,
    textAlign: 'left',
  },

  line: {
    paddingTop: 5,
    paddingLeft: 30,
    width: '45%',
    height: 1,
    backgroundColor: '#000000',
  },

  box:{
    width: '90%',
    height: '25%',
    backgroundColor: '#F5F5F5',
    marginTop: 10,  
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },

  subText: {
    paddingTop: 15,
    padding: 10,
    fontSize: 15,
    textAlign: 'left',
  },

  bottom: {
    position:'absolute',
    paddingTop: 10,
    width: '100%',
    height: '8%',
    backgroundColor: '#FFFFFF',
    bottom: 0,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
});