import { useState } from "react"

import Button from "../Button"
import Modal from "../Modal"
import TextField from "../TextField"

import FilterIcon from "../../assets/icons/FilterIcon"
import SearchIcon from "../../assets/icons/SearchIcon"
import ListDropdown from "../ListDropdown"
import { POKEMON_NATURES } from "../../constants/dummy"

const SearchAndFilter = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClickOpenModal = () => { setIsOpen(true) }
    const handleClickCloseModal = () => { setIsOpen(false) }

    return (
        <div className="flex gap-x-2 items-center">
            <div className="relative w-full flex items-center">
                <TextField
                    className="flex pl-11 py-6 rounded-xl"
                    placeholder="Search Pokemon"
                />

                <div className="absolute left-4 top-[17px] pointer-events-none">
                    <SearchIcon height="22" width="22" />
                </div>
            </div>

            <div>
                <Button
                    className="rounded-xl border-0 px-3.5 py-3.5"
                    icon={<FilterIcon />}
                    onClick={handleClickOpenModal}
                />

                <Modal
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

                                    <ListDropdown customIcon placeholder="Select Types"/>
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
                                    onClick={() => {}}
                                />
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    )
}

export default SearchAndFilter