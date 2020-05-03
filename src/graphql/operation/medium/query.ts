import { useQuery } from '@apollo/client';

import { MEDIUMS } from './shape';
import { MediumsQuery_mediums } from './types/MediumsQuery';

export const useMediumsQuery = () => {
  return useQuery<{ mediums: [MediumsQuery_mediums] }>(MEDIUMS);
};
