import { useState } from 'react';
import Cookies, { CookieSetOptions } from 'universal-cookie';

export enum CookieName {
  SESSION_ID = 'lsid',
}

/**
 * Return all cookie values
 */
export const useCookies = () => {
  const cookies = new Cookies();
  return { cookies: cookies.getAll() };
};

/**
 * Return 1 cookie value
 * @param key Cookie name
 * @param options Options for cookie
 */
export const useCookie = (key: CookieName, options?: CookieSetOptions) => {
  const cookies = new Cookies();

  const [cookie, setCookieValue] = useState(() => {
    if (cookies.get(key)) {
      return cookies.get(key);
    }
    return null;
  });

  const setCookie = (value) => {
    setCookieValue(value);
    cookies.set(key, value, options);
  };

  const removeCookie = () => {
    cookies.remove(key, options);
  };

  return { cookie, setCookie, removeCookie };
};
