import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectIsLogged } from './authSlice';

export function useIsLogged() {
  const isLogged = useSelector(selectIsLogged);
  return useMemo(() => isLogged, [isLogged]);
}

export function useCurrentUser() {
  const { user } = useSelector(selectCurrentUser);
  return useMemo(() => user, [user]);
}
