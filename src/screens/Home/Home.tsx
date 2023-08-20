import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Home.styles';
import { useDispatch } from 'react-redux';
import { authActions, useCurrentUser } from '@/store/auth';
import { Button } from '@/components';
import { colors } from '@/theme';

export function Home(): JSX.Element {
  const dispatch = useDispatch();
  const user = useCurrentUser();

  const handleLogout = () => {
    dispatch(authActions.clearCredentials());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{'Welcome'}</Text>
      <Text style={styles.text}>{user?.name}</Text>
      <Button title="Logout" onPress={handleLogout} color={colors.black} />
    </View>
  );
}
