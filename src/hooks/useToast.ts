import { useState } from 'react';

import { Color } from '../types/colors';

interface Toast {
  status: boolean;
  message: string;
  color: Color;
  duration: number;
  header?: string;
  position: 'bottom' | 'middle' | 'top';
}

export const useToast = (toast: Toast) => {
  return useState<Toast | null>(toast);
};
