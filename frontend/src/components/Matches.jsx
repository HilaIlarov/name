import "./Matches.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";

export default function Matches() {
	const [isLoading, setIsLoading] = useState(true);
	const [match, setMatch] = useState(null);

	useEffect(() => {
		const request = async () => {
			const userId = localStorage.getItem("user_id");
			const currentMatch = await axios.get(
				`http://localhost:8888/users/match?userId=${userId}`
			);
			setMatch(currentMatch.data);
			setTimeout(() => {
				setIsLoading(false);
			}, 3000);
		};
		request();
	}, []);

	return (
		<div className="matches">
			{isLoading ? (
				<TailSpin
					height="300"
					width="100"
                    // left="300"
                    display= "flex"
                    align-self="center"
					color="purple"
					ariaLabel="loading"
				/>
			) : match ? (
				<Match match={match} />
			) : (
				<NoMatch />
			)}
		</div>
	);
}

const Match = ({ match }) => {
	return (
		<div className="screen">
            <div>
			    <label className="title">It's a match!</label>
            </div>
            <div>
                <label className="text">You were matched with {match["username"]}</label>
            </div>
		</div>
	);
};

const NoMatch = () => {
	return "no match!";
};
