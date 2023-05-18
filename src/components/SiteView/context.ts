import { createContext } from 'react';

import { ConfigContextType } from '../../data/types/context';

const ConfigContext = createContext<Partial<ConfigContextType>>({});

export default ConfigContext;