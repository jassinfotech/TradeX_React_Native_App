import React from 'react';
import { View } from 'react-native';
import { VictoryBar } from 'victory-native';


const BarChart = ({ data }) => {
    return (
        <View style={{ height: 50, }}>
            <VictoryBar
            />
        </View>
    );
};

export default BarChart;
