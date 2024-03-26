import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useFonts, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Five() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require('./Five.png')} /> 
    <Text style={styles.TitleText}>Delaware Water Gap</Text>
    <Text style={styles.Text}>National Recreation Area</Text>
    <View style={styles.line}></View>
    <View style={styles.box}>
    <Text style={styles.subText}>The Delaware Water Gap National Recreation Area spans over 70,000 acres of pristine wilderness, offering opportunities for hiking, camping, boating, and wildlife viewing. Visitors can explore scenic trails that wind through lush forests, rugged mountains, and cascading waterfalls, providing endless opportunities for outdoor adventure. The Delaware River, which runs through the recreation area, is popular for canoeing, kayaking, and tubing, allowing visitors to enjoy the beauty of the landscape from a unique perspective. With its diverse array of flora and fauna, the Delaware Water Gap National Recreation Area is a haven for nature lovers.</Text>
    </View>
    <View style={styles.bottom}>
      <TouchableOpacity onPress={() => navigation.navigate("Screen 4")}>
      <Ionicons name="chevron-back" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Ionicons name="home" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Screen 6")}>
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
    fontSize: 32,
    textAlign: 'left',
  },

  Text: {
    paddingLeft: 20,
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 32,
    textAlign: 'left',
  },

  line: {
    paddingTop: 5,
    paddingLeft: 30,
    width: '88%',
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