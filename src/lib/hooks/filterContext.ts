import { createContext } from 'react';
import { OptionProps } from '../../types';

interface FilterContextState {
    filterValue: OptionProps | undefined,
    setFilterValue: any | undefined,
    handleSubmitFilter: (newVal: OptionProps) => void,
    handleClearFilter: () => void,
    filterView: boolean
}

export const FilterContext = createContext<FilterContextState | undefined>(undefined);