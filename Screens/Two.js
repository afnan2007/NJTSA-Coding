import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useFonts, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Two() {

  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });
  return (

    <View style={styles.container}>
    <Image style={styles.image} source={require('./Two.png')} /> 
    <Text style={styles.TitleText}>Princeton University</Text>
    <View style={styles.line}></View>
    <View style={styles.box}>
    <Text style={styles.subText}>Princeton University, one of the prestigious Ivy League institutions, boasts a stunning campus adorned with historic buildings and beautiful green spaces. Visitors can take guided tours to explore the university's rich history, including landmarks like Nassau Hall and the iconic Blair Arch. The Princeton University Art Museum houses a remarkable collection of artworks spanning various cultures and time periods, offering a cultural feast for art enthusiasts. Don't forget to stroll through Palmer Square, a charming shopping and dining area adjacent to the campus, perfect for relaxation and exploration.</Text>
    </View>
    <View style={styles.bottom}>
      <TouchableOpacity onPress={() => navigation.navigate("Screen 1")}>
      <Ionicons name="chevron-back" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Ionicons name="home" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Screen 3")}>
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
    width: '80%',
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