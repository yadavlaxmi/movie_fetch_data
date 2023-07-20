"use client"
import Header from "./Header";
import Footer from "./Footer";
import Form1 from "./Form1";
import Form from "./Form";
import MovieData from "./MovieData";
import {Movie_list} from "./Movie_list";
import React ,{useState} from "react";


const Page = () =>{
	const [votes, setVotes] = useState({});
  
  const handleButtonClick=()=>{
    setShowForm(true);
  }
  const handleVoteUp=(id)=>{
    const Votes={...votes}
    if (Votes[id]===undefined){
        Votes[id]=1
     }
     else {
        Votes[id]+=1
     }
      setVotes(Votes);
   };
  const handleVoteDown=(id)=>{
      const Votes={...votes}
      if (Votes[id]===undefined){
        Votes[id]=-1
     }
     else {
        Votes[id]-=1
     }
      setVotes(Votes);
  };
  const sortData=Movie_list.sort((a,b) => {
    const vote1=votes[a.id]||0;
    const vote2=votes[b.id]||0;
    return vote2 - vote1 ;
  });
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
			handleVoteUp={()=>handleVoteUp(data.id)}
			handleVoteDown={()=>handleVoteDown(data.id)}
			votes={votes[data.id]}
			
			
		/>
		))}
		<Form1/>
		<Form/>
		<Footer/>
	</>
	);
};

export default Page;
