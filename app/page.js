"use client"
import Header from "./Header";
import Footer from "./Footer";
import Form1 from "./Form1";
import MovieData from "./MovieData";
import {Movie_list} from "./Movie_list";
import React ,{useState} from "react";


const Page = () =>{
	const[movies, setMovies]= useState(Movie_list);
	const handleDeleteData=(id)=>{
		const updateList=movies.filter((movie)=> movie.id !== id);
		setMovies(updateList);
	};
return (
	<>
		<Header/>
		{movies.map((data)=>(
		<MovieData 
			key={data.id} 
			props={data}
			onDelete={()=>handleDeleteData(data.id)}
		/>
		))}
		<Form1/>
		<Footer/>
	</>
	);
};

export default Page;
