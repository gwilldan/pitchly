import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { Post } from "@/lib/types";

export default async function page({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const { query } = await searchParams;

	const posts: Post[] = [
		{
			_createdAt: new Date(),
			views: 55,
			author: { _id: 1, name: "Gwill Dan effiong ata utop ndsafsa dsads" },
			_id: 1,
			description:
				"This is an image that does a lot of thing seven sdasdsa sdasdashkjsd sadsadasdsadsdn sadsandsad sad",
			image:
				"https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.jpg?s=612x612&w=0&k=20&c=gGfba4h97L1tFjVWkPTiZUlfNHtkrf0fHhsmkY4S5Ng=",
			category: "Robots",
			title: "we Robots",
		},
	];

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

				<ul className=" mt-7 card_grid ">
					{posts.map((post: Post, index: number) => (
						<StartupCard
							key={post?._id}
							post={post}
						/>
					))}
				</ul>
			</section>
		</>
	);
}
