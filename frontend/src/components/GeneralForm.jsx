import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const { useState } = React;
// const { useForm } = ReactHookForm

const formStyle =
	"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2";
const inputStyle =
	"bg-white h-12 w-full px-5 pr-10 mt-5 rounded-full text-sm border-2 border-solid border-gray-300 focus:outline-none";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function GeneralForm() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const {
		reset,
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const ErrorMsg = ({ inputName }) => (
		<>
			{errors[inputName] && (
				<small className="text-sm text-red-400 font-medium block mt-1 px-4">
					{errors[inputName]["message"]
						? errors[inputName]["message"]
						: errors[inputName]["type"] === "allowed"
						? `invalid username`
						: `${inputName} is required`}
				</small>
			)}
		</>
	);

	const validateUsername = async (value) => {
		await sleep(1000);
		return value !== "admin";
	};

	const data = {
		language: "Hebrew",
		email: "jjj",
		gender: "female",
		name: "hil",
		numOfBuddies: "0",
		phone: "222222222222",
		place: "physically",
		lovePeople: "Quiet",
		time: "Morning",
		FoodRestrictions: "kosher",
		PetFriendly: "yes",
		subject: "CS",
		DiverseSubject: "yes",
	};

	const axios = require("axios");

	const onSubmit = (data) => {
		console.log(data);

		axios
			.post("./http://localhost:8888/users/add", {
				...data,
			})
			.then(function (response) {
				console.log(response);
                localStorage.setItem("user_id", JSON.stringify(response))
			});

		setIsSubmitted(true);
		reset();
	};
	// onSubmit(data);
	if (isSubmitted)
		return (
			<div className="w-full md:w-1/2 xl:w-1/3 container mx-auto pt-4 md:pb-1 rounded-md">
				<div className={`${formStyle} items-center`}>
					<svg
						xmlns="./http://www.w3.org/2000/svg"
						className="h-20 w-20"
						fill="none"
						viewBox="0 0 24 24"
						stroke="#10B981"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<h4 class="text-3xl my-6 title">Data Sent</h4>
					<button
						className="text-indigo-500"
						onClick={(e) => setIsSubmitted(false)}
					>
						Create a new form
					</button>
					<a
						href="/matches"
						className="text-gray border-2 border-solid border-gray-600 px-6 py-1 rounded mt-3"
						
					>
						View matches
					</a>
				</div>
			</div>
		);

	return (
		<div className="w-full md:w-1/2 xl:w-1/3 container mx-auto pt-4 md:pb-1  rounded-md">
			<form className={formStyle} onSubmit={handleSubmit(onSubmit)}>
				<h1 class="title text-4xl text-center">Foodie</h1>
				<h3 className="text-sm text-center px-4 my-3">
					Add your restaurant to our list
				</h3>

				{/* <input 
          {...register("username", { 
              required: true, 
              validate: {
                allowed: validateUsername
              } 
          })} 
          className={inputStyle}
          placeholder="Username"
         />
				 <ErrorMsg inputName="username" /> */}

				<input
					className={inputStyle}
					placeholder="Name"
					{...register("name", { required: true })}
				/>
				<ErrorMsg inputName="name" />

				<input
					className={inputStyle}
					placeholder="Email"
					{...register("email", { required: true })}
				/>
				<ErrorMsg inputName="email" />

				<input
					className={inputStyle}
					placeholder="Phone"
					{...register("phone", {
						required: true,
						maxLength: { value: 13, message: "Max length 13" },
					})}
				/>
				<ErrorMsg inputName="phone" />

				{/* <input
					className={inputStyle}
					placeholder="Language"
					{...register("Language", { required: true })}
				/> */}
				<select {...register("language")} className={inputStyle}>
					{/* Language */}
					<option value="Language" disabled selected>
						Language
					</option>
					<option value="Hebrew">Hebrew</option>
					<option value="Arabic">Arabic</option>
					<option value="English">English</option>
				</select>
				<ErrorMsg inputName="Language" />

				<select {...register("gender")} className={inputStyle}>
					<option value="gender" disabled selected>
						Gender
					</option>
					<option value="female">female</option>
					<option value="male">male</option>
					<option value="other">other</option>
				</select>

				{/* <input
					className={inputStyle}
					placeholder="Would you prefer to meet physically or have an online session?"
					{...register("physicallyOrOnline", { required: true })}
				/> */}
				<select {...register("place")} className={inputStyle}>
					<option value="place" disabled selected>
						Would you prefer to meet physically or have an online session?
					</option>
					<option value="physically">Physically</option>
					<option value="online">Online session</option>
				</select>
				<ErrorMsg inputName="place" />

				{/* <input
					className={inputStyle}
					placeholder="How many people would you like to study with?"
					{...register("numOfBuddies", { required: true })}
				/> */}
				<select {...register("numOfBuddies")} className={inputStyle}>
					<option value="numOfBuddies" disabled selected>
						How many people would you like to study with?
					</option>
					<option value="0">I prefer to study alone</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<ErrorMsg inputName="numOfBuddies" />

                 {/* quietOrCrowded */}
				<select {...register("lovePeople")} className={inputStyle}>
					<option value="quietOrCrowded" disabled selected>
						Would you like to study in a quiet place or a crowded one?
					</option>
					<option value="Quiet">Physically</option>
					<option value="Crowded">Online session</option>
				</select>
				<ErrorMsg inputName="lovePeople" />

				<select {...register("time")} className={inputStyle}>
					<option value="time" disabled selected>
						What are your preferred study hours?
					</option>
					<option value="Morning">Morning</option>
					<option value="Noon">Noon</option>
					<option value="Evening">Evening</option>
				</select>
				<ErrorMsg inputName="time" />

                <select {...register("FoodRestrictions")} className={inputStyle}>
					<option value="FoodRestrictions" disabled selected>
                        Food Restrictions
					</option>
					<option value="Kosher">Kosher</option>
					<option value="Vegan">Vegan</option>
					<option value="Halal">Halal</option>
                    <option value="Gluten free">Gluten free</option>
				</select>
				<ErrorMsg inputName="FoodRestrictions" />

                <select {...register("PetFriendly")} className={inputStyle}>
					<option value="PetFriendly" disabled selected>
                        Pets Friendly? 
					</option>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
					<option value="Don't mind">Don't mind</option>
				</select>
				<ErrorMsg inputName="PetFriendly" />

                <select {...register("subject")} className={inputStyle}>
					<option value="subject" disabled selected>
						What are you studying?
					</option>
					<option value="Exact Sciences">Exact Sciences</option>
					<option value="Engineering">Engineering</option>
					<option value="Social Sciences">Social Sciences</option>
                    <option value="Humanities">Humanities</option>
					<option value="Arts">Arts</option>
					<option value="Medicine">Medicine</option>
				</select>
				<ErrorMsg inputName="subject" />

                <select {...register("DiverseSubject")} className={inputStyle}>
					<option value="DiverseSubject" disabled selected>
						With whom would you like to study?
					</option>
					<option value="">Same subjet</option>
					<option value="No">Different subject</option>
					<option value="Don't mind">Don't mind</option>
				</select>
				<ErrorMsg inputName="DiverseSubject" />



				<input
					type="submit"
					className="w-full text-md px-5 py-2 my-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 focus:outline-none"
				/>
			</form>
		</div>
	);
}
