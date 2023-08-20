import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Welcome.styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '@/constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@/components';
import { colors } from '@/theme';

export function Welcome(): JSX.Element {
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shape It</Text>
      <Text style={styles.text}>RN Template</Text>
      <Button title="Start" onPress={() => navigate(NAVIGATION.login)} color={colors.alpha400} />
    </View>
  );
}
