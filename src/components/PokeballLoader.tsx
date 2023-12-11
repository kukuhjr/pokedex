const PokeballLoader = () => {
    return (
        <div className="w-full flex items-center justify-center h-screen max-h-[800px]">
            <img
                src={'/src/assets/pokeball-loader.gif'}
                alt="charizard"
                className="h-full aspect-square max-h-[140px] lg:max-h-[200px]"
            />
        </div>
    )
}

export default PokeballLoader