import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Feather';
import CustomButton from './CustomButton';
import SwichToggle from './SwichToggle';
import { useTheme } from '../ThemeProvider';
const HomeScreen = ({ navigation }) => {

    const theme = useTheme();
    const toggleTheme = () => {
        theme.toggleTheme();
    }

    const navigateToSettings = () => {
        navigation.navigate('SignIn');
    };

    const handleToggle = () => {
        setToggleValue(!toggleValue);
    };

    return (
        <View
            style={[styles.background, { backgroundColor: theme.colors.background }]}
        >
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Trade<Text style={styles.exTitle}>X</Text></Text>
                        <Text style={styles.sectionDescription}>
                            Feel the new experience of trading
                        </Text>
                    </View>
                    <View>
                        <SwichToggle onValueChange={toggleTheme} />
                    </View>
                    <View style={styles.ButtonContainter}>
                        <CustomButton title="Get Started" onPress={() => navigation.navigate('SignIn')} />
                    </View>
                </ScrollView>
            </SafeAreaView>
            <Image
                source={require('../assets/background.png')}
                style={styles.bottomImage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container:{
        position:'relative',
        zIndex:2

    },

    contentContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingBottom: 80,
    },
    section: {
        paddingHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonContainter: {
        width: "80%",
        marginTop: 30,
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
    sectionDescription: {
        fontSize: 20,
        color: '#56A6F1',
        fontWeight: '200',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    bottomImage: {
        width: '100%',
        height: 400,
        position: 'absolute',
        bottom: 0,
        zIndex:1
    },
});

export default HomeScreen;
