import * as S from './styles.ts'

const Header = () => {
    return (
        <S.Container>
            <img width="96px" alt="Logo" src="https://objectivegroup.com/wp-content/uploads/2020/11/logo.svg"></img>
            <S.UserInfo>
                <S.UserName><strong>Allan Gomes</strong> Teste de Front-end</S.UserName>
                <S.UserAvatar>AG</S.UserAvatar>
            </S.UserInfo>
        </S.Container>
    );
}

export default Header;