import { StatsType } from '../../types/stats';

import data21 from './2021';
import data20 from './2020';

export default <StatsType>{
  editions: [
    {
      year: 2021,
      results: data21,
    },
    {
      year: 2020,
      results: data20,
    },
  ],
};