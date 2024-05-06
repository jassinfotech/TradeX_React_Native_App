import React, { useState, useEffect } from 'react';
const axios = require('axios').default;
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, ImageBackground, TextInput, FlatList } from 'react-native';
import Icons from 'react-native-vector-icons/Octicons';
import Iconss from 'react-native-vector-icons/AntDesign';
import { useTheme } from '../ThemeProvider';
const TradeHistory = ({ navigation }) => {
    const theme = useTheme();
    const toggleTheme = () => {
        theme.toggleTheme();
    }
    return (<View style={{ marginBottom: 20 }}>
        <View style={[styles.card, { backgroundColor: theme.isDarkMode ? '#B2D8FC' : '#00162A' }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 1 }}>
                <Text style={[styles.text_view1, { color: theme.colors.text }]}>Profit: </Text>
                <Text style={[styles.text_view2, { borderColor: theme.isDarkMode ? '#000' : '#ddd' }]}>  </Text>
                <Text style={[styles.text_view3, { color: theme.colors.text }]}>5756.50 </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 1 }}>
                <Text style={[styles.text_view1, { color: theme.colors.text }]}>Deposit: </Text>
                <Text style={[styles.text_view2, { borderColor: theme.isDarkMode ? '#000' : '#ddd' }]}>  </Text>
                <Text style={[styles.text_view3, { color: theme.colors.text }]}>0.00</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 1 }}>
                <Text style={[styles.text_view1, { color: theme.colors.text }]}>Swap: </Text>
                <Text style={[styles.text_view2, { borderColor: theme.isDarkMode ? '#000' : '#ddd' }]}> </Text>
                <Text style={[styles.text_view3, { color: theme.colors.text }]}>-317.52</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 1 }}>
                <Text style={[styles.text_view1, { color: theme.colors.text }]}>Commission: </Text>
                <Text style={[styles.text_view2, { borderColor: theme.isDarkMode ? '#000' : '#ddd' }]}> </Text>
                <Text style={[styles.text_view3, { color: theme.colors.text }]}>0.00</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 1 }}>
                <Text style={[styles.text_view1, { color: theme.colors.text }]}>Balance:</Text>
                <Text style={[styles.text_view2, { borderColor: theme.isDarkMode ? '#000' : '#ddd' }]}>  </Text>
                <Text style={[styles.text_view3, { color: theme.colors.text }]}>5250.90</Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 }}>
            <View><Text style={{ fontSize: 20, color: theme.colors.text }}>Trade History</Text></View>
            <View>
                <TouchableOpacity style={[styles.filter, { borderColor: theme.isDarkMode ? '#000' : '#0AD0F4' }]} >
                    <Text style={{ color: theme.isDarkMode ? '#000' : '#48E3FF', paddingRight: 10 }}> Filter </Text>
                    <Icons name="filter" style={{ color: theme.isDarkMode ? '#000' : '#48E3FF', paddingTop: 3 }} size={14} />
                </TouchableOpacity>

            </View>

        </View>

        <View style={[styles.textbox, { backgroundColor: theme.isDarkMode ? '#B2D8FC' : '#00162A' }]}>
            <View style={{ paddingTop: 4 }}>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 400 }}>DHDI  <Text style={{ color: '#0EA140', fontSize: 14, fontWeight: 300 }}>BUY 0.10</Text></Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>4 528.8   </Text>
                    <Text style={{ paddingTop: 2 }}><Iconss name="arrowright" size={15} style={{ color: theme.colors.text }} />  </Text>
                    <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>4 528.8 </Text>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: theme.colors.text, fontSize: 12, fontWeight: 400 }}>17:58</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>08.11.2023</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: '#FD005C', paddingTop: 4 }}>- 28.50</Text>
            </View>

        </View>
        <View style={[styles.textbox, { backgroundColor: theme.isDarkMode ? '#B2D8FC' : '#00162A' }]}>
            <View style={{ paddingTop: 4 }}>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 400 }}>DHDI  <Text style={{ color: '#FD005C', fontSize: 14, fontWeight: 300 }}>Sell 0.10</Text></Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>4 528.8   </Text>
                    <Text style={{ paddingTop: 2 }}><Iconss name="arrowright" style={{ color: theme.colors.text }} size={15} />  </Text>
                    <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>4 528.8 </Text>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: theme.colors.text, fontSize: 12, fontWeight: 400 }}>17:58</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>08.11.2023</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: '#FD005C', paddingTop: 4 }}>- 28.50</Text>
            </View>

        </View>
        <View style={[styles.textbox, { backgroundColor: theme.isDarkMode ? '#B2D8FC' : '#00162A' }]}>
            <View style={{ paddingTop: 4 }}>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 400 }}>DHDI  <Text style={{ color: '#0EA140', fontSize: 14, fontWeight: 300 }}>BUY 0.10</Text></Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>4 528.8   </Text>
                    <Text style={{ paddingTop: 2 }}><Iconss name="arrowright" size={15} style={{ color: theme.colors.text }} />  </Text>
                    <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>4 528.8 </Text>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: theme.colors.text, fontSize: 12, fontWeight: 400 }}>17:58</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>08.11.2023</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: '#FD005C', paddingTop: 4 }}>- 28.50</Text>
            </View>

        </View>
        <View style={[styles.textbox, { backgroundColor: theme.isDarkMode ? '#B2D8FC' : '#00162A' }]}>
            <View style={{ paddingTop: 4 }}>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 400 }}>DHDI  <Text style={{ color: '#FD005C', fontSize: 14, fontWeight: 300 }}>Sell 0.10</Text></Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>4 528.8   </Text>
                    <Text style={{ paddingTop: 2 }}><Iconss name="arrowright" style={{ color: theme.colors.text }} size={15} />  </Text>
                    <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>4 528.8 </Text>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: theme.colors.text, fontSize: 12, fontWeight: 400 }}>17:58</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>08.11.2023</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: '#FD005C', paddingTop: 4 }}>- 28.50</Text>
            </View>

        </View>
        <View style={[styles.textbox, { backgroundColor: theme.isDarkMode ? '#B2D8FC' : '#00162A' }]}>
            <View style={{ paddingTop: 4 }}>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 400 }}>DHDI  <Text style={{ color: '#0EA140', fontSize: 14, fontWeight: 300 }}>BUY 0.10</Text></Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>4 528.8   </Text>
                    <Text style={{ paddingTop: 2 }}><Iconss name="arrowright" size={15} style={{ color: theme.colors.text }} />  </Text>
                    <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>4 528.8 </Text>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: theme.colors.text, fontSize: 12, fontWeight: 400 }}>17:58</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>08.11.2023</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: '#FD005C', paddingTop: 4 }}>- 28.50</Text>
            </View>

        </View>
        <View style={[styles.textbox, { backgroundColor: theme.isDarkMode ? '#B2D8FC' : '#00162A' }]}>
            <View style={{ paddingTop: 4 }}>
                <Text style={{ color: theme.colors.text, fontSize: 16, fontWeight: 400 }}>DHDI  <Text style={{ color: '#FD005C', fontSize: 14, fontWeight: 300 }}>Sell 0.10</Text></Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>4 528.8   </Text>
                    <Text style={{ paddingTop: 2 }}><Iconss name="arrowright" style={{ color: theme.colors.text }} size={15} />  </Text>
                    <Text style={{ fontSize: 10, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>4 528.8 </Text>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ color: theme.colors.text, fontSize: 12, fontWeight: 400 }}>17:58</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: theme.colors.text, paddingTop: 4 }}>08.11.2023</Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: '#FD005C', paddingTop: 4 }}>- 28.50</Text>
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
        borderRadius: 6,
        padding: 10,
        margin: 16
    },
    text_view1: {
        width: '25%',

    },
    text_view2: {
        width: '50%',
        borderTopWidth: 1,
        borderColor: '#ddd',
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
        borderColor: "#48E3FF",
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    textbox: {
        flexDirection: 'row',
        marginHorizontal: 14,
        paddingVertical: 11,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'space-between'
    }
})

export default TradeHistory