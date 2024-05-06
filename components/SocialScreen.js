import React, { useState, useEffect } from 'react';
const axios = require('axios').default;
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, ImageBackground, TextInput, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconuser from 'react-native-vector-icons/FontAwesome5';
import Iconstars from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar, Searchbar } from 'react-native-paper';
import userImage from '../assets/userpik.jpg';
import { useTheme } from '../ThemeProvider';

const SocialScreen = ({ navigation }) => {
    const theme = useTheme();
    const [selectedTab, setSelectedTab] = useState('Frox');
    const handleTabPress = (tabName) => {
        setSelectedTab(tabName);
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
                            <TouchableOpacity style={{ paddingRight: 8 }} onPress={() => navigation.navigate('ProfileScreen')}>
                                <Text style={styles.loctaion}> <Ionicons size={16} name="nav-icon-grid" color={'#56A6F1'} /></Text>
                            </TouchableOpacity>

                        </View>
                        <View>
                            <Text style={styles.sectionTitle}>Trade<Text style={styles.exTitle}>X</Text></Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
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

                <View style={{ flexDirection: 'row', paddingTop: 30, paddingBottom: 20 }}>
                    <View style={styles.tabsContainer}>
                        <TouchableOpacity
                            style={[styles.tabButton, selectedTab === 'Top Traders' && styles.activeTab]}
                            onPress={() => handleTabPress('Top Traders')}
                        >
                            <Text style={[styles.tabButtonText, selectedTab === 'Top Traders' && styles.activeTabText]}>Top Traders</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabButton, selectedTab === 'Live Traders' && styles.activeTab]}
                            onPress={() => handleTabPress('Live Traders')}
                        >
                            <Text style={[styles.tabButtonText, selectedTab === 'Live Traders' && styles.activeTabText]}>Live Traders</Text>

                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 7 }}>
                    <View style={[styles.trading_box, { backgroundColor: theme.isDarkMode ? '#B6DCFF' : '#00162B' }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingHorizontal: 5 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={userImage} style={styles.userpik} />
                                <View style={{ paddingLeft: 14 }}>
                                    <Text style={{ fontSize: 16, color: theme.colors.text }}>John </Text>
                                    <Text style={{ fontSize: 11, color: theme.colors.text }}>Text </Text>
                                </View>
                                <View>
                                    <Text style={{ paddingTop: 10 }}> <Icon size={16} name="checkmark-circle-sharp" color={'#56A6F1'} /></Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <TouchableOpacity>
                                    <Text > <Iconstar size={26} name="staro" style={{ color: theme.colors.text }} />  </Text>
                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#0EA140', borderRadius: 10, paddingHorizontal: 7, paddingTop: 2 }}>
                                        <Text> <Icon size={13} name="checkmark-done" style={{ color: theme.isDarkMode ? '#fff' : '#000' }} /> </Text>
                                        <Text style={{ fontSize: 11, color: theme.isDarkMode ? '#fff' : '#000', fontWeight: 600 }}>Low Risk </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, paddingHorizontal: 5 }}>
                            <View>
                                <Text style={{ fontSize: 16, color: theme.colors.text }}>ROI   <Text style={{ fontSize: 16, color: '#0EA140' }}>+272% </Text> </Text>
                                <View style={{ paddingTop: 9 }}>
                                    <Text style={{ fontSize: 11, color: theme.colors.text }}>Information   <Text style={{ fontSize: 11, color: '#0EA140' }}>+18% </Text> </Text>
                                    <Text style={{ fontSize: 11, color: theme.colors.text }}>Information  </Text>
                                    <Text style={{ fontSize: 11, color: theme.colors.text }}>Information  </Text>
                                </View>
                            </View>
                            <View style={{ paddingTop: 15 }}> 
                                <Image source={require('../assets/graph.png')} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, paddingTop: 5 }}>
                            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                                <TouchableOpacity>
                                    <Text > <Iconuser size={18} name="user-check" style={{ color: theme.colors.text }} /> <Text style={{ fontSize: 13, color: theme.colors.text }}>510 </Text> </Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text > <Iconuser size={18} name="user-check" style={{ color: theme.colors.text }} /> <Text style={{ fontSize: 13, color: theme.colors.text }}>450 </Text> </Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text > <Iconstars size={18} name="star" color={'#48E3FF'} /> <Text style={{ fontSize: 13, color: theme.colors.text }}>4.7 </Text> </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#0AD0F4', paddingHorizontal: 17, paddingVertical: 6, borderRadius: 10, marginTop: 10 }}>
                                    <Text style={{ fontSize: 12, color: '#000', fontWeight: 400 }}>Follow </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 7 }}>
                    <View style={[styles.trading_box, { backgroundColor: theme.isDarkMode ? '#B6DCFF' : '#00162B' }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingHorizontal: 5 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={userImage} style={styles.userpik} />
                                <View style={{ paddingLeft: 14 }}>
                                    <Text style={{ fontSize: 16, color: theme.colors.text }}>John </Text>
                                    <Text style={{ fontSize: 11, color: theme.colors.text }}>Text </Text>
                                </View>
                                <View>
                                    <Text style={{ paddingTop: 10 }}> <Icon size={16} name="checkmark-circle-sharp" color={'#56A6F1'} /></Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <TouchableOpacity>
                                    <Text > <Iconstar size={26} name="staro" style={{ color: theme.colors.text }} />  </Text>
                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#0EA140', borderRadius: 10, paddingHorizontal: 7, paddingTop: 2 }}>
                                        <Text> <Icon size={13} name="checkmark-done" style={{ color: theme.isDarkMode ? '#fff' : '#000' }} /> </Text>
                                        <Text style={{ fontSize: 11, color: theme.isDarkMode ? '#fff' : '#000', fontWeight: 600 }}>Low Risk </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, paddingHorizontal: 5 }}>
                            <View>
                                <Text style={{ fontSize: 16, color: theme.colors.text }}>ROI   <Text style={{ fontSize: 16, color: '#0EA140' }}>+272% </Text> </Text>
                                <View style={{ paddingTop: 9 }}>
                                    <Text style={{ fontSize: 11, color: theme.colors.text }}>Information   <Text style={{ fontSize: 11, color: '#0EA140' }}>+18% </Text> </Text>
                                    <Text style={{ fontSize: 11, color: theme.colors.text }}>Information  </Text>
                                    <Text style={{ fontSize: 11, color: theme.colors.text }}>Information  </Text>
                                </View>
                            </View>
                            <View style={{ paddingTop: 15 }}>
                                <Image source={require('../assets/graph.png')} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, paddingTop: 5 }}>
                            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                                <TouchableOpacity>
                                    <Text > <Iconuser size={18} name="user-check" style={{ color: theme.colors.text }} /> <Text style={{ fontSize: 13, color: theme.colors.text }}>510 </Text> </Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text > <Iconuser size={18} name="user-check" style={{ color: theme.colors.text }} /> <Text style={{ fontSize: 13, color: theme.colors.text }}>450 </Text> </Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text > <Iconstars size={18} name="star" color={'#48E3FF'} /> <Text style={{ fontSize: 13, color: theme.colors.text }}>4.7 </Text> </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#0AD0F4', paddingHorizontal: 17, paddingVertical: 6, borderRadius: 10, marginTop: 10 }}>
                                    <Text style={{ fontSize: 12, color: '#000', fontWeight: 400 }}>Follow </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 7 }}>
                    <View style={[styles.trading_box, { backgroundColor: theme.isDarkMode ? '#B6DCFF' : '#00162B' }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingHorizontal: 5 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={userImage} style={styles.userpik} />
                                <View style={{ paddingLeft: 14 }}>
                                    <Text style={{ fontSize: 16, color: theme.colors.text }}>John </Text>
                                    <Text style={{ fontSize: 11, color: theme.colors.text }}>Text </Text>
                                </View>
                                <View>
                                    <Text style={{ paddingTop: 10 }}> <Icon size={16} name="checkmark-circle-sharp" color={'#56A6F1'} /></Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                                <TouchableOpacity>
                                    <Text > <Iconstar size={26} name="staro" style={{ color: theme.colors.text }} />  </Text>
                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#0EA140', borderRadius: 10, paddingHorizontal: 7, paddingTop: 2 }}>
                                        <Text> <Icon size={13} name="checkmark-done" style={{ color: theme.isDarkMode ? '#fff' : '#000' }} /> </Text>
                                        <Text style={{ fontSize: 11, color: theme.isDarkMode ? '#fff' : '#000', fontWeight: 600 }}>Low Risk </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15, paddingHorizontal: 5 }}>
                            <View>
                                <Text style={{ fontSize: 16, color: theme.colors.text }}>ROI   <Text style={{ fontSize: 16, color: '#0EA140' }}>+272% </Text> </Text>
                                <View style={{ paddingTop: 9 }}>
                                    <Text style={{ fontSize: 11, color: theme.colors.text }}>Information   <Text style={{ fontSize: 11, color: '#0EA140' }}>+18% </Text> </Text>
                                    <Text style={{ fontSize: 11, color: theme.colors.text }}>Information  </Text>
                                    <Text style={{ fontSize: 11, color: theme.colors.text }}>Information  </Text>
                                </View>
                            </View>
                            <View style={{ paddingTop: 15 }}>
                                <Image source={require('../assets/graph.png')} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, paddingTop: 5 }}>
                            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                                <TouchableOpacity>
                                    <Text > <Iconuser size={18} name="user-check" style={{ color: theme.colors.text }} /> <Text style={{ fontSize: 13, color: theme.colors.text }}>510 </Text> </Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text > <Iconuser size={18} name="user-check" style={{ color: theme.colors.text }} /> <Text style={{ fontSize: 13, color: theme.colors.text }}>450 </Text> </Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text > <Iconstars size={18} name="star" color={'#48E3FF'} /> <Text style={{ fontSize: 13, color: theme.colors.text }}>4.7 </Text> </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#0AD0F4', paddingHorizontal: 17, paddingVertical: 6, borderRadius: 10, marginTop: 10 }}>
                                    <Text style={{ fontSize: 12, color: '#000', fontWeight: 400 }}>Follow </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

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
    trading_box: {
        width: '100%',
        height: 210,
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
    online: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    userpik: {
        width: 33,
        height: 33,
        borderRadius: 50,
        position: 'relative'
    },
    tabsContainer: {
        flexDirection: 'row',

        alignItems: 'center',
    },
    tabButton: {
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#48E3FF',
        width: '35%',
        textAlign: 'center',
        alignItems: 'center',
        marginHorizontal: 10,

    },
    activeTab: {
        backgroundColor: '#10BFDF',

    },
    activeTabText: {
        color: '#000',
        fontSize: 14,
        fontWeight: 500,

    },
    tabButtonText: {
        fontSize: 14,
        fontWeight: 400,
        color: '#48E3FF'
    },



});

export default SocialScreen;