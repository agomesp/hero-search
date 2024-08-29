import {getHeroesData} from "../api/heroApi.ts";
import useNewsStore from "../store/useHeroStore.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useEffect, useState} from "react";

const fetchHeroes = async (search: string, setTotalPages: (totalPages: number) => void, setAllHeroes: any, setCurrentPage: any) => {
    const heroes = await getHeroesData(search);
    setTotalPages(Math.ceil(heroes.data.count / 4));
    setAllHeroes(heroes.data.results);
    setCurrentPage(1);
    return heroes.data.results;
};

const useHeroData = () => {
    const queryClient = useQueryClient();
    const { search, setTotalPages, currentPage, setCurrentPage } = useNewsStore();
    const [allHeroes, setAllHeroes] = useState<any[]>([]);

    const { isPending, error } = useQuery({
        queryKey: ['heroes', search],
        queryFn: () => fetchHeroes(search, setTotalPages, setAllHeroes, setCurrentPage),
    });

    const getPaginatedHeroes = (page: number) => {
        const startIndex = (page - 1) * 4;
        return allHeroes.slice(startIndex, startIndex + 4);
    };

    const mutation = useMutation({
        mutationFn: () => fetchHeroes(search, setTotalPages, setAllHeroes, setCurrentPage),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['heroes'] });
        },
    });

    useEffect(() => {
        mutation.mutate();
    }, [search]);


    return { isPending, error, data: getPaginatedHeroes(currentPage) };
}

export default useHeroData;