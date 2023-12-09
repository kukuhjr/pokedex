import PokemonTypes from "../PokemonCard/PokemonTypes"
import pikachu from "../../assets/pikachu.png"

const PokemonCard = () => {
    return (
        <div className="w-full rounded-lg bg-sky-400 p-4">
            <div className="flex justify-between">
                <span className="text-sm">
                    Bulbasaur
                </span>

                <span className="text-sm">
                    #001
                </span>
            </div>

            <div className="flex justify-between mt-6 items-end">
                <div className="flex flex-col gap-y-1">
                    { [0,1].map((item) => (
                        <PokemonTypes key={item} />
                    )) }
                </div>

                <div>
                    <img 
                        src={pikachu}
                        height={"60px"}
                        width={"60px"}
                        className="sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default PokemonCard