import * as S from './styles.ts'
import useHeroData from "../../hooks/useHeroData.ts";
import ModalHero from "../ModalHero/ModalHero.tsx";
import {useState} from "react";

const HeroesTable = () => {
    const {isPending, error, data} = useHeroData();
    const [selectedHero, setSelectedHero] = useState<any>(null);

    return (
        <>
            <ModalHero hero={selectedHero} onClose={() => setSelectedHero(null)}></ModalHero>
            <S.Table>
                <thead>
                <S.TrHeader>
                    <th>Personagem</th>
                    {window.innerWidth > 800 && (
                        <>
                            <th>Séries</th>
                            <th>Eventos</th>
                        </>
                    )}
                </S.TrHeader>
                </thead>
                <tbody>
                {isPending &&<S.ContainerSpinner><S.Spinner /></S.ContainerSpinner>}
                {(data.length === 0 && !isPending) &&<S.ContainerSpinner>Nada encontrado</S.ContainerSpinner>}
                {
                    (!isPending && data) && data.map((hero: any, index: number) => {
                        return (
                            <S.TrHero onClick={() => setSelectedHero(hero)} key={index}>
                                <S.TdHero>
                                    <S.ContainerHero>
                                        <S.HeroImage>
                                            <img alt="Hero" src={`${hero.thumbnail.path}/portrait_medium.jpg`}/>
                                        </S.HeroImage>
                                        <S.HeroName>{hero.name}</S.HeroName>
                                    </S.ContainerHero>
                                </S.TdHero>
                                {window.innerWidth > 800 && (
                                    <>
                                        <S.TdHero>
                                            <S.ContainerList>
                                                {hero.series.items.map((serie: any, index: number) => {
                                                    return <span key={index}>{serie.name}</span>
                                                })}
                                            </S.ContainerList>
                                        </S.TdHero>
                                        <S.TdHero>
                                            <S.ContainerList>
                                                {hero.events.items.map((serie: any, index: number) => {
                                                    return <span key={index}>{serie.name}</span>
                                                })}
                                            </S.ContainerList>
                                        </S.TdHero>
                                    </>
                                )}
                            </S.TrHero>
                        )
                    })
                }
                {
                    error && <S.TrHero>
                        <td>Error: {error.message}</td>
                    </S.TrHero>
                }
                </tbody>
            </S.Table>
        </>
    );
}

export default HeroesTable;