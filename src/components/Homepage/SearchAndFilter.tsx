import { useContext, useState } from "react"

import FilterIcon from "../../assets/icons/FilterIcon"
import CloseIcon from "../../assets/icons/CloseIcon"

import { FilterContext } from "../../lib/hooks/filterContext"
import { INITIAL_FILTER_VAL, POKEMON_NATURES } from "../../constants/dummy"

import Button from "../Button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import ListDropdown from "../ListDropdown"

const SearchAndFilter = () => {
    const filterState = useContext(FilterContext)

    // const [isOpen, setIsOpen] = useState(false)
    const [val, setVal] = useState(filterState?.filterValue ?? INITIAL_FILTER_VAL)

    // const handleClickOpenModal = () => { setIsOpen(true) }
    // const handleClickCloseModal = () => { setIsOpen(false) }

    return (
        <div className={`flex gap-x-2 items-center ${filterState?.filterView ? 'justify-between' : 'justify-end'}`}>
            {/* <div className="relative w-full flex items-center">
                <TextField
                    className="flex pl-11 py-6 rounded-xl"
                    placeholder="Search Pokemon"
                />

                <div className="absolute left-4 top-[17px] pointer-events-none">
                    <SearchIcon height="22" width="22" />
                </div>
            </div> */}

            { filterState?.filterView &&
                <div>
                    <Button
                        className="rounded-xl border-0 px-3 py-1 bg-yellow-200 hover:bg-yellow-300 text-md"
                        icon={<CloseIcon height="18" width="18" />}
                        label={filterState?.filterValue?.name}
                        onClick={filterState?.handleClearFilter}
                    />
                </div>
            }

            <div>
                {/* <Button
                    className="rounded-xl border-0 px-3 py-2.5"
                    icon={<FilterIcon />}
                    onClick={handleClickOpenModal}
                /> */}

                <Drawer>
                    <DrawerTrigger>
                        <Button
                            className="rounded-xl border-0 px-3 py-2.5"
                            icon={<FilterIcon />}
                        />
                    </DrawerTrigger>

                    <DrawerContent className="min-h-[33vh]">
                        <DrawerHeader className="text-left">
                            <DrawerTitle className="text-xl font-medium">
                                Filters
                            </DrawerTitle>
                        </DrawerHeader>

                        <div className="px-4">
                            <div className="flex flex-col gap-y-3">
                                <div>
                                    <p className="text-sm font-medium leading-6 text-gray-900">
                                        Types
                                    </p>

                                    <ListDropdown
                                        customIcon
                                        placeholder="Select Types"
                                        selected={val}
                                        setSelected={setVal}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <DrawerFooter>
                            <DrawerClose>
                                <Button
                                    className="rounded-xl border-0 py-3 w-full bg-yellow-400 hover:bg-yellow-300 uppercase font-semibold"
                                    label="Apply"
                                />
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

                {/* <Modal
                    title={"Filter"}
                    isOpen={isOpen}
                    closeModal={handleClickCloseModal}
                    modalBody={
                        <div className="min-h-[260px] flex flex-col justify-between">
                            <div className="flex flex-col gap-y-3 mt-2">
                                <div>
                                    <p className="text-sm font-medium leading-6 text-gray-900">
                                        Types
                                    </p>

                                    <ListDropdown
                                        customIcon
                                        placeholder="Select Types"
                                        selected={val}
                                        setSelected={setVal}
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-medium leading-6 text-gray-900">
                                        Natures
                                    </p>

                                    <ListDropdown options={POKEMON_NATURES} placeholder="Select Natures" />
                                </div>
                            </div>

                            <div className="mt-6">
                                <Button 
                                    label="Apply"
                                    className="w-full font-medium rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-neutral-800 focus-visible:ring-yellow-600"
                                    onClick={() => {
                                        if(val.name !== "placeholder") {
                                            filterState?.handleSubmitFilter(val)
                                            handleClickCloseModal()
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    }
                /> */}
            </div>
        </div>
    )
}

export default SearchAndFilter