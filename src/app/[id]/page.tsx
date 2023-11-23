import classes from './style.module.css'
import GameCard from "@/components/GameCard/GameCard"
import { GAMEZOP_ROUTES, GAMEZOP_ROUTES_ICONS } from "@/utils/enum"
import { getDataById } from "@/services/getDataById"
async function getCategorieData(id: string) { return getDataById(id) }

export default async function name({ params }: { params: { id: string } }) {
    const data = await getCategorieData("action-games")
    const newId = params.id
    return (
        <main className={classes.categoriesContainer}>
            <section className={classes.gamesContainer}>
                <div className={classes.headingContainer}>
                    <img style={{ width: '26px', height: '29px' }} src={GAMEZOP_ROUTES_ICONS[newId]} alt="s" />
                    <h2 className={classes.categName} >{GAMEZOP_ROUTES[newId]}</h2>
                </div>

                <div className={classes.catGamesWrapper}>
                    {
                        data.map((game: any, index: number) => (
                            <figure className={classes.gameCardCon} key={index}>
                                <GameCard name={game.name.en} image={game.assets.square} url={game.url} />
                            </figure>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}

