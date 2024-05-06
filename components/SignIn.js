import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import RNRestart from 'react-native-restart';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './CustomButton';
import CustomTextInput from './CustomTextInput';
import { useTheme } from '../ThemeProvider';
import axios from 'axios'; // Import Axios
function SignIn({ navigation }) {
    const theme = useTheme();
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const handleTermsToggle = () => {
        setAcceptedTerms(!acceptedTerms);
    };
    const handleSubmit = async () => {
        setIsLoading(true);
        console.log('Username:', Username);
        console.log('Password:', password);
        const data = { username: Username, password: password };
        try {
            const response = await axios.post('https://newcopycoldrate.jksconsultants.com/login', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("response-----------------------", response.data.data)
            if (response.data.success === true) {
                setUsername('');
                setPassword('');
                await AsyncStorage.setItem('token', response.data.data)
                setIsLoading(false);
                RNRestart.Restart()
                navigation.navigate('forex');
            } else {
                ToastAndroid.show(response.data.message, ToastAndroid.LONG);

            }
        } catch (error) {
            console.error('Error:', error);
            ToastAndroid.show(response.data.message, ToastAndroid.LONG);
            setIsLoading(false);
        }
    };
    return (

        <View style={[styles.background, { backgroundColor: theme.colors.background }]} >
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Trade<Text style={styles.exTitle}>X</Text></Text>
                </View>
                <View style={{ paddingHorizontal: 24 }}>
                    <Text style={styles.headding}>Log In</Text>
                    <Text style={styles.subheadding}>Log In to continue</Text>
                </View>
                <View style={styles.sectionContainer}>
                    <CustomTextInput
                        value={Username}
                        onChangeText={(text) => setUsername(text)}
                        error={errors.Username}
                        icon={'user'}
                        placeholder={'Username'} />

                    <CustomTextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        error={errors.password}
                        icon={'key'}
                        placeholder={'Password'}
                        isPassword={true}
                    />
                    <View style={{ flexDirection: 'row', textAlign: 'flex-end', justifyContent: 'flex-end' }}>
                        <TouchableOpacity>
                            <Text style={[styles.forgotPasswordText, { color: theme.isDarkMode ? '#56A6F1' : '#48E3FF' }]}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.termsContainer}>
                        <TouchableOpacity
                            style={[styles.checkbox, acceptedTerms ? styles.checked : null, { borderColor: errors ? "#48E3FF" : '#48E3FF' }]}
                            onPress={handleTermsToggle}
                        >
                            {acceptedTerms && <Text style={styles.checkmark}>✓</Text>}
                        </TouchableOpacity>
                        <Text style={[styles.termsText, { color: theme.isDarkMode ? '#56A6F1' : '#48E3FF' }]}>
                            Remember me
                        </Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <CustomButton title="Log In" onPress={handleSubmit}
                            disabled={isLoading} >
                        </CustomButton>
                    </View>


                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={[styles.text_down, { color: theme.colors.text }]}>
                            Don’t have an account? <Text style={{ color: '#48E3FF' }}>Sign Up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image
                source={require('../assets/background.png')}
                style={styles.bottomImage}
            />
        </View>


    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 50,
        position: 'relative',
        zIndex: 2
    },
    sectionContainer: {
        marginVertical: 42,
        paddingHorizontal: 24,
    },

    errorText: {
        color: '#FE238C',
        marginBottom: 10,
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
    forgotPasswordText: {
        fontSize: 15,
        marginBottom: 10,

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
    showPasswordIcon: {
        padding: 10,
    },
    title: {
        fontSize: 27,
        marginBottom: 20,
        color: '#fff',
    },
    text_down: {
        color: "#fff",
        textAlign: "center",
        paddingTop: 20,
        fontSize: 16,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#56A6F1',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },

    checkmark: {
        color: '#56A6F1',
    },
    termsText: {
        color: '#fff',
        fontSize: 18,
    },
    bottomImage: {
        width: '100%',
        height: 400,
        position: 'absolute',
        bottom: 0,
        zIndex: 1
    },
    headding: {
        fontSize: 20,
        color: '#fff',

    },
    subheadding: {
        color: "#C5C5C5",
        fontSize: 14,
        paddingTop: 10,
    },
});

export default SignIn;
