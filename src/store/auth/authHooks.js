import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectHasSeenOnboarding } from './authSlice';

export function useHasSeenOnboarding() {
  const hasSeenOnboarding = useSelector(selectHasSeenOnboarding);
  return useMemo(() => hasSeenOnboarding, [hasSeenOnboarding]);
}

export function useCurrentUser() {
  const user = useSelector(selectCurrentUser);
  return useMemo(() => user, [user]);
}
