import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

import ChevronDownIcon from '../assets/icons/ChevronDownIcon'
import CheckIcon from '../assets/icons/CheckIcon'

import { POKEMON_TYPES } from '../constants/dummy'

type OptionProps = {
    name: string,
    url: string
}

type ListDropdownProps = {
    options?: Array<OptionProps>,
    customIcon?: boolean,
    placeholder?: string
}

const ListDropdown = ({ options = POKEMON_TYPES, customIcon = false, placeholder = "Select" }: ListDropdownProps) => {
    const [selected, setSelected] = useState({ name: "placeholder" })

    return (
        <div>
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button 
                        className="
                            relative w-full cursor-pointer rounded-lg bg-white
                            py-2 pl-3 pr-10 text-left 
                            border-2 border-sky-700 
                            focus:outline-none
                            focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-1 focus-visible:ring-offset-sky-600 
                            sm:text-sm
                        "
                        placeholder='select'
                    >
                        <span className="block truncate">
                            {selected.name === "placeholder" ? placeholder : selected.name}
                        </span>
                        
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDownIcon
                                height='20'
                                width='20'
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="
                                absolute mt-1 max-h-52 
                                w-full overflow-auto rounded-md 
                                bg-white py-1 text-base shadow-lg 
                                ring-1 ring-black/5 focus:outline-none sm:text-sm z-50
                            "
                        >
                            {options.map((type, idx) => (
                                <Listbox.Option
                                    key={idx}
                                    className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            selected.name === type.name || active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={type}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                }`}
                                            >
                                                {type.name}
                                            </span>

                                            {   customIcon ?
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <img
                                                            src={`/src/assets/pokemon_types/${type.name}.svg`}
                                                            alt={`types-${idx}`}
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </span> :
                                                // DEFAULT ICON
                                                selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                      <CheckIcon height='20' width='20' aria-hidden="true" />
                                                    </span>
                                                ) : null
                                            }
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default ListDropdown