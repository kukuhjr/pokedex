import { POKEMON_MOVES } from "../../constants/dummy"

const TabMovesContent = () => {
    console.log("render moves")

    return (
        <div className="flex flex-col">
            { POKEMON_MOVES.map((move, idx) => (
                <div className="underline-moves-item py-5" key={`move-${idx}`}>
                    { move }
                </div>
            )) }
        </div>
    )
}

export default TabMovesContent