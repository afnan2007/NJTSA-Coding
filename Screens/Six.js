import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useFonts, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Six() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require('./Six.png')} /> 
    <Text style={styles.TitleText}>Grounds For Sculpture</Text>
    <View style={styles.line}></View>
    <View style={styles.box}>
    <Text style={styles.subText}>Grounds For Sculpture is a 42-acre sculpture park and museum located in Hamilton Township, featuring over 270 contemporary sculptures set within beautifully landscaped gardens. Visitors can wander through winding pathways, discovering thought-provoking artworks by renowned artists such as Seward Johnson and George Segal. The park also hosts rotating exhibitions, educational programs, and special events, providing opportunities for visitors to engage with art in dynamic and immersive ways. Don't miss the chance to dine at Rat's Restaurant, a French-inspired eatery nestled within the park, offering exquisite cuisine in a picturesque setting.</Text>
    </View>
    <View style={styles.bottom}>
      <TouchableOpacity onPress={() => navigation.navigate("Screen 5")}>
      <Ionicons name="chevron-back" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Ionicons name="home" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Screen 7")}>
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
    width: '92%',
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