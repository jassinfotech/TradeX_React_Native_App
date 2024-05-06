import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './components/SignUp';
import HomeScreen from './components/HomeScreen';
import SignIn from './components/SignIn';
import Tabs from './components/tabs';
import Settings from './components/Settings';
import News from './components/News';
import { ThemeProvider, useTheme } from './ThemeProvider';
import Loader from './components/Loader';
import ProfileScreen from './components/ProfileScreen';
const Stack = createNativeStackNavigator();
function Navigators() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',

      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <StatusBar barStyle={theme.isDarkMode ? 'dark-content' : 'light-content'} animated={true} translucent={true} backgroundColor="transparent" />
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#00101F' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="Main" component={MainStackNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainStackNavigator() {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        setToken(storedToken);
      } catch (error) {
        console.error('Error retrieving token:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  if (isLoading) {
    return <Loader/>; 
  }

  return (
    <Stack.Navigator initialRouteName={token ? "forex" : "HomeScreen"} screenOptions={{ headerShown: false }}>
      {token ? (
        <Stack.Screen name="forex" component={TabNavigator} />
      ) : (
        <Stack.Screen name="HomeScreen" component={Navigators} />
      )}
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
}
export default App;
