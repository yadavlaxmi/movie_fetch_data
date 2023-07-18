import Like from "./Like";
import Delete from "./Delete";

const MovieData=({props,onDelete})=>{
	return(
		<>
			<div className="movie_row">
				<div className="movie_image">
					<img src={props.image} class="image1"></img>
					<div class="box1">
						<div class="inner_box2">
							<text class="text8">{props.movieName}</text>
						</div>
						<div class="inner_box3">
							<text class="text9">{props.movieYear}.{props.duration}   |   {props.gender} 									</text>
						</div>
						
									
						<div class="inner_box4">
							<text class="text10">Description</text>
						</div>
						<div class="inner_box5">
							<text class="text11">{props.discription}</text>
						</div>	
					</div>
				</div>
			</div>
			<Like/>
			<Delete onDelete={onDelete}/>
	</>
	)
}
export default MovieData;
