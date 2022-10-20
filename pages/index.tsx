import type { NextPage, GetStaticProps, GetStaticPropsContext } from "next";
import AppLayout from "../components/AppLayout";
import List from "../components/List";
import API from "../lib/API";
import { Character, CharacterResult, Info } from "../types";

const Home: NextPage<{ characters: Character[]; info: Info }> = ({
	characters,
	info,
}) => {
	console.log(characters, info);

	return (
		<AppLayout>
			<List characters={characters} />
		</AppLayout>
	);
};

export const getStaticProps: GetStaticProps = async (
	context: GetStaticPropsContext
) => {
	try {
		const res = await API.get<CharacterResult>("/character");
		const { data } = res;

		return {
			props: {
				characters: data.results,
				info: data.info,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default Home;
