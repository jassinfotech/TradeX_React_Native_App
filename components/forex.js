import React, { useState, useEffect } from 'react';
const axios = require('axios').default;
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconss from 'react-native-vector-icons/FontAwesome';
import Iconstar from 'react-native-vector-icons/AntDesign';
import { Appbar } from 'react-native-paper';
import userImage from '../assets/userpik.jpg';
import { useTheme } from '../ThemeProvider';
import BidAsk from './BidAsk';
const Forex = ({ navigation }) => {
    const theme = useTheme();
    const [martkitup, setMartkitup] = useState(true)
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query) => {
        setSearchQuery(query);
        const filtered = data.filter((data) =>
            data.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCities(filtered);
    };
    const [selectedTab, setSelectedTab] = useState('Frox');
    const handleTabPress = (tabName) => {
        setSelectedTab(tabName);
    };
    return (
        <View>
            <Appbar.Header style={{ backgroundColor: theme.colors.background, flexDirection: 'row' }} >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, paddingHorizontal: 8, paddingVertical: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                        <Text style={styles.loctaion}> <Ionicons size={16} name="nav-icon-grid" color={'#56A6F1'} />   </Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.sectionTitle}>Trade<Text style={styles.exTitle}>X</Text></Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => navigation.navigate("News")} style={{ width: "auto", alignItems: "flex-end", marginRight: 10 }}>
                            <Text style={{ paddingTop: 5 }}><Ionicons size={22} name="bell" color={'#56A6F1'} /> </Text>
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

            <ScrollView>
                <View style={{ paddingHorizontal: 10, backgroundColor: theme.colors.background, paddingTop: 10 }}>
                    <View style={styles.totlebal}>
                        <Text style={[styles.heding, { color: theme.colors.text }]}>Total Balance</Text>
                        <Text style={[styles.subheding, { color: theme.colors.text }]}>$ 4,645.60</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 14, paddingBottom: 0 }}>
                        <View>
                            <Text style={[styles.heding, { color: theme.colors.text }]}>Trending</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 7, }}>
                        <View style={[styles.trading_box, { backgroundColor: theme.isDarkMode ? '#B6DCFF' : '#00162B' }]}>
                            <View style={{ flexDirection: 'row', }}>
                                <Image source={require('../assets/bitcoin.png')} style={styles.coinimage} />
                                <Text style={[styles.coinname, { color: theme.colors.text }]}>Crypto</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 14 }}>
                                <Text style={styles.coin_bu}>1Y</Text>
                                <Text style={styles.coin_bu}>6M</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#0EA140', fontSize: 16 }}>+3.61%</Text>
                                <Text style={{ color: '#FD005C', fontSize: 16 }}>-1.34%</Text>
                            </View>
                            <Image source={martkitup ? require('../assets/graph0.png') : require('../assets/graph.png')} style={styles.boximage} />
                        </View>
                        <View style={[styles.trading_box, { backgroundColor: theme.isDarkMode ? '#B6DCFF' : '#00162B' }]}>
                            <View style={{ flexDirection: 'row', }}>
                                <Image source={require('../assets/coin.png')} style={styles.coinimage} />
                                <Text style={[styles.coinname, { color: theme.colors.text }]}>BTC</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 14 }}>
                                <Text style={styles.coin_bu}>1Y</Text>
                                <Text style={styles.coin_bu}>6M</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#0EA140', fontSize: 16 }}>+3.61%</Text>
                                <Text style={{ color: '#FD005C', fontSize: 16 }}>-1.34%</Text>
                            </View>
                            <Image source={martkitup ? require('../assets/graph.png') : require('../assets/graph0.png')} style={styles.boximage} />
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, paddingBottom: 0, }}>
                        <View style={{ width: '55%' }}>
                            <Text style={[styles.heding, { color: theme.colors.text }]}>Popular Currency</Text>
                        </View>
                        <View style={{ width: '45%', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={[styles.search, { borderColor: theme.isDarkMode ? '#122C73' : '#48E3FF' }]}>
                                <Text>
                                    <Icon name='search' size={20} style={{ color: theme.isDarkMode ? '#000' : '#0AD0F4' }} />
                                </Text>
                                <TextInput
                                    style={styles.searchInput}
                                    onChangeText={onChangeSearch}
                                    value={searchQuery}
                                    placeholderTextColor="#888"
                                />
                            </View>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', paddingVertical: 20, }}>
                        <View style={styles.tabsContainer}>
                            <TouchableOpacity
                                style={[styles.tabButton, selectedTab === 'Frox' && styles.activeTab]}
                                onPress={() => handleTabPress('Frox')}
                            >
                                <Text style={[styles.tabButtonText, { color: theme.isDarkMode ? '#000' : '#0AD0F4' }, selectedTab === 'Frox' && styles.activeTabText]}>Frox</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.tabButton, selectedTab === 'Stocks' && styles.activeTab]}
                                onPress={() => handleTabPress('Stocks')}
                            >
                                <Text style={[styles.tabButtonText, { color: theme.isDarkMode ? '#000' : '#0AD0F4' }, selectedTab === 'Stocks' && styles.activeTabText]}>Stocks</Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.tabButton, selectedTab === 'Crypto' && styles.activeTab]}
                                onPress={() => handleTabPress('Crypto')}
                            >
                                <Text style={[styles.tabButtonText, { color: theme.isDarkMode ? '#000' : '#0AD0F4' }, selectedTab === 'Crypto' && styles.activeTabText]}>Crypto</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.tabButton, selectedTab === 'Indices' && styles.activeTab]}
                                onPress={() => handleTabPress('Indices')}
                            >
                                <Text style={[styles.tabButtonText, { color: theme.isDarkMode ? '#000' : '#0AD0F4' }, selectedTab === 'Indices' && styles.activeTabText]}>Indices <Iconstar name="star" size={11} color={'#48E3FF'} /></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                     <BidAsk />
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 20,
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
        width: 33,
        height: 33,
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
    totlebal: {
        paddingVertical: 10,
    },
    heding: {
        fontSize: 16,
        paddingBottom: 5,
    },
    subheding: {
        color: '#fff',
        fontSize: 35,
    },
    markitprice: {
        color: '#5ECCA3',
        fontSize: 14,
    },
    trading_box: {
        width: '48%',
        height: 150,
        borderRadius: 15,
        borderColor: '#00213F',
        padding: 10,
        paddingVertical: 10,
        position: 'relative',
    },
    boximage: {
        position: 'absolute',
        bottom: 0,
        left: '15%'
    },
    coinname: {
        fontSize: 18,
        paddingLeft: 13,
        paddingTop: 4
    },
    coin_bu: {
        color: '#56A6F1',
        fontSize: 15,
    },
    textColor: {
        color: '#fff',
        fontSize: 15,
    },
    search: {
        height: 30,
        borderRadius: 15,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 8,
        borderWidth: 1,
    },
    searchInput: {
        fontSize: 11,

    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tabButton: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#48E3FF',
        width: '23%',
        textAlign: 'center',
        alignItems: 'center',
        marginHorizontal: 4
    },
    activeTab: {
        backgroundColor: '#10BFDF',
    },
    tabButtonText: {
        fontSize: 12,
    },
    activeTabText: {
        color: '#000',
        fontWeight: 'bold',
    },
    tabContent: {
        flex: 1,
        padding: 0,
    },
    flatviewcontianer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBlockColor: '#455154'

    },

    image: {
        height: 40,
        width: 40,
        borderRadius: 50,
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
        width: "35%",
        textAlign: 'center',
        alignItems: 'flex-end',

    },
    priceview: {
        paddingRight: 10,
        borderRadius: 2,

    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',

    },
    detials: {
        color: '#ddd',
        fontSize: 14,
        overflow: 'hidden',
        maxWidth: '95%',

    },

    tratibtn: {
        backgroundColor: '#068651',
        paddingVertical: 2,
        paddingHorizontal: 20,
        marginTop: 5,
        borderRadius: 4,
        color: '#fff',
    },
    tratibtnred: {
        backgroundColor: '#fd1b1b',
        paddingVertical: 2,
        paddingHorizontal: 20,
        marginTop: 5,
        borderRadius: 4,
        color: '#fff',
    }
});

export default Forex;
