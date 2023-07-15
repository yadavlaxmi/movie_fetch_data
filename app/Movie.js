"use client"
import React,{ useState, useEffect } from 'react'
 
function Profile() {
  const [data, setData] = useState([])
 
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
  }, [])
  return (
    <div>
    	
    </div>
  )
}
export default  Profile;
