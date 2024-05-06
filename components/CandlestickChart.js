import React from 'react';
import { VictoryChart, VictoryCandlestick, VictoryLabel } from 'victory-native';
import { View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BarChart from './BarChart';

const CandlestickChart = ({ data }) => {
    const highs = data.map(item => item.high);
    const lows = data.map(item => item.low);
    const times = data.map(item => item.time);

    return (

        <View style={styles.container}>
            <VictoryChart
                domain={{ x: [0, data.length - 1], y: [Math.min(...lows), Math.max(...highs)] }}
                scale={{ x: 'time' }}
                padding={{ top: 20, bottom: 50, left: 50, right: 50 }}
                tickValues={times}
                tickFormat={(x) => new Date(x).toLocaleDateString()}
                height={260}
            >
                <VictoryCandlestick
                    candleWidth={10}
                    standalone={false}
                    data={data}
                    candleColors={{ positive: '#02C173', negative: '#E11A38' }}
                />
            </VictoryChart>
            <BarChart/>
        </View>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#001020"
    },
});

export default CandlestickChart;
