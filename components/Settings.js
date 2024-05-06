import React, { useState, useEffect } from 'react';
const axios = require('axios').default;
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, ImageBackground, TextInput, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Fontisto';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconuser from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar, Searchbar } from 'react-native-paper';
import userImage from '../assets/userpik.jpg';
import userimg from '../assets/userpik.jpg';
import { useTheme } from '../ThemeProvider';
const Settings = ({ navigation }) => {
  const theme = useTheme();
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      RNRestart.Restart()
      navigation.navigate('Home');
    } catch (error) { }
  
  };

  return (
    <View style={[styles.background, { backgroundColor: theme.colors.background }]}>
      <LinearGradient
        colors={['#00101F', '#00101F']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Appbar.Header style={{ backgroundColor: theme.colors.background, flexDirection: 'row' }} >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, paddingHorizontal: 8, paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} style={{ paddingRight: 8 }}>
                <Text style={styles.loctaion}> <Ionicons size={16} name="nav-icon-grid" color={'#56A6F1'} /></Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.loctaion}> <Iconstar size={18} name="staro" color={'#56A6F1'} />   </Text></TouchableOpacity>
            </View>
            <View>
              <Text style={styles.sectionTitle}>Trade<Text style={styles.exTitle}>X</Text></Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ width: "auto", alignItems: "flex-end", marginRight: 10 }}>
                <Text style={{ paddingTop: 5 }}><Icon size={19} name="share-social-outline" color={'#56A6F1'} /> </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("News")} style={{ width: "auto", alignItems: "flex-end", marginRight: 10 }}>
                <Text style={{ paddingTop: 5 }}><Ionicons size={19} name="bell" color={'#56A6F1'} /> </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ width: "auto", alignItems: "flex-end", marginRight: 10 }}>
                <Image source={userImage} style={styles.userpik} />
                <Text style={styles.online}>
                  <Icons name="dot-fill" color={'green'} size={20} />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Appbar.Header>
      </LinearGradient>
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 24, marginTop: 30, marginBottom: 15 }}>
          <View>
            <Image source={userimg} style={styles.userimg} />
          </View>
          <View style={{ width: '45%', justifyContent: 'center', right: 28 }}>
            <Text style={{ fontSize: 16, fontWeight: 600, color: theme.colors.text }}>Devid</Text>
          </View>
          <TouchableOpacity style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
            <Text style={{ paddingTop: 5 }}><Iconuser size={20} name="edit" style={{ color: theme.colors.text }} /> </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.boxtext, { backgroundColor: theme.isDarkMode ? '#A0CFFA' : '#00162A' }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }} >
            <View>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>Profile description</Text>
            </View>
            <TouchableOpacity style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
              <Text style={{ paddingTop: 5 }}><Iconuser size={20} name="edit" style={{ color: theme.colors.text }} /> </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 12, color: theme.colors.text, fontWeight: 400, marginTop: 10, marginRight: 15 }}>
              Pellentesque rutrum rutrum in ut tincidunt faucibus senectus. Id nisl amet vel amet donec ac. Varius amet tristique lacus tortor mauris amet mauris.
            </Text>
          </View>
        </View>
        <View style={[styles.boxtext, { backgroundColor: theme.isDarkMode ? '#A0CFFA' : '#00162A' }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }} >
            <View>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>Email</Text>
            </View>
            <TouchableOpacity style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
              <Text style={{ paddingTop: 5 }}><Iconuser size={20} name="edit" style={{ color: theme.colors.text }} /> </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 12, color: theme.colors.text, fontWeight: 400, }}>
              123@gmail.com
            </Text>
          </View>
        </View>
        <View style={[styles.boxtext, { backgroundColor: theme.isDarkMode ? '#A0CFFA' : '#00162A' }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }} >
            <View>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>Phone Number</Text>
            </View>
            <TouchableOpacity style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
              <Text style={{ paddingTop: 5 }}><Iconuser size={20} name="edit" style={{ color: theme.colors.text }} /> </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 12, color: theme.colors.text, fontWeight: 400, }}>
              +60 876 876 86
            </Text>
          </View>
        </View>
        <View style={[styles.boxtext, { backgroundColor: theme.isDarkMode ? '#A0CFFA' : '#00162A' }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }} >
            <View>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>Password</Text>
            </View>
            <TouchableOpacity style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
              <Text style={{ paddingTop: 5 }}><Iconuser size={20} name="edit" style={{ color: theme.colors.text }} /> </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 12, color: theme.colors.text, fontWeight: 400, }}>
              *****************
            </Text>
          </View>
        </View>
        <View style={[styles.boxtext, { backgroundColor: theme.isDarkMode ? '#A0CFFA' : '#00162A' }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }} >
            <View>
              <Text style={{ fontSize: 13, color: theme.colors.text }}>Payment Method</Text>
            </View>
            <TouchableOpacity style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
              <Text style={{ paddingTop: 5 }}><Iconuser size={20} name="edit" style={{ color: theme.colors.text }} /> </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize: 12, color: theme.colors.text, fontWeight: 400, }}>
              Visa Card
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{ alignItems: 'center', paddingVertical: 26 }} onPress={() => handleLogout()}>
          <View style={{ backgroundColor: '#0AD0F4', justifyContent: 'center', alignItems: 'center', paddingVertical: 13, width: '70%', borderRadius: 10 }}>
            <Text style={{ color: '#000', fontSize: 16, fontWeight: 500 }}> Log Out</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View >
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#001020"
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 20,
    flex: 1,
  },
  image: {
    width: 35,
    height: 35,
    marginTop: 5,
  },
  coinname: {
    fontSize: 20,
    color: '#fff',
    paddingTop: 0,
    paddingLeft: 10

  },
  ptext: {
    fontSize: 12,
    color: '#999',
    paddingLeft: 10
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#47E3FF",
    elevation: 4,
    zIndex: 3
  },

  exTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#47E3FF",
    shadowColor: "#fff",
    shadowOffset: {
      width: 5,
      height: 56,
    },

    shadowOpacity: 1.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  userpik: {
    width: 28,
    height: 28,
    borderRadius: 50,
    position: 'relative'
  },
  coinimage: {
    width: 33,
    height: 33,
  },
  online: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  trading_box: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    borderColor: '#00213F',
    padding: 10,
    paddingVertical: 10,
    position: 'relative',
    backgroundColor: "#001F3B",
    zIndex: 0
  },
  boximage: {
    position: 'absolute',
    bottom: 0,
    left: '5%',
    zIndex: 1,
    width: '100%',
    marginBottom: 1

  },
  userimg: {
    width: 70,
    height: 70,
    borderRadius: 50,


  },
  boxtext: {
    marginHorizontal: 10,
    paddingHorizontal: 14,
    paddingVertical: 20,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#00162A'
  }



});

export default Settings;