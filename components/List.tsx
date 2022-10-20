import { Character as CharacterType } from "../types";
import Character from "./Character"

type Props = {
    characters: CharacterType[]
}

const List = ({ characters }: Props) => {

    return (
        <div className="m-auto max-w-[1300px] grid gap-12 md:grid-cols-3 lg:grid-cols-4">
            {
                characters.map(item => (<Character key={item.id} character={item} />))
            }
        </div>
    )
}

export default List;