import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
	return (
		<Form
			id="form"
			action="/"
			className="search-form">
			<input
				type="text"
				autoComplete="off"
				name="query"
				defaultValue={query}
				className="search-input"
				placeholder="Search Startups"
			/>
			<div className=" flex gap-2 ">
				{query && <SearchFormReset />}
				<button
					type="submit"
					className="search-btn text-white ">
					<Search className=" size-5" />
				</button>
			</div>
		</Form>
	);
};

export default SearchForm;
