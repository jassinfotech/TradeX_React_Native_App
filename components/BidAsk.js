import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import Iconss from 'react-native-vector-icons/FontAwesome';
import Iconstar from 'react-native-vector-icons/AntDesign';
import WebSocket from 'react-native-websocket';
import { useTheme } from '../ThemeProvider';

function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}
const currency = [
    { id: 1, name: 'EURUSD', trending: 1 },
    { id: 2, name: 'GBPUSD', trending: 1 },
    { id: 3, name: 'AUDUSD', trending: 1 },
    { id: 4, name: 'USDJPY', trending: 1 },
    { id: 5, name: 'USDCHF', trending: 1 },
    { id: 6, name: 'EURGBP', trending: 0 },
    { id: 7, name: 'EURCHF', trending: 0 },
    { id: 8, name: 'GBPCHF', trending: 0 }
]
const BidAsk = ({ navigation }) => {
    const theme = useTheme();
    const [data, setData] = useState({
        'EURUSD': [], 'GBPUSD': [], 'AUDUSD': [], 'USDJPY': [], 'USDCHF': [], 'EURGBP': [],
        'EURCHF': [],
        'GBPCHF': [],
    })

    const handleData = (data2, currency) => {
        try {
            const parsedData = JSON.parse(data2);
            let nextData = { ...data }
            nextData[currency] = [parsedData, ...data[currency]]
            setData(nextData);

        } catch (error) {
        }
    };
    const throttleHandleData = throttle(handleData, 100)
console.log("data ------------", data)
    return (
        <View>
            <ScrollView>
                {currency.map((item) => <WebSocket
                    url={`wss://newcopycoldrate.jksconsultants.com/ws?symbol=${item.name}`}
                    onMessage={(event) => throttleHandleData(event.data, item.name)}
                    reconnect
                />
                )}

                <View>
                    <View style={styles.tabContent}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text><Iconss name="arrows-alt" size={20} style={{ color: theme.isDarkMode ? '#000' : '#0AD0F4' }} /></Text>
                        </TouchableOpacity>
                        <FlatList
                            style={{ marginBottom: 50 }}
                            data={currency.filter(item => data[item.name].length > 0).map(item => item.name)}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>
                                <View style={styles.flatviewcontianer}>
                                    <View style={{ width: "10%" }}>
                                        <Text style={{ paddingTop: 7 }}>
                                            <Iconstar name="staro" size={23} style={{ color: theme.isDarkMode ? '#000' : '#0AD0F4' }} />
                                        </Text>
                                    </View>


                                    <View style={{ width: "25%" }}>
                                        <Text style={[styles.name, { color: theme.colors.text }]} >{data[item][0].Symbol}</Text>
                                        <Text style={[styles.detials, { color: theme.colors.text }]}>{data[item][0].Datetime}</Text>
                                    </View>
                                    <View style={{ width: "20%", justifyContent: 'center' }}>
                                        <Text style={{ color: theme.colors.text }} >[ {data[item][0].Volume} ]</Text>
                                    </View>
                                    <View style={[styles.tradebtin, { width: "40%", flexDirection: "row", justifyContent: "space-between" }]}>
                                        <View style={{ justifyContent: 'flex-end' }}>
                                            <Text style={{ color: '#FD005C', fontSize: 14, fontWeight: '800' }}> {data[item][0].Bid}<Text style={{ color: '#FD005C', fontSize: 17, }}>{data[item][0].upPrices}</Text></Text>
                                            <Text style={{ color: theme.colors.text, fontSize: 13 }}>L : {data[item][0].Volume_ext}  </Text>
                                        </View>
                                        <View>
                                            <Text style={{ color: '#21E57B', fontSize: 14, fontWeight: '800' }}>{data[item][0].Ask}<Text style={{ color: '#21E57B', fontSize: 17, fontWeight: '800' }}>{data[item][0].downPrices}</Text></Text>
                                            <Text style={{ color: theme.colors.text, fontSize: 13 }}> H : {data[item][0].Last} </Text>
                                        </View>

                                    </View>
                                </View>}
                        />
                    </View>
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

export default BidAsk;
