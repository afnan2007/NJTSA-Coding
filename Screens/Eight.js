import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useFonts, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Eight() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require('./Eight.png')} /> 
    <Text style={styles.TitleText}>Thomas Edison</Text>
    <Text style={styles.Text}>National Historical Park</Text>
    <View style={styles.line}></View>
    <View style={styles.box}>
    <Text style={styles.subText}>Thomas Edison National Historical Park, located in West Orange, preserves the laboratory and home of Thomas Edison, one of America's greatest inventors. Visitors can take guided tours of Edison's laboratory complex, where they can see firsthand the inventions and innovations that shaped the modern world. The park also includes Edison's Glenmont Estate, a beautifully preserved mansion where visitors can explore the inventor's private residence and gardens. With exhibits, demonstrations, and interactive experiences, the Thomas Edison National Historical Park offers a fascinating glimpse of the work of a visionary genius.</Text>
    </View>
    <View style={styles.bottom}>
      <TouchableOpacity onPress={() => navigation.navigate("Screen 7")}>
      <Ionicons name="chevron-back" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Ionicons name="home" size={40} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Screen 9")}>
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
    width: '87%',
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