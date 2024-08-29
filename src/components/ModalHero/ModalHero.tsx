import * as S from "./styles.ts";
import { ModalHeroProps } from './types.ts';

const ModalHero = ({hero, onClose}: ModalHeroProps) => {
    return (
        <S.Container isActive={!!hero}>
            <S.Background onClick={onClose}></S.Background>
            <S.Content isActive={!!hero}>
                <S.ImageContainer>
                    <img alt='Hero' src={`${hero?.thumbnail.path}/detail.jpg`}></img>
                </S.ImageContainer>

                <S.DetailsHero>
                    <S.HeroName>{hero?.name}</S.HeroName>
                    <p>{hero?.description}</p>

                    <S.Comics>
                        <h4>Comics</h4>
                        <ul>
                            {hero?.comics.items.map((comic: any, index: number) => {
                                return <li key={index}>{comic.name}</li>
                            })}
                        </ul>
                    </S.Comics>
                </S.DetailsHero>
            </S.Content>
        </S.Container>
    )
}

export default ModalHero;