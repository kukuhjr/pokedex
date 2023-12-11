import { Suspense, lazy } from 'react'
import { Tab } from '@headlessui/react'

const TabAboutContent = lazy(() => import('./Detailpage/TabAboutContent'))
const TabStatsContent= lazy(() => import('./Detailpage/TabStatsContent'))
const TabMovesContent= lazy(() => import('./Detailpage/TabMovesContent'))
const TabEvolutionsContent= lazy(() => import('./Detailpage/TabEvolutionsContent'))

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const TabMenu = () => {
    const categories = {
        About: {
            content: <TabAboutContent />
        },
        Stats: {
            content: <TabStatsContent />
        },
        Moves: {
            content: <TabMovesContent />
        },
        Evolutions: {
            content: <TabEvolutionsContent />
        }
    }
    
    return (
        <div className="w-full px-2 pt-16 sm:px-0 max-w-xl">
            <Tab.Group>
                <Tab.List className="flex space-x-1 p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 relative focus:outline-none',
                                    'underline-custom',
                                    selected
                                    ? 'text-blue-900 underline-custom-afterwards'
                                    : 'text-neutral-300 hover:bg-white/[0.12] hover:text-blue-900/[0.4]'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    <Suspense fallback={<p>Loading....</p>}>
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'rounded-xl py-4 px-4',
                                    'ring-white/60 ring-offset-2 focus:outline-none'
                                )}
                            >
                                { posts.content }
                            </Tab.Panel>
                        ))}
                    </Suspense>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default TabMenu