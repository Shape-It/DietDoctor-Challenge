import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './Login.styles';
import { useDispatch } from 'react-redux';
import { authActions } from '@/store/auth';
import { Button } from '@/components';
import { colors } from '@/theme';

export function Login(): JSX.Element {
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = async () => {
    const user = { name: username, password: password };
    dispatch(authActions.login({ user }));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoComplete="email"
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        autoComplete="password"
        textContentType="password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      <Button title="Login" onPress={handleLogin} color={colors.alpha800} />
    </View>
  );
}
