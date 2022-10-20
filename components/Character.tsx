import Image from "next/image"
import { Character } from "../types"

type Props = {
    character: Character
}

const Character = ({ character }: Props) => {
    return <div className=" flex gap-4 flex-col justify-center items-center bg-teal-400 p-4 rounded-lg">
        <Image src={character.image}
            alt={character.name} width="250" height="250" />
        <h3 className="text-xl font-bold text-white ">
            {character.name}

        </h3>
    </div >
}

export default Character;