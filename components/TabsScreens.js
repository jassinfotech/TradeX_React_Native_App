import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const FroxComponent = () => {
    return (
        <View>
            <Text>Frox Content</Text>
        </View>
    );
};

const StackComponent = () => {
    return (
        <View>
            <Text>Stack Content</Text>
        </View>
    );
};

const CryptoComponent = () => {
    return (
        <View>
            <Text>Crypto Content</Text>
        </View>
    );
};

const MoreComponent = () => {
    return (
        <View>
            <Text>More Content</Text>
        </View>
    );
};

const TabsScreens = () => {
    const [selectedTab, setSelectedTab] = useState('Frox');
    const handleTabPress = (tabName) => {
        setSelectedTab(tabName);
    };
    const renderTabContent = () => {
        switch (selectedTab) {
            case 'Frox':
                return <FroxComponent />;
            case 'Stack':
                return <StackComponent />;
            case 'Crypto':
                return <CryptoComponent />;
            case 'More':
                return <MoreComponent />;
            default:
                return null;
        }
    };
    return (
        <View>
            <View style={styles.tabsContainer}>

                <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'Frox' && styles.activeTab]}
                    onPress={() => handleTabPress('Frox')}
                >
                    <Text style={styles.tabButtonText}>Frox</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'Stack' && styles.activeTab]}
                    onPress={() => handleTabPress('Stack')}
                >
                    <Text style={styles.tabButtonText}>Stack</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'Crypto' && styles.activeTab]}
                    onPress={() => handleTabPress('Crypto')}
                >
                    <Text style={styles.tabButtonText}>Crypto</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabButton, selectedTab === 'More' && styles.activeTab]}
                    onPress={() => handleTabPress('More')}
                >
                    <Text style={styles.tabButtonText}>More</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabContent}>
                {renderTabContent()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
    },
    tabButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#56A6F1',
    },
    activeTab: {
        backgroundColor: '#56A6F1',
    },
    tabButtonText: {
        color: '#56A6F1',
        fontWeight: 'bold',
    },
    tabContent: {
        flex: 1,
        padding: 20, 
    },
});
export default TabsScreens