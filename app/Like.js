"use client"
import React, { useState } from 'react';

function Like(){
	 const [votes, setVotes] = useState(0);
	 
	 
	 const handleVoteUp = () => {
    	setVotes(votes + 1);
  	};

  	const handleVoteDown = () => {
    	setVotes(votes - 1);
  	};
	return(
		<>
			<div className="Action">
				
				<div className="voteup">
					<img src="Icon - Like.svg" className="like1" onClick={handleVoteUp}/><span>{votes}</span>
				<div className="rating">
					<span class="rating1">{votes}</span>
				</div>
				<div className="votedown">
					<img src="unlike.svg" className="unlike1" onClick={handleVoteDown}/><span>{votes}</span>
				</div>
			</div>
		</div>
		</>	
				
	)
}
export default Like;
