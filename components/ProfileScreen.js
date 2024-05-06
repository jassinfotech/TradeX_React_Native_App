import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconuser from 'react-native-vector-icons/FontAwesome5';
import Briefcase from 'react-native-vector-icons/SimpleLineIcons';
import userimg from '../assets/userpik.jpg';
import Help from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import SwichToggle from './SwichToggle';
import { useTheme } from '../ThemeProvider';

const ProfileScreen = ({ value, onValueChange , }) => {
    const theme = useTheme();
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    const toggleTheme = () => {
        theme.toggleTheme();
    }
    const [toggleValue, setToggleValue] = useState(value);

    const handleToggle = () => {
        const newValue = !toggleValue;
        setToggleValue(newValue);
        onValueChange(newValue);
    };

    return (
        <View style={[styles.background, { backgroundColor: theme.colors.background }]}>
            <ScrollView style={styles.container}>

                <View style={{ marginTop: 90, paddingHorizontal: 24, }}>
                    <TouchableOpacity onPress={handleGoBack} style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
                        <Ionicons size={20} name="close-a" style={{ color: theme.colors.text }} />
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 24, marginTop: 30, marginBottom: 15, backgroundColor: theme.isDarkMode ? '#A0CFFA' : '#00162A', borderRadius: 10, paddingVertical: 30, marginHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', }}>
                        <View>
                            <Image source={userimg} style={styles.userimg} />
                        </View>
                        <View style={{ width: '70%', justifyContent: 'center', left: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: 600, color: theme.colors.text }}>Devid</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
                        <Text style={{ paddingTop: 5 }}><Iconuser size={20} name="edit" style={{ color: theme.colors.text }} /></Text>
                    </TouchableOpacity  >
                </View>
                <View style={[styles.boxtext, { backgroundColor: theme.isDarkMode ? '#A0CFFA' : '#00162A' }]}>
                    <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 10 }} >
                        <View style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
                            <Text style={{ paddingTop: 5 }}><Briefcase size={20} name="briefcase" style={{ color: theme.colors.text }} /> </Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, color: theme.colors.text, fontWeight: 400 }}>My Portfolio</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 10 }} >
                        <View style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
                            <Text style={{ paddingTop: 5 }}><Icon size={24} name="text-long" style={{ color: theme.colors.text }} /> </Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, color: theme.colors.text, fontWeight: 400 }}>My Watchlist</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 10 }} >
                        <View style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
                            <Text style={{ paddingTop: 5 }}><Icons size={20} name="clock-rotate-left" style={{ color: theme.colors.text }} /> </Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, color: theme.colors.text, fontWeight: 400 }}>Statement</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 10 }} >
                        <View style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
                            <Text style={{ paddingTop: 5 }}><Iconstar size={22} name="barschart" style={{ color: theme.colors.text }} />  </Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, color: theme.colors.text, fontWeight: 400 }}>Trade History/ Open Prder</Text>
                        </View>
                    </TouchableOpacity>


                    <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>

                        <TouchableOpacity style={{ flexDirection: 'row', }} >
                            <View style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
                                <Text style={{ paddingTop: 5 }}><Icon size={22} name="theme-light-dark" style={{ color: theme.colors.text }} /> </Text>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, color: theme.colors.text, fontWeight: 400 }}>Appearance</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity activeOpacity={0.8} onPress={handleToggle}>
                                <SwichToggle onValueChange={toggleTheme} />
                            </TouchableOpacity>

                        </View>
                    </View>

                    <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 10 }} >
                        <View style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
                            <Text style={{ paddingTop: 5 }}><Iconstar size={22} name="gift" style={{ color: theme.colors.text }} /> </Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, color: theme.colors.text, fontWeight: 400 }}>Rewards</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 10 }} >
                        <View style={{ width: "auto", alignItems: "flex-end", marginRight: 10, justifyContent: 'center' }}>
                            <Text style={{ paddingTop: 5 }}><Help size={22} name="help-circle" style={{ color: theme.colors.text }} /> </Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, color: theme.colors.text, fontWeight: 400 }}>Help</Text>
                        </View>
                    </TouchableOpacity>


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
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginVertical: 5,
        borderRadius: 10,

    },
    switchText: {
        fontSize: 18,
        color: '#fff',
    },
    toggleContainer: {
        width: 80,
        height: 32,
        borderRadius: 15,
        borderWidth: 2,
        justifyContent: 'center',
    },
    activeToggle: {
        borderColor: '#48E3FF',
    },
    inactiveToggle: {
        borderColor: '#48E3FF',
    },
    toggleBall: {
        width: 26,
        height: 26,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#48E3FF'
    },
    activeBall: {
        transform: [{ translateX: 46 }],

    },
    inactiveBall: {
        transform: [{ translateX: 3 }],
    },


});

export default ProfileScreen;