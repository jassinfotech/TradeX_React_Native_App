import React, { useState, useEffect } from 'react';
const axios = require('axios').default;
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, ImageBackground, TextInput, FlatList } from 'react-native';
import Icons from 'react-native-vector-icons/Octicons';
import { useTheme } from '../ThemeProvider';

const OpenOrders = () => {

    const theme = useTheme();

    return (<View style={{ marginBottom: 20 }}>
        <View style={[styles.card, { backgroundColor: theme.isDarkMode ? '#A0CFFA' : '#00162A' }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 1 }}>
                <Text style={[styles.text_view1, { color: theme.colors.text }]}>Balance </Text>
                <Text style={[styles.text_view2, { borderColor: theme.isDarkMode ? '#000' : '#ddd' }]}>  </Text>
                <Text style={[styles.text_view3, { color: theme.colors.text }]}>5756.50 </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 1 }}>
                <Text style={[styles.text_view1, { color: theme.colors.text }]}>Equity: </Text>
                <Text style={[styles.text_view2, { borderColor: theme.isDarkMode ? '#000' : '#ddd' }]}>  </Text>
                <Text style={[styles.text_view3, { color: theme.colors.text }]}>0.00</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 1 }}>
                <Text style={[styles.text_view1, { color: theme.colors.text }]}>Margin: </Text>
                <Text style={[styles.text_view2, { borderColor: theme.isDarkMode ? '#000' : '#ddd' }]}> </Text>
                <Text style={[styles.text_view3, { color: theme.colors.text }]}>-317.52</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 1 }}>
                <Text style={[styles.text_view1, { color: theme.colors.text }]}>Free Margin: </Text>
                <Text style={[styles.text_view2, { borderColor: theme.isDarkMode ? '#000' : '#ddd' }]}> </Text>
                <Text style={[styles.text_view3, { color: theme.colors.text }]}>0.00</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 1 }}>
                <Text style={[styles.text_view1, { color: theme.colors.text }]}>Margin Level: </Text>
                <Text style={[styles.text_view2, { borderColor: theme.isDarkMode ? '#000' : '#ddd' }]}>  </Text>
                <Text style={[styles.text_view3, { color: theme.colors.text }]}>5250.90</Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 }}>
            <View><Text style={{ fontSize: 20, color: theme.colors.text }}>Open Orders</Text></View>
            <View>
                <TouchableOpacity style={[styles.filter, { borderColor: theme.isDarkMode ? '#000' : '#0AD0F4' }]} >
                    <Text style={{ color: theme.isDarkMode ? '#000' : '#48E3FF', paddingRight: 10 }}> Filter </Text>
                    <Icons name="filter" style={{ color: theme.isDarkMode ? '#000' : '#48E3FF', paddingTop: 3 }} size={14} />
                </TouchableOpacity>

            </View>

        </View>

        <View style={[styles.textbox, { backgroundColor: theme.isDarkMode ? '#B2D8FC' : '#00162A' }]}>
            <View>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 400 }}>Orders 381</Text>
                <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>2 Jan 2023</Text>
            </View>
            <View>
                <Text style={{ color: '#0EA140', fontSize: 14, fontWeight: 400 }}>Placed</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>$ 850</Text>
            </View>

        </View>

        <View style={[styles.textbox, { backgroundColor: theme.isDarkMode ? '#B2D8FC' : '#00162A' }]}>
            <View>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 400 }}>Orders 381</Text>
                <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>2 Jan 2023</Text>
            </View>
            <View>
                <Text style={{ color: '#0EA140', fontSize: 14, fontWeight: 400 }}>Placed</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>$ 850</Text>
            </View>

        </View>
        <View style={[styles.textbox, { backgroundColor: theme.isDarkMode ? '#B2D8FC' : '#00162A' }]}>
            <View>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 400 }}>Orders 381</Text>
                <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>2 Jan 2023</Text>
            </View>
            <View>
                <Text style={{ color: '#0EA140', fontSize: 14, fontWeight: 400 }}>Placed</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>$ 850</Text>
            </View>

        </View>
        <View style={[styles.textbox, { backgroundColor: theme.isDarkMode ? '#B2D8FC' : '#00162A' }]}>
            <View>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 400 }}>Orders 381</Text>
                <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>2 Jan 2023</Text>
            </View>
            <View>
                <Text style={{ color: '#0EA140', fontSize: 14, fontWeight: 400 }}>Placed</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>$ 850</Text>
            </View>

        </View>
        <View style={[styles.textbox, { backgroundColor: theme.isDarkMode ? '#B2D8FC' : '#00162A' }]}>
            <View>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 400 }}>Orders 381</Text>
                <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>2 Jan 2023</Text>
            </View>
            <View>
                <Text style={{ color: '#0EA140', fontSize: 14, fontWeight: 400 }}>Placed</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>$ 850</Text>
            </View>

        </View>
        <View style={[styles.textbox, { backgroundColor: theme.isDarkMode ? '#B2D8FC' : '#00162A' }]}>
            <View>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 400 }}>Orders 381</Text>
                <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>2 Jan 2023</Text>
            </View>
            <View>
                <Text style={{ color: '#0EA140', fontSize: 14, fontWeight: 400 }}>Placed</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>$ 850</Text>
            </View>

        </View>
        <View style={[styles.textbox, { backgroundColor: theme.isDarkMode ? '#B2D8FC' : '#00162A' }]}>
            <View>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 400 }}>Orders 381</Text>
                <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>2 Jan 2023</Text>
            </View>
            <View>
                <Text style={{ color: '#0EA140', fontSize: 14, fontWeight: 400 }}>Placed</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>$ 850</Text>
            </View>

        </View>
    </View>
    );
};

const styles = StyleSheet.create({

    text_colr: {
        color: "#fff",
    },
    card: {
        borderRadius: 7,
        padding: 10,
        margin: 16
    },
    text_view1: {
        width: '25%',

    },
    text_view2: {
        width: '50%',
        borderTopWidth: 1,
        borderStyle: 'dashed',
        marginTop: 10
    },
    text_view3: {
        width: '20%',

        textAlign: 'right'
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    textbox: {
        flexDirection: 'row',
        marginHorizontal: 14,
        paddingVertical: 13,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'space-between'
    }
})

export default OpenOrders