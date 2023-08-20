import { colors, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.alpha200,
  },
  text: {
    textAlign: 'center',
    fontSize: spacing.l,
    fontWeight: 'bold',
  },
  gradient: {
    width: '100%',
    height: '50%',
    zIndex: 0,
    position: 'absolute',
    bottom: 0,
  },
  button: {
    zIndex: 1,
    paddingVertical: 12,
    borderRadius: 50,
    marginBottom: spacing.s,
  },
  signupButton: {
    backgroundColor: '#06B05B',
    borderColor: 'black',
    borderWidth: 0.2,
  },
  loginButton: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1.5,
  },
  skipButton: {
    backgroundColor: 'transparent',
    marginBottom: spacing.l,
  },
  buttonsContainer: {
    marginTop: 'auto',
    marginHorizontal: spacing.s,
  },
  languageButton: {
    marginTop: spacing.xl,
    marginHorizontal: 120,
    backgroundColor: '#656565',
  },
});
