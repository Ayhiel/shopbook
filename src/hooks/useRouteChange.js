// useRouteChange.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useRouteChange = (setShowSearch) => {
  const location = useLocation();

  useEffect(() => {
    // Show SearchComponent on route change
    setShowSearch(false);
  }, [location, setShowSearch]);
};
