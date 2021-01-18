import { useState } from 'react';

/**
 * Return states for searchbar
 */
export const useSearchBar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState<null | string>(null);

  /** Handle search */
  const onSearchChange = (e: any) => {
    if (!e.target.value) {
      setSearchTerm(null);
      return;
    }

    setSearchTerm(e.target.value);
    setIsSearchFocused(true);
  };

  const onSearchCancel = (e: any) => {
    setSearchTerm(null);
    setIsSearchFocused(false);
  };

  return {
    searchTerm,
    isSearchFocused,
    onSearchChange,
    onSearchCancel,
  };
};
