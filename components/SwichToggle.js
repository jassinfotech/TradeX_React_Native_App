import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Feather';
const SwichToggle = ({ onValueChange }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const handleToggle = () => {
        const newValue = !isEnabled;
        setIsEnabled(newValue);
        onValueChange(newValue);
    };
    return (
            <TouchableOpacity  onPress={handleToggle}>
                <View style={[styles.toggleContainer, isEnabled ? styles.activeToggle : styles.inactiveToggle]}>
                    <View style={[styles.toggleBall, isEnabled ? styles.activeBall : styles.inactiveBall]}>
                        <Text style={{ paddingTop: 3 , backgroundColor: isEnabled ? "#fff" : "#001020", overflow:'hidden', width:26, height:26, borderRadius:50, textAlign:"center", borderWidth:1, borderColor:"#48E3FF" }}>
                            {isEnabled ? <Ionicons name='sun' color="#48E3FF" size={19} /> : <Ionicons name='sun' color="#48E3FF" size={19} />}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    switchContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    switchText: {
        fontSize: 18,
        color: '#48E3FF',
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
    activeBall: {
        transform: [{ translateX: 48 }],

    },
    inactiveBall: {
        transform: [{ translateX: 2 }],
    },
   
});

export default SwichToggle;
