import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({ title, onPress, style, disabled }) => {
  return (
    <LinearGradient
      colors={['#48E3FF','#56A6F1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.buttonContainer, style, disabled && styles.disabledButton]}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        disabled={disabled}
      >
        {disabled ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 15,
    marginTop: 10,
    width:"100%",
  },
  button: {
    padding: 14,
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: '#000',
    fontSize: 23,
    textTransform: 'capitalize',
    fontWeight:'500'
  },
  disabledButton: {
    opacity: 0.7, 
  },
});

export default CustomButton;
