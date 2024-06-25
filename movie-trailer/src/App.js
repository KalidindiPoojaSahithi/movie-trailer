import './App.css'; 
import { useState } from 'react'; 
import ReactPlayer from 'react-player'; 
import movieTrailer from 'movie-trailer'; 

function App() { 

	const [video, setVideo] = useState("inception"); 
	const [videoURL, setVideoURL] = 
		useState("https://youtu.be/-rTzyZZGJ84?si=fQusDbhd2RL0wz7c"); 

	function handleSearch() { 
		movieTrailer(video).then((res) => { 
			setVideoURL(res); 
		}); 
	} 

	return ( 
		<div className="App"> 
			<div className="search-box"> 
				<label> 
					Search for any movies/shows:{" "} 
				</label> 
        <br></br>
				<input type="text" onChange= 
					{(e) => { setVideo(e.target.value) }} placeholder="Movie" /> 

				<button onClick={() => { handleSearch() }} > 
					Search 
				</button> 
			</div> 
      <br></br>
			<ReactPlayer url={videoURL} controls={true} /> 
		</div> 
	); 
} 

export default App;
