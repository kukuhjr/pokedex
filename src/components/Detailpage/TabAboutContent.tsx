import Divider from "../Divider"

const TabAboutContent = () => {
    console.log("render about")

    return (
        <div className="flex flex-col gap-y-5">
            <p className="text-sm text-neutral-700 leading-6">
                Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.
            </p>

            <div className="about-box-custom">
                <div className="w-full text-center p-2">
                    <p className="text-sm text-neutral-900 font-semibold leading-5">
                        90,5 kg
                    </p>

                    <span className="text-xs text-neutral-700 leading-3">
                        Weight
                    </span>
                </div>

                <div className="relative">
                    <Divider />
                </div>

                <div className="w-full text-center p-2">
                    <p className="text-sm text-neutral-900 font-semibold leading-5">
                        170 cm
                    </p>

                    <span className="text-xs text-neutral-700 leading-3">
                        Height
                    </span>
                </div>
            </div>

            <div className="about-box-custom">
                <div className="w-full text-center p-2">
                    <p className="text-sm text-neutral-900 font-semibold leading-5">
                        90,5 kg
                    </p>

                    <span className="text-xs text-neutral-700 leading-3">
                        Category
                    </span>
                </div>

                <div className="relative">
                    <Divider />
                </div>

                <div className="w-full text-center p-2">
                    <p className="text-sm text-neutral-900 font-semibold leading-5">
                        Blaze, Solar-Power
                    </p>

                    <span className="text-xs text-neutral-700 leading-3">
                        Ability
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TabAboutContent