"use client"
import React, { useState } from 'react';

function Like({handleVoteUp,handleVoteDown,votes}){

	return(
		<>
			<div className="Action">
				
				<div className="voteup">
					<img src="Icon - Like.svg" className="like1" onClick={handleVoteUp}/>
				<div className="rating">
					<span className="rating1">{votes}</span>
				</div>
				<div className="votedown">
					<img src="unlike.svg" className="unlike1" onClick={handleVoteDown}/>
				</div>
			</div>
		</div>
		</>	
				
	)
}
export default Like;
