import { Link } from "react-router-dom"
import PokemonCard from "./PokemonCard"

const PokemonGridList = () => {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            { [0,1,2,3,4,5,6,7,8,9].map((item) => (
                <Link to={`/${item}`} key={item}>
                    <PokemonCard />
                </Link>
            )) }
        </div>
    )
}

export default PokemonGridList