import {IHero} from "../../types/Hero";

export interface ModalHeroProps {
    hero: IHero;
    onClose: () => void;
}