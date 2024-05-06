import React from 'react';
import { View, ActivityIndicator, StyleSheet,Text } from 'react-native';

const Loader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Trade<Text style={styles.exTitle}>X</Text></Text>
            <ActivityIndicator size="large" color="#48E3FF" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#001020"
    },
    sectionTitle: {
        fontSize: 45,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#48E3FF",
    },
    exTitle: {
        fontSize: 58,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#48E3FF",
    },
});

export default Loader;
