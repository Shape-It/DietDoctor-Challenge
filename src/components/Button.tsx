import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, spacing } from '@/theme';
import { normalize } from '@/utils';

interface Button {
  title: string;
  onPress: any;
  style?: Array<any>;
}

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    fontSize: normalize(16),
    color: colors.white,
    fontWeight: '500',
  },
});

export const Button: React.FC<Button> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
