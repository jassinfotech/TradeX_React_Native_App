import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, ImageBackground, TextInput, FlatList } from 'react-native';
import userImage from '../assets/Rectangle.png';
import Rectangle  from '../assets/Rectangle2.png';
import Rectangle3  from '../assets/Rectangle3.png';
import Rectangle4  from '../assets/Rectangle4.png';
import { useTheme } from '../ThemeProvider';


const ListNews = () => {
  const theme = useTheme();
  return (
    <View style={{ marginTop: 50 }}>
      <View style={{ flexDirection: 'row', marginHorizontal: 10, backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', borderRadius: 10, paddingHorizontal: 10,marginVertical:5 }}>
        <View style={{ margin: 5, marginTop:20 }}>
          <Image source={userImage} style={{ width: 100, height: 80, }} />
        </View>
        <View style={{ margin: 5, padding: 10 }}>
          <Text style={{ fontSize: 10, fontWeight: 300, color: theme.colors.text }}>3 hours ago</Text>
          <Text style={{ fontSize: 14, fontWeight: 700, color: theme.colors.text, marginTop: 2 }}>Audi stock drops</Text>
          <View style={{ marginRight: 60 }}>
            <Text style={{ fontSize: 12, color: theme.colors.text, fontWeight: 400, marginTop:3, marginRight: 15 }}>
              Pellentesque rutrum rutrum in ut tincidunt faucibus senectus. Id nisl amet vel amet d onec
            </Text>
          </View>
        </View>

      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 10,  backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', borderRadius: 10, paddingHorizontal: 10,marginVertical:5 }}>
        <View style={{ margin: 5, marginTop:20 }}>
          <Image source={Rectangle} style={{ width: 100, height: 80, }} />
        </View>
        <View style={{ margin: 5, padding: 10 }}>
          <Text style={{ fontSize: 10, fontWeight: 300, color: theme.colors.text }}>6 hours ago</Text>
          <Text style={{ fontSize: 14, fontWeight: 700, color: theme.colors.text, marginTop: 2 }}>Facebook stock drops</Text>
          <View style={{ marginRight: 60 }}>
            <Text style={{ fontSize: 12, color: theme.colors.text, fontWeight: 400, marginTop:3, marginRight: 15 }}>
              Pellentesque rutrum rutrum in ut tincidunt faucibus senectus. Id nisl amet vel amet donec
            </Text>
          </View>
        </View>

      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 10,  backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', borderRadius: 10, paddingHorizontal: 10,marginVertical:5 }}>
        <View style={{ margin: 5, marginTop:20 }}>
          <Image source={Rectangle3} style={{ width: 100, height: 80, }} />
        </View>
        <View style={{ margin: 5, padding: 10 }}>
          <Text style={{ fontSize: 10, fontWeight: 300, color: theme.colors.text }}>7 hours ago</Text>
          <Text style={{ fontSize: 14, fontWeight: 700, color: theme.colors.text, marginTop: 2 }}>Boost stock rises</Text>
          <View style={{ marginRight: 60 }}>
            <Text style={{ fontSize: 12, color: theme.colors.text, fontWeight: 400, marginTop:3, marginRight: 15 }}>
              Pellentesque rutrum rutrum in ut tincidunt faucibus senectus. Id nisl amet vel amet donec
            </Text>
          </View>
        </View>

      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 10,  backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', borderRadius: 10, paddingHorizontal: 10,marginVertical:5 }}>
        <View style={{ margin: 5, marginTop:20 }}>
          <Image source={Rectangle4} style={{ width: 100, height: 80, }} />
        </View>
        <View style={{ margin: 5, padding: 10 }}>
          <Text style={{ fontSize: 10, fontWeight: 300, color: theme.colors.text }}>10 hours ago</Text>
          <Text style={{ fontSize: 14, fontWeight: 700, color: theme.colors.text, marginTop: 2 }}>Amazon stock drops</Text>
          <View style={{ marginRight: 60 }}>
            <Text style={{ fontSize: 12, color: theme.colors.text, fontWeight: 400, marginTop:3, marginRight: 15 }}>
              Pellentesque rutrum rutrum in ut tincidunt faucibus senectus. Id nisl amet vel amet donec
            </Text>
          </View>
        </View>

      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 10,  backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', borderRadius: 10, paddingHorizontal: 10,marginVertical:5 }}>
        <View style={{ margin: 5, marginTop:20 }}>
          <Image source={userImage} style={{ width: 100, height: 80, }} />
        </View>
        <View style={{ margin: 5, padding: 10 }}>
          <Text style={{ fontSize: 10, fontWeight: 300,color: theme.colors.text }}>3 hours ago</Text>
          <Text style={{ fontSize: 14, fontWeight: 700, color: theme.colors.text, marginTop: 2 }}>Audi stock drops</Text>
          <View style={{ marginRight: 60 }}>
            <Text style={{ fontSize: 12,color: theme.colors.text, fontWeight: 400, marginTop:3, marginRight: 15 }}>
              Pellentesque rutrum rutrum in ut tincidunt faucibus senectus. Id nisl amet vel amet donec
            </Text>
          </View>
        </View>

      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 10,  backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', borderRadius: 10, paddingHorizontal: 10,marginVertical:5 }}>
        <View style={{ margin: 5, marginTop:20 }}>
          <Image source={Rectangle} style={{ width: 100, height: 80, }} />
        </View>
        <View style={{ margin: 5, padding: 10 }}>
          <Text style={{ fontSize: 10, fontWeight: 300,color: theme.colors.text }}>6 hours ago</Text>
          <Text style={{ fontSize: 14, fontWeight: 700, color: theme.colors.text, marginTop: 2 }}>Facebook stock drops</Text>
          <View style={{ marginRight: 60 }}>
            <Text style={{ fontSize: 12, color: theme.colors.text, fontWeight: 400, marginTop:3, marginRight: 15 }}>
              Pellentesque rutrum rutrum in ut tincidunt faucibus senectus. Id nisl amet vel amet donec
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({


})

export default ListNews