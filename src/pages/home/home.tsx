import useSWR from "swr";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";
import { fetcher } from "../../utils";
import { useState } from "react";
import { NameApp, Wrapper } from "./styled";
import { Spinner } from "../../components/spinner";

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const offset = currentPage === 1 ? 0 : currentPage * 20;

  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`, fetcher);

  if (error) return <div>failed to load</div>
 
  return (
    <Wrapper>
      {data ? 
        <>
          <NameApp>PokeTask</NameApp>
          <List pokemons={data.results} />
          <Pagination count={data.count} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
       : <Spinner />}
    </Wrapper>
  );
};
