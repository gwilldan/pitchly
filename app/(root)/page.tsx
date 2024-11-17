import SearchForm from "../../components/SearchForm";

export default async function page({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const { query } = await searchParams;

	return (
		<>
			<section className="pink_container ">
				<h1 className="heading">
					Pitch your start up <br /> Connect with Enterpreneurs{" "}
				</h1>
				<p className=" sub-heading !max-w-3xl ">
					Submit Ideas, vote on pitches, Get noticed in Virtual Competitions
				</p>

				<SearchForm query={query} />
			</section>

			<section className=" section_container">
				<p className="text-30-semibold">
					{query ? `Search results for ${query}` : "All Startups"}
				</p>
			</section>
		</>
	);
}
