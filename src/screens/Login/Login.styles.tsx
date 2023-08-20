import { colors, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: spacing.xs,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.s,
  },
});
