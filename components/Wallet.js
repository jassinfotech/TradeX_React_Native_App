import React, { useState, useEffect } from 'react';
const axios = require('axios').default;
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, ImageBackground, TextInput, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconuser from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar, Searchbar } from 'react-native-paper';
import userImage from '../assets/userpik.jpg';
import { useTheme } from '../ThemeProvider';


const Wallet = ({navigation}) => {
    const theme = useTheme();
    return (
        <View style={[styles.background, { backgroundColor: theme.colors.background }]}>
            <LinearGradient
                colors={['#00101F', '#00101F']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Appbar.Header style={{  backgroundColor: theme.colors.background, flexDirection: 'row' }} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, paddingHorizontal: 8, paddingVertical: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ paddingRight: 8 }} onPress={() => navigation.navigate('ProfileScreen')}>
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop:5 }}>
                    <View style={[styles.trading_box,{backgroundColor: theme.isDarkMode ? '#B2D8FC' :'#00162B'}]}>
                        <View >
                            <Text style={{ fontSize: 14, color: theme.colors.text, paddingTop: 13 }}>Hello</Text>
                            <Text style={{ fontSize: 16, color: theme.colors.text }}>Cameron Williamson</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                            <Text style={{ fontSize: 16, color: theme.colors.text, zIndex: 3, paddingTop: 12 }}>*** *** **** 0329</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontSize: 14, zIndex: 3, color: theme.colors.text, paddingTop: 12 }}>Total Balance</Text>
                                <Text style={{ fontSize: 24, zIndex: 3, color: theme.colors.text }}>$ 4,645.60</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 14, zIndex: 3, color: theme.colors.text, paddingTop: 12 }}>Wallet</Text>
                               <View style={{backgroundColor:'#00162A',borderRadius:5,paddingHorizontal:8,paddingVertical:2}}>
                               <Text style={styles.sectionTitle}>Trade<Text style={styles.exTitle}>X</Text></Text>
                               </View>
                            </View>
                        </View>
                       
                       
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
                    <TouchableOpacity style={styles.butt_on}>
                        <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                            <Text style={{ paddingLeft: 25, paddingRight: 2 }}><Icon name="arrow-up-outline" color={'#000'} size={18} /></Text>
                            <Text><Icon name="mail-open-outline" color={'#000'} size={18} /></Text>
                            <Text style={{ paddingLeft: 10, color: '#000', paddingRight: 25, fontWeight: 500 }}>Deposit</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.butt_on2}>
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <Text style={{ paddingLeft: 25, paddingRight: 2 }}><Icon name="arrow-up-outline" color={'#000'} size={18} /></Text>
                            <Text><Icon name="mail-open-outline" color={'#000'} size={18} /></Text>
                            <Text style={{ paddingLeft: 10, color: '#000', paddingRight: 25, fontWeight: 500 }}>Withdraw</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 20, paddingTop: 25,paddingBottom:5}}>
                    <Text style={{ fontSize: 16, fontWeight: 700, color: theme.colors.text }}>Recent Transactions</Text>
                </View>
                <View style={[styles.flatviewcontianer,,{backgroundColor:theme.isDarkMode ?'#B2D8FC' :'#00162A'}]}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text><Iconuser name="user" style={{color: theme.colors.text}}size={45} /></Text>
                    </View>
                    <View style={styles.flatview}>
                        <Text style={{ fontSize: 16, fontWeight: 400, color: theme.colors.text }}>Withdraw</Text>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 3 }}>xxxx-xxxx-xxxx-xxxx</Text>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 3 }}>03:41PM 09/10/23   </Text>
                    </View>
                    <View style={styles.tradebtin}>
                        <Text style={{ fontSize: 14, fontWeight: 400, color: '#0EA140' }}>$ 850</Text>
                    </View>
                </View>
                <View style={[styles.flatviewcontianer,,{backgroundColor:theme.isDarkMode ?'#B2D8FC' :'#00162A'}]}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text><Iconuser name="user" style={{color: theme.colors.text}}size={45} /></Text>
                    </View>
                    <View style={styles.flatview}>
                        <Text style={{ fontSize: 16, fontWeight: 400, color: theme.colors.text }}>Withdraw</Text>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 3 }}>xxxx-xxxx-xxxx-xxxx</Text>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 3 }}>03:41PM 09/10/23   </Text>
                    </View>
                    <View style={styles.tradebtin}>
                        <Text style={{ fontSize: 14, fontWeight: 400, color: '#0EA140' }}>$ 850</Text>
                    </View>
                </View>
                <View style={[styles.flatviewcontianer,,{backgroundColor:theme.isDarkMode ?'#B2D8FC' :'#00162A'}]}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text><Iconuser name="user" style={{color: theme.colors.text}}size={45} /></Text>
                    </View>
                    <View style={styles.flatview}>
                        <Text style={{ fontSize: 16, fontWeight: 400, color: theme.colors.text }}>Withdraw</Text>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 3 }}>xxxx-xxxx-xxxx-xxxx</Text>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 3 }}>03:41PM 09/10/23   </Text>
                    </View>
                    <View style={styles.tradebtin}>
                        <Text style={{ fontSize: 14, fontWeight: 400, color: '#0EA140' }}>$ 850</Text>
                    </View>
                </View>
                <View style={[styles.flatviewcontianer,,{backgroundColor:theme.isDarkMode ?'#B2D8FC' :'#00162A'}]}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text><Iconuser name="user" style={{color: theme.colors.text}}size={45} /></Text>
                    </View>
                    <View style={styles.flatview}>
                        <Text style={{ fontSize: 16, fontWeight: 400, color: theme.colors.text }}>Withdraw</Text>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 3 }}>xxxx-xxxx-xxxx-xxxx</Text>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 3 }}>03:41PM 09/10/23   </Text>
                    </View>
                    <View style={styles.tradebtin}>
                        <Text style={{ fontSize: 14, fontWeight: 400, color: '#0EA140' }}>$ 850</Text>
                    </View>
                </View>
                <View style={[styles.flatviewcontianer,,{backgroundColor:theme.isDarkMode ?'#B2D8FC' :'#00162A'}]}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text><Iconuser name="user" style={{color: theme.colors.text}}size={45} /></Text>
                    </View>
                    <View style={styles.flatview}>
                        <Text style={{ fontSize: 16, fontWeight: 400, color: theme.colors.text }}>Withdraw</Text>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 3 }}>xxxx-xxxx-xxxx-xxxx</Text>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 3 }}>03:41PM 09/10/23   </Text>
                    </View>
                    <View style={styles.tradebtin}>
                        <Text style={{ fontSize: 14, fontWeight: 400, color: '#0EA140' }}>$ 850</Text>
                    </View>
                </View>
                <View style={[styles.flatviewcontianer,,{backgroundColor:theme.isDarkMode ?'#B2D8FC' :'#00162A'}]}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text><Iconuser name="user" style={{color: theme.colors.text}}size={45} /></Text>
                    </View>
                    <View style={styles.flatview}>
                        <Text style={{ fontSize: 16, fontWeight: 400, color: theme.colors.text }}>Withdraw</Text>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 3 }}>xxxx-xxxx-xxxx-xxxx</Text>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 3 }}>03:41PM 09/10/23   </Text>
                    </View>
                    <View style={styles.tradebtin}>
                        <Text style={{ fontSize: 14, fontWeight: 400, color: '#0EA140' }}>$ 850</Text>
                    </View>
                </View>
               
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
        
        color: "#47E3FF",
        elevation: 4,
        zIndex: 3,
    
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
    trading_box: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        borderColor: '#00213F',
        padding: 10,
        paddingVertical: 10,
        position: 'relative',
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
    butt_on: {
        backgroundColor: '#56A6F1',
        borderRadius: 8,

    },
    butt_on2: {
        backgroundColor: '#02C173',
        borderRadius: 8
    },
    flatviewcontianer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#00162A',
        padding: 12,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 10


    },


    flatview: {
        justifyContent: 'center',
        borderRadius: 2,
        width: "38%",
    },

    graph: {
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 2,
        width: "30%",
        overflow: 'hidden',
    },

    tradebtin: {
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 2,
        width: "43%",
        textAlign: 'center',
        alignItems: 'flex-end',

    },


});

export default Wallet;