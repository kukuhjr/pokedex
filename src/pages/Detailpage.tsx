import { useNavigate } from "react-router-dom"

import Button from "../components/Button"

import ChevronLeftIcon from "../assets/icons/ChevronLeft"
import FavoriteIcon from "../assets/icons/FavoriteIcon"
import TabMenu from "../components/TabMenu"

const Detailpage = () => {
    const navigate = useNavigate()

    const handleClickBackButton = () => {
        navigate("/")
    }

    return (
        <div className="container mx-auto">
            <div className="
                pt-3 px-3 h-[360px]
                bg-gradient-to-b 
                from-orange-400 from-0% via-orange-300 via-50% to-neutral-50 to-100%
            ">
                {/* HEADER */}
                <div className="flex items-center">
                    <Button
                        icon={<ChevronLeftIcon height='24' width='24' />}
                        onClick={handleClickBackButton}
                        className='icon-button-text hover:bg-black/5'
                    />

                    <div className="flex-1 text-center">
                        <span className="text-md text-gray-900">
                            #006
                        </span>
                    </div>

                    <Button
                        icon={<FavoriteIcon height='22' width='22' />}
                        onClick={() => {}}
                        className='icon-button-text hover:bg-black/5'
                    />
                </div>

                {/* IMAGE */}
                <div className="flex items-center justify-center">
                    <img
                        src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'}
                        alt="charizard"
                        className="h-full aspect-square max-h-[320px]"
                    />
                </div>
            </div>

            {/* NAME */}
            <div className="text-center">
                <h1 className="text-xl font-medium text-gray-900">
                    Charizard
                </h1>

                <h3 className="text-md font-light text-gray-400">
                    Flame Pokemon
                </h3>
            </div>

            {/* TABS */}
            <div className="w-full flex justify-center">
                <TabMenu />
            </div>
        </div>
    )
}

export default Detailpage