import Header from "./Header";
import Footer from "./Footer";
import Form1 from "./Form1";
import MovieData from "./MovieData";
import Movie_list from "./Movie_list";


export default function Page(){
return (
	<>
		<Header/>
		{Movie_list.map((data)=>(
		<MovieData key={data.id} data={data}/>
		))}
		<Form1/>
		<Footer/>
	</>
	);
}
