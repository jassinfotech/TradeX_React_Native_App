import React, { useState, useEffect } from 'react';
const axios = require('axios').default;
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image,  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconstar from 'react-native-vector-icons/AntDesign';
import { Appbar } from 'react-native-paper';
import userImage from '../assets/userpik.jpg';
import DropDownPicker from 'react-native-dropdown-picker';
import TradingViewChart from './TradingViewChart';
import { useTheme } from '../ThemeProvider';

const Markit = ({ navigation }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Market Execution', value: 'Market Execution' },
    { label: 'Market Execution 1', value: 'Market Execution 1' },
    { label: 'Market Execution 2', value: 'Market Execution 2' }
  ]);
  const [selectedTab, setSelectedTab] = useState('tabs-3');
  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <View style={[styles.background, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header style={{ backgroundColor: "transparent", flexDirection: 'row' }} >
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
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}  style={{ width: "auto", alignItems: "flex-end", marginRight: 10 }}>
              <Image source={userImage} style={styles.userpik} />
              <Text style={styles.online}>
                <Icons name="dot-fill" color={'green'} size={20} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Appbar.Header>

      <ScrollView style={styles.container}>
     
        <View style={{ padding: 20,marginTop:5 }}>
          <DropDownPicker

            dropDownContainerStyle={{
              backgroundColor: theme.colors.background,
              borderColor: "#48E3FF"
            }}
            style={[styles.dropDownStyle, { backgroundColor: theme.colors.background }]}
            textStyle={{ color: theme.colors.text, padding: 0 }}
            open={open}
            theme={theme.isDarkMode ? "LIGHT" : "DARK"}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}

          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20,paddingVertical:7}}>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View>
              <Image source={require('../assets/coin.png')} style={styles.image}></Image>
            </View>
            <View style={styles.flatview}>
              <Text style={[styles.coinname, { color: theme.colors.text }]} >DHDI</Text>
              <Text style={[styles.ptext, { color: theme.colors.text }]}>Text</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', }}>
            <View style={styles.flatview}>
              <Text style={{ fontSize: 16, color: '#fff', paddingBottom: 5, color: theme.colors.text }}>$18.00</Text>
              <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#21E57B', borderRadius: 5, padding: 3, alignItems: 'flex-start', paddingLeft: 0 }}>
                <Text> <Icon name="arrow-up-outline"  size={14}  style={{ color:theme.isDarkMode ?'#ffff' :'#0000' }}/></Text>
                <Text style={{ color: theme.isDarkMode ? "#fff" : "#000", fontSize: 13, }}>20,6%</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingVertical: 18, paddingHorizontal: 20 }}>
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[styles.tabButton, selectedTab === 'tabs-1' && styles.activeTab]}
              onPress={() => handleTabPress('tabs-1')}
            >
              <Text style={[styles.tabButtonText, selectedTab === 'tabs-1' && styles.activeTabText, { color: theme.colors.text }]}>-0.1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, selectedTab === 'tabs-2' && styles.activeTab]}
              onPress={() => handleTabPress('tabs-2')}
            >
              <Text style={[styles.tabButtonText, selectedTab === 'tabs-2' && styles.activeTabText, { color: theme.colors.text }]}>-0.01</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, selectedTab === 'tabs-3' && styles.activeTab]}
              onPress={() => handleTabPress('tabs-3')}
            >
              <Text style={[styles.tabButtonText, selectedTab === 'tabs-3' && styles.activeTabText, { color: theme.colors.text }]}>-0.01</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, selectedTab === 'tabs-4' && styles.activeTab]}
              onPress={() => handleTabPress('tabs-4')}
            >
              <Text style={[styles.tabButtonText, selectedTab === 'tabs-4' && styles.activeTabText, { color: theme.colors.text }]}>-0.01</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, selectedTab === 'tabs-5' && styles.activeTab]}
              onPress={() => handleTabPress('tabs-5')}
            >
              <Text style={[styles.tabButtonText, selectedTab === 'tabs-5' && styles.activeTabText, { color: theme.colors.text }]}>-0.01</Text>
            </TouchableOpacity>
          </View>

        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 ,}}>
          <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', width: '100%' }}>
            <View style={{ alignItems: "center", width: '48%' }}><Text style={[styles.counterText, { color: theme.colors.text }]}>{counter} .07<Text style={{fontSize:23}}>13</Text></Text></View>
            <View style={{ alignItems: "center", width: '48%' }}><Text style={[styles.counterText, { color: theme.colors.text }]}>{counter} .07<Text style={{fontSize:23}}>29</Text></Text></View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', width: '100%', paddingHorizontal: 20, paddingBottom: 10 }}>
          <View style={styles.button}>
            <TouchableOpacity onPress={decreaseCounter} >
              <Text> <Icon name="remove-sharp" size={14}  style={{ color:theme.isDarkMode ?'#ffff' :'#000' }} /></Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: 700 }}>SL</Text>
            <TouchableOpacity onPress={increaseCounter} >
              <Text> <Icon name="add-sharp"  size={14}  style={{ color:theme.isDarkMode ?'#ffff' :'#000' }}/></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button2}>
            <TouchableOpacity onPress={decreaseCounter} >
              <Text style={{ fontWeight: 900 }} >  <Icon name="remove-sharp"  size={15}  style={{ color:theme.isDarkMode ?'#ffff' :'#000' }}/></Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: 700 }}>PT</Text>
            <TouchableOpacity onPress={increaseCounter} >
              <Text> <Icon name="add-sharp"  size={15}  style={{ color:theme.isDarkMode ?'#ffff' :'#000' }} /></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tradingbox}>
          <TradingViewChart themeMode={theme.isDarkMode} />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', width: '100%', paddingHorizontal: 20 }}>
          <View style={{ width: "25%" }}>
            <View style={[styles.butnayra, { justifyContent: 'center', color: theme.colors.background }]}>
              <Text style={styles.textsell}>518.85</Text>
            </View>
          </View>
          <View style={{ width: "38%", }}>
            <View style={[styles.butnayra, { justifyContent: 'center', color: theme.colors.background }]}>
              <Text style={[styles.textcenter, { color: theme.colors.text }]}>{counter}</Text>
            </View>
          </View>
          <View style={{ width: "25%" }}>
            <View style={[styles.butnayra, { justifyContent: 'center', color: theme.colors.background }]}>
              <Text style={styles.textbuy}>518.85</Text>
            </View>
          </View>

        </View>

        <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between', width: '100%', paddingHorizontal: 20 }}>
          <View style={{ width: "25%" }}>
            <TouchableOpacity style={styles.sellBtn}>
              <Text style={[styles.textBtn,{ color: theme.isDarkMode ? "#fff" : "#000",}]}>SELL</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "38%", }}>
            <View style={[styles.butnayra2, { backgroundColor:theme.isDarkMode ?'#0AD0F4 ' :'#00162B' }]}>
              <TouchableOpacity onPress={decreaseCounter} style={{}}  >
                <Text> <Icon name="remove-sharp"size={20}  color={'#fff'} /></Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={increaseCounter}>
                <Text> <Icon name="add-sharp" size={20}   color={'#fff'}/></Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: "25%" }}>
            <TouchableOpacity style={styles.buyBtn}>
              <Text style={[styles.textBtn,{ color: theme.isDarkMode ? "#fff" : "#000",}]}>BUY</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>
    </View >
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,

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

    paddingTop: 0,
    paddingLeft: 10

  },
  tradingimage: {
    width: "100%",
    resizeMode: 'cover',

  },
  tradingbox: {
    flexDirection: 'row',
    backgroundColor: "#00213F",
    height: 224,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00213F',
    overflow: 'hidden',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10

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

  online: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  totlebal: {
    paddingVertical: 10,
  },
  dropDownStyle: {
    borderColor: '#48E3FF',
    borderRadius: 10,
    minHeight: 35,
  },
  coinimage: {
    width: 33,
    height: 33,
  },
  coin_bu: {
    color: '#56A6F1',
    fontSize: 15,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#48E3FF',
    padding: 2,
    borderRadius: 10,
    width: '100%'
  },
  tabButton: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    textAlign: 'center',
    alignItems: 'center',
    marginHorizontal: 4,

  },
  activeTab: {
    backgroundColor: '#10BFDF',
  },
  tabButtonText: {
    color: '#fffF',
    fontSize: 15,
  },
  activeTabText: {
    color: '#000',
  },
  tabContent: {
    flex: 1,
    padding: 5,
  },
  flatviewcontianer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,

  },
  button: {
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FD005C',
    padding: 8,
    borderRadius: 10,
  },
  counterText: {
    fontSize: 15,
    color: '#ffff',
    justifyContent: 'flex-end'
  },
  button2: {
    backgroundColor: '#21E57B',
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 10,
  },
  sellBtn: {
    backgroundColor: '#FD005C',
    padding: 3,
    borderRadius: 10,
    textAlign: 'center',
    paddingVertical:5
  },
  textBtn: {

    fontSize: 16,
    textAlign: 'center'
  },
  buyBtn: {
    backgroundColor: '#21E57B',
    padding: 3,
    borderRadius: 10,
    textAlign: 'center',
    paddingVertical:5

  },
  butnayra: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: "#00213F",
    borderWidth: 1,
    borderRadius: 3,
    padding: 4

  },
  butnayra2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: "#00213F",
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    paddingVertical:4

  },
  textsell: {
    fontSize: 15,
    textAlign: 'center',
    color: "#FD005C",
    alignItems: "center"
  },
  textbuy: {
    fontSize: 15,
    textAlign: 'center',
    color: "#21E57B",
    alignItems: "center"
  },
  textcenter: {
    fontSize: 15,
    textAlign: 'center',
    alignItems: "center"
  },




});

export default Markit;
