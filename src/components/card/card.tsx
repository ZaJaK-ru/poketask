import useSWR from "swr";
import { CardContainer, CardImage, Description, Name } from "./styled";
import { fetcher } from "../../utils";
import { Spinner } from "../spinner";

interface Pokemon {
  name: string;
  url: string;
}

type Props = {
  pokemon: Pokemon;
}

export const Card: React.FC<Props> = ( {pokemon} ) => {
  const { data, error } = useSWR(pokemon.url, fetcher);

  if (error) return <div>failed to load</div>
 
  return (
    <CardContainer>
      {data ? 
        <>
          <CardImage src={data.sprites.front_default} alt={pokemon.name}/>
          <Name>{pokemon.name}</Name>
          <Description>Height: {data.height}</Description>
          <Description>Weight: {data.weight}</Description>
        </>
       : <Spinner />}
    </CardContainer>
  );
}