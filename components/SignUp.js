import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, View, ActivityIndicator, ImageBackground, Image } from 'react-native';
import { ToastAndroid } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from './CustomButton';
import CustomTextInput from './CustomTextInput';
import { useTheme } from '../ThemeProvider';





function SignUp({ navigation }) {
    const theme = useTheme();
    const toggleTheme = () => {
        theme.toggleTheme();
    }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleSubmit = async () => {
        if (!acceptedTerms) {

            return;
        }
    };
    const handleTermsToggle = () => {
        setAcceptedTerms(!acceptedTerms);
    };

    return (
        <ScrollView
        contentContainerStyle={[styles.background, { backgroundColor: theme.colors.background }]}
        keyboardShouldPersistTaps="handled"
    >
        
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Trade<Text style={styles.exTitle}>X</Text></Text>
                </View>
                <View style={{ paddingHorizontal: 24 }}>
                    <Text style={styles.headding}>Sign Up</Text>
                    <Text style={styles.subheadding}>Sign Up to continue</Text>
                </View>
                <View style={styles.sectionContainer}>
                    <CustomTextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        error={errors.name}
                        icon={'user'}
                        placeholder={'Your name'}
                    />

                    <CustomTextInput
                        value={email}
                        keyboardType="email-address"
                        onChangeText={(text) => setEmail(text)}
                        error={errors.email}
                        icon={'mail'}
                        placeholder={'Email address'}
                    />
                    <CustomTextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        error={errors.password}
                        icon={'key'}
                        placeholder={'Password'}
                        isPassword={true}
                    />
                    <CustomTextInput
                        value={cpassword}
                        onChangeText={(text) => setcPassword(text)}
                        secureTextEntry={true}
                        error={errors.cpassword}
                        icon={'key'}
                        placeholder={'Confirm password'}
                        isPassword={true}
                    />
                    <View style={styles.termsContainer}>
                        <TouchableOpacity
                            style={[styles.checkbox, acceptedTerms ? styles.checked : null, { borderColor: !errors ? "red" : "#48E3FF" }]}
                            onPress={handleTermsToggle}
                        >
                            {acceptedTerms && <Text style={styles.checkmark}>✓</Text>}
                        </TouchableOpacity>
                        <Text style={[styles.termsText, { color: theme.isDarkMode ? '#56A6F1' : '#48E3FF' }]}>
                            I accept all terms & conditions
                        </Text>
                    </View>


                    <View style={styles.uttonContainer}>
                        <CustomButton title="Sign Up" onPress={handleSubmit}
                            disabled={isLoading} >
                        </CustomButton>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={[styles.text_down, { color: theme.colors.text }]}>
                            Don’t have an account? <Text style={{ color: '#48E3FF' }}>Sign In</Text>
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
            <Image
                source={require('../assets/background.png')}
                style={styles.bottomImage}
            />
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        position: 'relative',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 30,
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
        borderColor: '#48E3FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checked: {
        backgroundColor: '#48E3FF',
    },
    checkmark: {
        color: '#fff',
    },
    termsText: {
        color: '#fff',
        fontSize: 16,
    },
    imageBackground: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        width: '100%',
        height: "40%",
    },
    image: {
        width: '100%',
        height: "40%",
        resizeMode: 'cover',
    },
    imageStyle: {
        opacity: 0.2,
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

export default SignUp;
