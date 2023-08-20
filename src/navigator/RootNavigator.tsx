import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { theme } from '@/theme';
import { handleReady, navigationRef } from '@/services';
import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';
import { useIsLogged } from '@/store/auth';

export function RootNavigator() {
  const isLogged = useIsLogged();

  return (
    <NavigationContainer theme={theme} onReady={handleReady} ref={navigationRef}>
      {isLogged ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
