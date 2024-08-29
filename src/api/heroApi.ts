const API_KEY = import.meta.env.VITE_KEY_API;

const getSourceUrl = (search: string) => `http://gateway.marvel.com/v1/public/characters?${search && 'nameStartsWith='+ search}&apikey=${API_KEY}`;

export const getHeroesData = async (search: string) => {
    let result = await fetch(getSourceUrl(search)).then(
        (res) => {
            return res.json()
        }
    ).catch((err) => {
        console.log('err', err)
    });

    return result;
}