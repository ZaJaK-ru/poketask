import { Card } from "../card";
import { Wrapper } from "./styled";

interface Pokemon {
  name: string;
  url: string;
}

type Props = {
  pokemons: Pokemon[];
}

export const List: React.FC<Props> = ( {pokemons} ) => {
  return (
    <Wrapper>
       {pokemons.map((pokemon: Pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} />
      ))}
    </Wrapper>
  );
}
