function Delete({onDelete}){
	return(
		<>
			<div className="delete">
				<img src="fluent_delete-32-regular.svg" className="delete1" onClick={onDelete}></img>
			</div>
		</>	
				
	)
}
export default Delete;
