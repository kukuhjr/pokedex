import Divider from "../Divider"

type EvolutionItem = {
    index: number
}

const EvolutionItem = ({ index }: EvolutionItem) => {
    return (
        <>
            <div className="flex jutify-center gap-x-5">
                <div className="flex-1 bg-blue-200/[0.3] rounded-3xl p-3 flex justify-center max-w-[180px]">
                    <img
                        src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'}
                        alt="charizard"
                        className="h-full aspect-square max-h-[90px]"
                    />
                </div>

                <div className="flex-1 flex flex-col items-start">
                    <span className="text-lg font-medium text-neutral-400 leading-10">
                        #00{index}
                    </span>

                    <p className="text-xl text-gray-900 font-medium leading-5">
                        Charmander
                    </p>

                    <div className="flex items-center gap-x-1.5 rounded-md border border-neutral-200 p-1.5 mt-3">
                        <img 
                            src="/src/assets/pokemon_types/fire.png"
                            alt="fire"
                            width={22}
                            height={22}
                        />
                        
                        <p className="text-sm text-gray-900 font-semibold leading-5">
                            Fire
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="basis-1/2 relative max-w-[180px]">
                    <div className="h-full absolute left-1/2">
                        <Divider />
                    </div>

                    <div className="w-full text-right pr-2">
                        <span className="text-sm font-light text-neutral-400 leading-10">
                            Level 16
                        </span>
                    </div>
                </div>

                <div className="basis-1/2" />
            </div>
        </>
    )
}

export default EvolutionItem