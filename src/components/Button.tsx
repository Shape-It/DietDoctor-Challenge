import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, spacing } from '@/theme';

interface Button {
  title: string;
  onPress: any;
  color: string;
}

const styles = StyleSheet.create({
  button: {
    marginVertical: spacing.xl,
    backgroundColor: colors.black,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.xs,
    borderRadius: spacing.xs,
  },
  buttonText: {
    fontSize: spacing.m,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export const Button: React.FC<Button> = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
