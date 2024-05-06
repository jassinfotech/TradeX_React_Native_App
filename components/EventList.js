import React, { useState, useEffect } from 'react';
const axios = require('axios').default;
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../ThemeProvider';
const EventList = () => {
    const theme = useTheme();
    return (
        <View style={{ marginTop: 50 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 20 }}>
                <View style={{ width: '17%', alignItems: "flex-start" }}>
                    <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , }}>Date</Text>
                </View>
                <View style={{ width: '15%', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>Time</Text>
                </View>
                <View style={{ width: '17%', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>Currency</Text>
                </View>
                <View style={{ width: '15%', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>Details</Text>
                </View>
                <View style={{ width: '15%', alignItems: 'flex-start'  }}>
                    <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>Fore cast</Text>
                </View>
                <View style={{ width: '20%',alignItems: 'flex-start'  }}>
                    <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>Previ ous</Text>
                </View>
            </View>

            <View style={{  backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', paddingVertical: 20, marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>09/11/2023 </Text>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , }}>Tuesday</Text>
                    </View>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , justifyContent: 'center' }}>10:00am</Text>
                    </View>
                    <View style={{ width: '15%', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ alignItems: 'center', marginRight:5}}>
                            <Text style={{ paddingTop: 5 }}><Iconss size={14} name="dollar" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>Name</Text>
                            <Text style={{ fontSize: 8, fontWeight: 400, color: theme.colors.text  }}>Description</Text>
                        </View>
                    </View>
                    <View style={{ width: '10%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Icons size={14} name="text-box-outline" style={{color: theme.colors.text }} /> </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '15%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>2.8%</Text>
                    </View>
                    <View style={{ width: '10%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>-70%</Text>
                    </View>
                    <View style={{ width: '5%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Iconss size={14} name="share" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{  backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', paddingVertical: 20, marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>09/11/2023 </Text>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , }}>Tuesday</Text>
                    </View>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , justifyContent: 'center' }}>10:00am</Text>
                    </View>
                    <View style={{ width: '15%', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ alignItems: 'center', marginRight:5}}>
                            <Text style={{ paddingTop: 5 }}><Iconss size={14} name="dollar" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>Name</Text>
                            <Text style={{ fontSize: 8, fontWeight: 400, color: theme.colors.text  }}>Description</Text>
                        </View>
                    </View>
                    <View style={{ width: '10%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Icons size={14} name="text-box-outline" style={{color: theme.colors.text }} /> </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '15%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>2.8%</Text>
                    </View>
                    <View style={{ width: '10%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>-70%</Text>
                    </View>
                    <View style={{ width: '5%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Iconss size={14} name="share" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{  backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', paddingVertical: 20, marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>09/11/2023 </Text>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , }}>Tuesday</Text>
                    </View>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , justifyContent: 'center' }}>10:00am</Text>
                    </View>
                    <View style={{ width: '15%', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ alignItems: 'center', marginRight:5}}>
                            <Text style={{ paddingTop: 5 }}><Iconss size={14} name="dollar" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>Name</Text>
                            <Text style={{ fontSize: 8, fontWeight: 400, color: theme.colors.text  }}>Description</Text>
                        </View>
                    </View>
                    <View style={{ width: '10%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Icons size={14} name="text-box-outline" style={{color: theme.colors.text }} /> </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '15%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>2.8%</Text>
                    </View>
                    <View style={{ width: '10%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>-70%</Text>
                    </View>
                    <View style={{ width: '5%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Iconss size={14} name="share" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{  backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', paddingVertical: 20, marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>09/11/2023 </Text>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , }}>Tuesday</Text>
                    </View>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , justifyContent: 'center' }}>10:00am</Text>
                    </View>
                    <View style={{ width: '15%', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ alignItems: 'center', marginRight:5}}>
                            <Text style={{ paddingTop: 5 }}><Iconss size={14} name="dollar" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>Name</Text>
                            <Text style={{ fontSize: 8, fontWeight: 400, color: theme.colors.text  }}>Description</Text>
                        </View>
                    </View>
                    <View style={{ width: '10%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Icons size={14} name="text-box-outline" style={{color: theme.colors.text }} /> </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '15%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>2.8%</Text>
                    </View>
                    <View style={{ width: '10%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>-70%</Text>
                    </View>
                    <View style={{ width: '5%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Iconss size={14} name="share" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{  backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', paddingVertical: 20, marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>09/11/2023 </Text>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , }}>Tuesday</Text>
                    </View>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , justifyContent: 'center' }}>10:00am</Text>
                    </View>
                    <View style={{ width: '15%', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ alignItems: 'center', marginRight:5}}>
                            <Text style={{ paddingTop: 5 }}><Iconss size={14} name="dollar" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>Name</Text>
                            <Text style={{ fontSize: 8, fontWeight: 400, color: theme.colors.text  }}>Description</Text>
                        </View>
                    </View>
                    <View style={{ width: '10%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Icons size={14} name="text-box-outline" style={{color: theme.colors.text }} /> </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '15%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>2.8%</Text>
                    </View>
                    <View style={{ width: '10%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>-70%</Text>
                    </View>
                    <View style={{ width: '5%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Iconss size={14} name="share" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{  backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', paddingVertical: 20, marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>09/11/2023 </Text>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , }}>Tuesday</Text>
                    </View>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , justifyContent: 'center' }}>10:00am</Text>
                    </View>
                    <View style={{ width: '15%', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ alignItems: 'center', marginRight:5}}>
                            <Text style={{ paddingTop: 5 }}><Iconss size={14} name="dollar" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>Name</Text>
                            <Text style={{ fontSize: 8, fontWeight: 400, color: theme.colors.text  }}>Description</Text>
                        </View>
                    </View>
                    <View style={{ width: '10%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Icons size={14} name="text-box-outline" style={{color: theme.colors.text }} /> </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '15%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>2.8%</Text>
                    </View>
                    <View style={{ width: '10%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>-70%</Text>
                    </View>
                    <View style={{ width: '5%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Iconss size={14} name="share" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{  backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', paddingVertical: 20, marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>09/11/2023 </Text>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , }}>Tuesday</Text>
                    </View>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , justifyContent: 'center' }}>10:00am</Text>
                    </View>
                    <View style={{ width: '15%', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ alignItems: 'center', marginRight:5}}>
                            <Text style={{ paddingTop: 5 }}><Iconss size={14} name="dollar" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>Name</Text>
                            <Text style={{ fontSize: 8, fontWeight: 400, color: theme.colors.text  }}>Description</Text>
                        </View>
                    </View>
                    <View style={{ width: '10%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Icons size={14} name="text-box-outline" style={{color: theme.colors.text }} /> </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '15%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>2.8%</Text>
                    </View>
                    <View style={{ width: '10%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>-70%</Text>
                    </View>
                    <View style={{ width: '5%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Iconss size={14} name="share" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{  backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', paddingVertical: 20, marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>09/11/2023 </Text>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , }}>Tuesday</Text>
                    </View>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , justifyContent: 'center' }}>10:00am</Text>
                    </View>
                    <View style={{ width: '15%', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ alignItems: 'center', marginRight:5}}>
                            <Text style={{ paddingTop: 5 }}><Iconss size={14} name="dollar" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>Name</Text>
                            <Text style={{ fontSize: 8, fontWeight: 400, color: theme.colors.text  }}>Description</Text>
                        </View>
                    </View>
                    <View style={{ width: '10%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Icons size={14} name="text-box-outline" style={{color: theme.colors.text }} /> </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '15%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>2.8%</Text>
                    </View>
                    <View style={{ width: '10%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>-70%</Text>
                    </View>
                    <View style={{ width: '5%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Iconss size={14} name="share" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{  backgroundColor:theme.isDarkMode ?'#A0CFFA' :'#00162A', paddingVertical: 20, marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>09/11/2023 </Text>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , }}>Tuesday</Text>
                    </View>
                    <View style={{ width: '15%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text , justifyContent: 'center' }}>10:00am</Text>
                    </View>
                    <View style={{ width: '15%', flexDirection: 'row' }}>
                        <TouchableOpacity style={{ alignItems: 'center', marginRight:5}}>
                            <Text style={{ paddingTop: 5 }}><Iconss size={14} name="dollar" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>Name</Text>
                            <Text style={{ fontSize: 8, fontWeight: 400, color: theme.colors.text  }}>Description</Text>
                        </View>
                    </View>
                    <View style={{ width: '10%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Icons size={14} name="text-box-outline" style={{color: theme.colors.text }} /> </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '15%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>2.8%</Text>
                    </View>
                    <View style={{ width: '10%' }}>
                        <Text style={{ fontSize: 10, fontWeight: 600, color: theme.colors.text  }}>-70%</Text>
                    </View>
                    <View style={{ width: '5%' }}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text><Iconss size={14} name="share" style={{color: theme.colors.text }}  /> </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({


})
export default EventList