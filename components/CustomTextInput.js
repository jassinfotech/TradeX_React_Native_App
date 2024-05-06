import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Feather';

const CustomTextInput = ({ value, onChangeText, secureTextEntry, error, keyboardType, placeholder, icon, isPassword }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };
    return (
        <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
                <Ionicons name={icon} size={20} color="#999" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isPassword && hidePassword}
                    keyboardType={keyboardType || 'default'}
                    placeholder={placeholder}
                    placeholderTextColor={'#999'}
                />
                {isPassword && (
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
                        <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={20} color="#999" />
                    </TouchableOpacity>
                )}
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 15,
        marginBottom: 5,
        color: '#fff',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#4DDBFB',
     
    },
    input: {
        flex: 1,
        padding: 12,
        color: '#ddd',
    },
    icon: {
        padding: 10,
        paddingRight:0,
    },
    toggleButton: {
        padding: 10,
        
    },
    error: {
        color: 'red',
    },
});

export default CustomTextInput;



// const styles = StyleSheet.create({
//     inputContainer: {
//         marginBottom: 20,
//     },
//     label: {
//         fontSize: 15,
//         marginBottom: 5,
//         color: '#fff',
//     },
//     inputWrapper: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderRadius: 6,
//         padding:2
        
//     },
//     input: {
//         flex: 1,
//         padding: 12,
//         color: '#ddd',
//         backgroundColor: '#272C35',
        
//     },
//     icon: {
//         padding: 16,
//         paddingRight:0,
//         backgroundColor: '#272C35',
//     },
//     toggleButton: {
//         padding: 15.8,
//         backgroundColor: '#272C35',
        
//     },
//     error: {
//         color: 'red',
//     },
// });