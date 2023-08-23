import { colors, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: spacing.l,
  },
  button: {
    justifyContent: 'flex-end',
    backgroundColor: colors.black,
    paddingVertical: spacing.s,
    borderRadius: 30,
  },
});
