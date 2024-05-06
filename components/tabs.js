import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, ImageBackground, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicon from 'react-native-vector-icons/FontAwesome5';
import Iconorder from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Forex from './forex';
import Markit from './Markit';
import Wallet from './Wallet';
import Orders from './Orders';
import SocialScreen from './SocialScreen';
import backgroundImage from '../assets/ico.png';
const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <LinearGradient
            colors={['#00162A', '#00162A']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
        >
            <Tab.Navigator
                  initialRouteName="forex"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#00162A',
                    },
                    tabBarStyle: {
                        elevation: 0,
                        paddingBottom: 5,
                        backgroundColor: '#00162A',
                        height: 60,
                        borderTopWidth: 0.3,
                        borderColor: "#00162A",
                    },
                    tabBarActiveTintColor: '#FE238C',
                })}>
                <Tab.Screen name="Markit" component={Markit}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <ImageBackground
                                    source={backgroundImage}
                                    style={styles.backgroundImage}
                                    resizeMode="cover"
                                >
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <MaterialIcons name="candlestick-chart" style={focused ? styles.Activaddbtn : styles.addbtn} />
                                        <Text style={focused ? styles.activeTabLabel : styles.tabLabel}>Markit</Text>
                                    </View>
                                </ImageBackground>
                            ) : (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <MaterialIcons name="candlestick-chart" style={focused ? styles.Activaddbtn : styles.addbtn} />
                                    <Text style={focused ? styles.activeTabLabel : styles.tabLabel}>Markit</Text>
                                </View>
                            ),
                    }}
                />

                <Tab.Screen name="Wallet" component={Wallet}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <ImageBackground
                                    source={backgroundImage}
                                    style={styles.backgroundImage}
                                    resizeMode="cover"
                                >
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Ionicons name="wallet-outline" style={focused ? styles.Activaddbtn : styles.addbtn} />
                                        <Text style={focused ? styles.activeTabLabel : styles.tabLabel}>Wallet</Text>
                                    </View>
                                </ImageBackground>
                            ) : (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Ionicons name="wallet-outline" style={focused ? styles.Activaddbtn : styles.addbtn} />
                                    <Text style={focused ? styles.activeTabLabel : styles.tabLabel}>Wallet</Text>
                                </View>
                            ),
                    }}
                />

                <Tab.Screen name="forex" component={Forex}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <ImageBackground
                                    source={backgroundImage}
                                    style={styles.backgroundImage}
                                    resizeMode="cover"
                                >
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Ionicons name="home-outline" style={focused ? styles.Activaddbtn : styles.addbtn} />
                                        <Text style={focused ? styles.activeTabLabel : styles.tabLabel}>Home</Text>
                                    </View>
                                </ImageBackground>
                            ) : (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Ionicons name="home-outline" style={focused ? styles.Activaddbtn : styles.addbtn} />
                                    <Text style={focused ? styles.activeTabLabel : styles.tabLabel}>Home</Text>
                                </View>
                            ),
                    }}
                />


                <Tab.Screen name="SocialS" component={SocialScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <ImageBackground
                                    source={backgroundImage}
                                    style={styles.backgroundImage}
                                    resizeMode="cover"
                                >
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Ionicon name="users" style={focused ? styles.Activaddbtn : styles.addbtn} />
                                        <Text style={focused ? styles.activeTabLabel : styles.tabLabel}>Social</Text>
                                    </View>
                                </ImageBackground>
                            ) : (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Ionicon name="users" style={focused ? styles.Activaddbtn : styles.addbtn} />
                                    <Text style={focused ? styles.activeTabLabel : styles.tabLabel}>Social</Text>
                                </View>
                            ),
                    }}
                />


                <Tab.Screen
                    name="Orders"
                    component={Orders}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <ImageBackground
                                    source={backgroundImage}
                                    style={styles.backgroundImage}
                                    resizeMode="cover"
                                >
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={[styles.tabShortcut, focused ? styles.activeTabShortcut : {}]}>
                                            <Iconorder name="list-ordered" style={focused ? styles.Activaddbtn : styles.addbtn} />
                                        </View>
                                        <Text style={focused ? styles.activeTabLabel : styles.tabLabel}>Orders</Text>
                                    </View>
                                </ImageBackground>
                            ) : (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Iconorder name="list-ordered" style={focused ? styles.Activaddbtn : styles.addbtn} />
                                    <Text style={focused ? styles.activeTabLabel : styles.tabLabel}>Orders</Text>
                                </View>
                            ),
                    }}
                />

            </Tab.Navigator>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    },
    addbtn: {
        color: '#48E3FF',
        width: 37,
        height: 37,
        position: 'relative',
        borderRadius: 50,
        borderColor: '#00162A',
        borderWidth: 1,
        padding: 2,
        color: '#48E3FF',
        textAlign: 'center',
        paddingTop: 9,
        fontSize: 24
    },

    Activaddbtn: {
        width: 40,
        height: 40,
        position: 'relative',
        backgroundColor: '#00162A',
        borderRadius: 50,
        borderColor: '#48E3FF',
        borderWidth: 1,
        padding: 4,
        color: '#48E3FF',
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 7,
        fontSize: 25,
        top: 8
    },

    tabLabel: {
        color: '#56A6F1',
        fontSize: 11,
        justifyContent: 'center'
    },
    activeTabLabel: {
        color: '#48E3FF',
        textAlign: 'center',
        fontSize: 11,
        top: 20,
    },
    icon: {
        textAlign: 'center'
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        top: -22,
        width: '100%'

    },

});
export default Tabs;