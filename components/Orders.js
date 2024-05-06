import React, { useState, useEffect } from 'react';
const axios = require('axios').default;
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconstar from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar } from 'react-native-paper';
import userImage from '../assets/userpik.jpg';
import OpenOrders from './OpenOrders';
import TradeHistory from './TradeHistory';
import { useTheme } from '../ThemeProvider';
const Orders = ({ navigation }) => {
    const theme = useTheme();

    const [selectedTab, setSelectedTab] = useState('tabs-1');
    const handleTabPress = (tabName) => {
        setSelectedTab(tabName);
    };
    return (
        <View style={[styles.background, { backgroundColor: theme.colors.background }]}>
            <Appbar.Header style={{ backgroundColor: theme.colors.background, flexDirection: 'row' }} >
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
                        <TouchableOpacity style={{ width: "auto", alignItems: "flex-end", marginRight:10 }}>
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

            <ScrollView style={styles.container}>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 17, marginTop: 20 }}>
                    <TouchableOpacity style={[styles.tabButton, selectedTab === 'tabs-1' && styles.activeTab]}
                        onPress={() => handleTabPress('tabs-1')}>

                        <Text style={[styles.buttons_text, { color: selectedTab === 'tabs-1' ? '#000' : '#10BFDF' }]}>Open Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tabButton, selectedTab === 'tabs-2' && styles.activeTab]}
                        onPress={() => handleTabPress('tabs-2')}>
                        <Text style={[styles.buttons_text, { color: selectedTab === 'tabs-2' ? '#000' : '#10BFDF' }]}>Teade History</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    {selectedTab === 'tabs-1' ?
                        <OpenOrders /> : <TradeHistory />
                    }
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

    buttons_text: {
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 15,
    },
    tabButton: {
        padding: 10,
        borderRadius: 8,
        textAlign: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
        width: "45%",
        borderWidth: 1,
        borderColor: "#10BFDF"

    },
    activeTab: {
        backgroundColor: '#10BFDF',
    },
    text_colr: {
        color: "#fff",
    },
    card: {
        backgroundColor: "#00162A",
        padding: 10,
        margin: 16
    },
    text_view1: {
        width: '25%',
        color: "#fff",
    },
    text_view2: {
        width: '50%',
        color: "#fff",
        borderTopWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'dashed',
        marginTop: 10
    },
    text_view3: {
        width: '20%',
        color: "#fff",
        textAlign: 'right'
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#48E3FF",
        paddingHorizontal: 10,
        paddingVertical: 4,
    }
})

export default Orders