'use client'
import { useState, useEffect } from 'react';
import './styles/App.css';
import GetButtonJoke from './components/GetButtonJoke';
import LikJokesButton from './components/LikeJokes';
import ButtonRemove from './components/ButtonRemove';
import Link from 'next/link'
import SortList from './components/SortButton';

export default function Home() {
	const [joke, setJoke] = useState('');
	const [error, setError] = useState(null);
  const [searchJokes, setSearchJokes] = useState('');
  const [filteredJokes, setFilteredJokes] = useState([]);
  const [jokeGenerated, setJokeGenerated] = useState(false); 

  const [listLikeJokes, setListLikeJokes] = useState([])

	const getJoke = () => {
		fetch('https://icanhazdadjoke.com/', {
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setJoke(data.joke);
        setJokeGenerated(true)
			})
			.catch((error) => {
        setError(error)
				throw new Error('Failed to fetch joke', error);
			});
	};

   const handleLikeJokes = () => {
    if(jokeGenerated){
    if (!listLikeJokes.includes(joke)) {
      const updatedList = [...listLikeJokes, joke]
      setListLikeJokes(updatedList);
      localStorage.setItem('listLikeJokes', JSON.stringify(updatedList));
    }}
  };

  const handleSearch = (event) => {
    const searchJokes = event.target.value;
    setSearchJokes(searchJokes);

     const filteredJokes = listLikeJokes.filter((joke) =>
      joke.toLowerCase().includes(searchJokes.toLowerCase())
    );
    setFilteredJokes(filteredJokes);
  };

  const handleRemove = (jokeToRemove) => {
    const updatedList = listLikeJokes.filter((joke) => joke !== jokeToRemove);
    setListLikeJokes(updatedList);
    localStorage.setItem('listLikeJokes', JSON.stringify(updatedList));
  }

  const sortByLikeCount = (selectedJoke) => {
        const updatedList = [selectedJoke, ...listLikeJokes.filter(j => j !== selectedJoke)];
        setListLikeJokes(updatedList);
        localStorage.setItem('listLikeJokes', JSON.stringify(updatedList));
};

  useEffect(() => {
    const savedJokes = localStorage.getItem('listLikeJokes');
    if (savedJokes) {
        setListLikeJokes(JSON.parse(savedJokes));
    }
}, []);
  


	return (
		<div className="container">
        <div className="cardContainer">
          <div className='titleContainer'>
            <h1 className="heading">
              Random Jokes Generator
            </h1>
          </div>
          <div className='buttonContainer'>
            <GetButtonJoke onClick={getJoke}/>
            <LikJokesButton onClick={handleLikeJokes}/>
          </div>
          <label>Search joke:</label>
          <div  className='searchContainer'>
              <input
                type="text"
                placeholder="Search jokes..."
                className='search'
                value={searchJokes}
                onChange={handleSearch}
              />
           </div>
				</div>
        <div className='card-2-container'>
          <div className="jokeContainer">
              {error ? (
                <label className="errorText">
                  {error}
                </label> ) : (
                <>
                  <label className="jokeCard">Generated Joke:</label>
                  <label className="jokeText">{joke}</label>
                  <label className="jokeCard">Liked Jokes:</label>
                  <ul>
                      {searchJokes ? filteredJokes.map((likedJoke, index) => (
                        <li key={index} className="jokeCardcontent">
                        <ButtonRemove onClick={() => handleRemove(likedJoke)} />
                          {likedJoke}
                        </li>
                      )) : listLikeJokes.map((likedJoke, index) => (
                        <li key={index} className="jokeCardcontent">
                            <ButtonRemove onClick={() => handleRemove(likedJoke)} />
                            <SortList onClick={() => sortByLikeCount(likedJoke)} />
                            <Link href={`joke/${index}`}>Link</Link>
                            {likedJoke}
                        </li>
                      ))}
                  </ul>
                </>
              )}
              
          </div>
        </div>
      </div>
	);
}
