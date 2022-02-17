import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.purple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 10,
    height: 50,
    paddingHorizontal: 20,
  },
  buttonTitle: {
    color: COLORS.white,
    fontWeight: '600',
  },
});

export default Button;
