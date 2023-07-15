import Like from "./Like";
import Delete from "./Delete";
function MovieData(props){
	return(
		<>
			<div className="movie_row">
				<div className="movie_image">
					<img src={props.data.image} class="image1"></img>
					<div class="box1">
						<div class="inner_box2">
							<text class="text8">{props.data.movieName}</text>
						</div>
						<div class="inner_box3">
							<text class="text9">{props.data.movieYear}.{props.data.duration}   |   {props.data.gender} 									</text>
						</div>
						
									
						<div class="inner_box4">
							<text class="text10">Description</text>
						</div>
						<div class="inner_box5">
							<text class="text11">{props.data. discription}</text>
						</div>	
					</div>
				</div>
			</div>
			<Like/>
			<Delete/>
	</>
	)
}
export default MovieData;
