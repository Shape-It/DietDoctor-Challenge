import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Welcome.styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NAVIGATION } from '@/constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '@/components';
import { colors } from '@/theme';
import LinearGradient from 'react-native-linear-gradient';

const gradientColors = [
  'transparent',
  'rgba(0, 0, 0, 0.5)',
  'rgba(0, 0, 0, 0.7)',
  'rgba(0, 0, 0, 0.8)',
  'rgba(0, 0, 0, 0.9)',
  'rgba(0, 0, 0, 1)',
];

const strings = {
  signup: 'Sign up and try it for free',
  login: 'Already a member? Log in',
  skip: 'Skip for now',
};

export function Welcome(): JSX.Element {
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleSignup = () => {
    navigate(NAVIGATION.login);
  };

  return (
    <>
      <ImageBackground
        style={styles.container}
        source={require('@/assets/background/welcome.png')}
        resizeMode="cover"
      >
        <Button
          title={'English'}
          onPress={handleSignup}
          style={[styles.button, styles.languageButton]}
        />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={gradientColors}
          style={styles.gradient}
        />
        <View style={styles.buttonsContainer}>
          <Button
            title={strings.signup}
            onPress={handleSignup}
            style={[styles.button, styles.signupButton]}
          />
          <Button
            title={strings.login}
            onPress={handleSignup}
            style={[styles.button, styles.loginButton]}
          />
          <Button
            title={strings.skip}
            onPress={handleSignup}
            style={[styles.button, styles.skipButton]}
          />
        </View>
      </ImageBackground>
    </>
  );
}
