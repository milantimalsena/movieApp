// Mock movie database with diverse collection of movies
export const mockMoviesDatabase = [
  // Hollywood Movies
  {
    imdbID: 'tt0111161',
    Title: 'The Shawshank Redemption',
    Year: '1994',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
    imdbRating: '9.3',
    Genre: 'Drama',
    Plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    Director: 'Frank Darabont',
    Actors: 'Tim Robbins, Morgan Freeman, Bob Gunton'
  },
  {
    imdbID: 'tt0068646',
    Title: 'The Godfather',
    Year: '1972',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzUzNzQxNzI@._V1_SX300.jpg',
    imdbRating: '9.2',
    Genre: 'Crime, Drama',
    Plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    Director: 'Francis Ford Coppola',
    Actors: 'Marlon Brando, Al Pacino, James Caan'
  },
  {
    imdbID: 'tt0468569',
    Title: 'The Dark Knight',
    Year: '2008',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    imdbRating: '9.0',
    Genre: 'Action, Crime, Drama',
    Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
    Director: 'Christopher Nolan',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart'
  },
  {
    imdbID: 'tt0110912',
    Title: 'Pulp Fiction',
    Year: '1994',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    imdbRating: '8.9',
    Genre: 'Crime, Drama',
    Plot: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
    Director: 'Quentin Tarantino',
    Actors: 'John Travolta, Uma Thurman, Samuel L. Jackson'
  },
  {
    imdbID: 'tt0167260',
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWI5MTktXkEyXkFqcGdeQXVyNzU4Nzk4MTU@._V1_SX300.jpg',
    imdbRating: '8.9',
    Genre: 'Action, Adventure, Drama',
    Plot: 'Gandalf and Aragorn lead the World of Men against Saurons army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
    Director: 'Peter Jackson',
    Actors: 'Elijah Wood, Viggo Mortensen, Ian McKellen'
  },
  {
    imdbID: 'tt0816692',
    Title: 'Interstellar',
    Year: '2014',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    imdbRating: '8.6',
    Genre: 'Adventure, Drama, Sci-Fi',
    Plot: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.',
    Director: 'Christopher Nolan',
    Actors: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain'
  },
  {
    imdbID: 'tt4154796',
    Title: 'Avengers: Endgame',
    Year: '2019',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    imdbRating: '8.4',
    Genre: 'Action, Adventure, Drama',
    Plot: 'After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos actions and restore balance to the universe.',
    Director: 'Anthony Russo, Joe Russo',
    Actors: 'Robert Downey Jr., Chris Evans, Mark Ruffalo'
  },
  {
    imdbID: 'tt6751668',
    Title: 'Parasite',
    Year: '2019',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
    imdbRating: '8.5',
    Genre: 'Comedy, Drama, Thriller',
    Plot: 'A poor family schemes to become employed by a wealthy family and infiltrate their household by posing as unrelated, highly qualified individuals.',
    Director: 'Bong Joon Ho',
    Actors: 'Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong'
  },

  // Hindi/Bollywood Movies
  {
    imdbID: 'tt0169547',
    Title: '3 Idiots',
    Year: '2009',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    imdbRating: '8.4',
    Genre: 'Comedy, Drama',
    Plot: 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.',
    Director: 'Rajkumar Hirani',
    Actors: 'Aamir Khan, Madhavan, Mona Singh'
  },
  {
    imdbID: 'tt0405159',
    Title: 'Lagaan',
    Year: '2001',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDMzMzNjNTUtY2Y0MS00MzJiLWE5MjktZDMxMWY1MDA3YWZjXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
    imdbRating: '8.1',
    Genre: 'Adventure, Drama, Musical',
    Plot: 'The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.',
    Director: 'Ashutosh Gowariker',
    Actors: 'Aamir Khan, Gracy Singh, Rachel Shelley'
  },
  {
    imdbID: 'tt8108198',
    Title: 'Dangal',
    Year: '2016',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwNzQ1NzQxOTE@._V1_SX300.jpg',
    imdbRating: '8.3',
    Genre: 'Action, Biography, Drama',
    Plot: 'Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games.',
    Director: 'Nitesh Tiwari',
    Actors: 'Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh'
  },
  {
    imdbID: 'tt10295212',
    Title: 'RRR',
    Year: '2022',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00NzMwLTg2YmUtNDAzN2Q2NzBmNTM3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    imdbRating: '8.0',
    Genre: 'Action, Drama',
    Plot: 'A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s.',
    Director: 'S.S. Rajamouli',
    Actors: 'N.T. Rama Rao Jr., Ram Charan, Ajay Devgn'
  },
  {
    imdbID: 'tt9389998',
    Title: 'Zindagi Na Milegi Dobara',
    Year: '2011',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNjE2M2RjMWMtY2Q5OC00MjlkLWEwNTktYmJkMWY0YTBhNGY4XkEyXkFqcGdeQXVyNjkwOTg4OTA@._V1_SX300.jpg',
    imdbRating: '8.2',
    Genre: 'Adventure, Comedy, Drama',
    Plot: 'Three friends decide to turn their fantasy vacation into reality after one of their friends gets engaged.',
    Director: 'Zoya Akhtar',
    Actors: 'Hrithik Roshan, Farhan Akhtar, Abhay Deol'
  },
  {
    imdbID: 'tt8291224',
    Title: 'Andhadhun',
    Year: '2018',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTEwMDAtOTkzMC00MDAyLThhN2EtYjczN2ZkMmFjNWVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    imdbRating: '8.2',
    Genre: 'Crime, Mystery, Thriller',
    Plot: 'A series of mysterious events change the life of a blind pianist who now must report a crime that was actually never witnessed by him.',
    Director: 'Sriram Raghavan',
    Actors: 'Ayushmann Khurrana, Tabu, Radhika Apte'
  },
  {
    imdbID: 'tt9900782',
    Title: 'Tumhari Sulu',
    Year: '2017',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZjM4OWNlNDgtNWM3Mi00YzM5LWE5NjItMTkzOGQxMTRiYzAzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    imdbRating: '7.1',
    Genre: 'Comedy, Drama',
    Plot: 'Sulu is an ambitious housewife with a loving husband and a happy family. Things start changing for her when she accidentally lands a job as a radio jockey.',
    Director: 'Suresh Triveni',
    Actors: 'Vidya Balan, Manav Kaul, Neha Dhupia'
  },
  {
    imdbID: 'tt10028196',
    Title: 'Pink',
    Year: '2016',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZjg3NDNiMGQtYzgwYS00M2Y2LWJhNjgtNjViMWQ5MzU3N2ZmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    imdbRating: '8.1',
    Genre: 'Crime, Drama, Thriller',
    Plot: 'When three young women are harassed and implicated in a crime they didnt commit, a bipolar lawyer comes to their rescue.',
    Director: 'Anirudha Roy Chowdhury',
    Actors: 'Taapsee Pannu, Amitabh Bachchan, Kirti Kulhari'
  },

  // South Indian Movies
  {
    imdbID: 'tt7019842',
    Title: 'Baahubali 2: The Conclusion',
    Year: '2017',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYTMxMDU4NzEtNWQ2ZC00ZGM4LWE2ZDEtMjQ2MjA2MzQyZGFjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    imdbRating: '8.7',
    Genre: 'Action, Drama',
    Plot: 'When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.',
    Director: 'S.S. Rajamouli',
    Actors: 'Prabhas, Rana Daggubati, Anushka Shetty'
  },
  {
    imdbID: 'tt6148156',
    Title: 'Baahubali: The Beginning',
    Year: '2015',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BN2Y1OWYzMTYtYmQxZS00YjMxLWE3YTItYmMzODZkOGRlMTQwXkEyXkFqcGdeQXVyOTk4MzE3MTQ@._V1_SX300.jpg',
    imdbRating: '8.0',
    Genre: 'Action, Drama',
    Plot: 'In ancient India, an adventurous and daring man becomes involved in a decades old feud between two warring tribes.',
    Director: 'S.S. Rajamouli',
    Actors: 'Prabhas, Rana Daggubati, Ramya Krishnan'
  },
  {
    imdbID: 'tt8690344',
    Title: 'KGF: Chapter 1',
    Year: '2018',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYjFhN2ZhMGItOGNmOS00MGRlLWIwYjAtNWE2Y2JmN2I5NmE2XkEyXkFqcGdeQXVyMTIyNzY3NzA1._V1_SX300.jpg',
    imdbRating: '8.2',
    Genre: 'Action, Crime, Drama',
    Plot: 'In the 1970s, a fierce rebel rises against brutal oppression and becomes the symbol of hope to legions of downtrodden people.',
    Director: 'Prashanth Neel',
    Actors: 'Yash, Srinidhi Shetty, Ramachandra Raju'
  },
  {
    imdbID: 'tt10579952',
    Title: 'KGF: Chapter 2',
    Year: '2022',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYjJhNjA4OWEtNjE0MS00ZmI2LTk0OTUtMDIwNGJkOGY2ODY2XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg',
    imdbRating: '8.3',
    Genre: 'Action, Crime, Drama',
    Plot: 'In the blood-soaked Kolar Gold Fields, Rockys name strikes fear into his foes. His allies look up to Rocky as their savior, the government sees him as a threat.',
    Director: 'Prashanth Neel',
    Actors: 'Yash, Sanjay Dutt, Raveena Tandon'
  },
  {
    imdbID: 'tt10189514',
    Title: 'Pushpa: The Rise',
    Year: '2021',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BY2NkODUyYzctZDBmZS00YWVkLWI3YWEtNzJjZjA3MWE5MDZjXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_SX300.jpg',
    imdbRating: '7.6',
    Genre: 'Action, Crime, Drama',
    Plot: 'A laborer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling. However, violence erupts when the police attempt to bring down his illegal business.',
    Director: 'Sukumar',
    Actors: 'Allu Arjun, Fahadh Faasil, Rashmika Mandanna'
  },
  {
    imdbID: 'tt8946378',
    Title: 'Arjun Reddy',
    Year: '2017',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BM2UwOTYxMjktN2U4Ni00OWYzLWFhZTYtZWY3N2MzM2M0NzVkXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_SX300.jpg',
    imdbRating: '8.1',
    Genre: 'Drama, Romance',
    Plot: 'A hot-blooded student union leader falls for a state-level cricketer but his anger management issues and violent streak threatens to derail their love story.',
    Director: 'Sandeep Reddy Vanga',
    Actors: 'Vijay Deverakonda, Shalini Pandey, Jia Sharma'
  },
  {
    imdbID: 'tt9389998',
    Title: 'Jersey',
    Year: '2019',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNjk2NjU2NDItMjg4Yi00ZDJlLWEwZjctOTE5MjVlNDNkOGE1XkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_SX300.jpg',
    imdbRating: '8.4',
    Genre: 'Drama, Sport',
    Plot: 'A failed cricketer decides to revive his cricketing career in his late 30s despite everyone being skeptical of his ability to do so.',
    Director: 'Gowtam Tinnanuri',
    Actors: 'Nani, Shraddha Srinath, Harish Kalyan'
  },
  {
    imdbID: 'tt11145118',
    Title: 'Master',
    Year: '2021',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZGVlNTY2MTUtMjJkZi00ZmMzLWE1NDQtNmQ0YjBlMzNjYjdjXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_SX300.jpg',
    imdbRating: '7.3',
    Genre: 'Action, Crime, Drama',
    Plot: 'An alcoholic professor is sent to a juvenile school, where he clashes with a gangster, who uses the children of the school for criminal activities.',
    Director: 'Lokesh Kanagaraj',
    Actors: 'Vijay, Vijay Sethupathi, Malavika Mohanan'
  },

  // Nepali Movies
  {
    imdbID: 'tt10649034',
    Title: 'Pashupati Prasad',
    Year: '2016',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNzc3NDcwODgtOWIxNi00ZGRkLWI5ODQtN2IyMzViZWUzMzU4XkEyXkFqcGdeQXVyODM2OTEyNTE@._V1_SX300.jpg',
    imdbRating: '8.5',
    Genre: 'Comedy, Drama',
    Plot: 'Pashupati visits Kathmandu to pay his fathers loans but his stay is extended when his document and money get stolen.',
    Director: 'Dipendra K. Khanal',
    Actors: 'Khagendra Lamichhane, Barsha Siwakoti, Bipin Karki'
  },
  {
    imdbID: 'tt8949716',
    Title: 'Loot',
    Year: '2012',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMzYzNzI3NTAtMDUxNy00M2VlLWExNjUtYjhiMjU2ZWYzOTNlXkEyXkFqcGdeQXVyODM2OTEyNTE@._V1_SX300.jpg',
    imdbRating: '8.0',
    Genre: 'Comedy, Crime',
    Plot: 'A comedy crime story about four guys who decided to rob a bank only to find another team of robbers who had the same plan.',
    Director: 'Nischal Basnet',
    Actors: 'Saugat Malla, Dayahang Rai, Karma Shakya'
  },
  {
    imdbID: 'tt6841172',
    Title: 'Kabaddi',
    Year: '2014',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNzQ3NTMzNjMtYjBmYi00NzZlLWI3NDYtYTg0MzRkNzI4YjU3XkEyXkFqcGdeQXVyODM2OTEyNTE@._V1_SX300.jpg',
    imdbRating: '7.8',
    Genre: 'Comedy, Romance',
    Plot: 'A comedy about a guy from the village who goes to Kathmandu in search of his love.',
    Director: 'Ram Babu Gurung',
    Actors: 'Dayahang Rai, Rishma Gurung, Bijay Baral'
  },
  {
    imdbID: 'tt10899028',
    Title: 'Chhakka Panja',
    Year: '2016',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYjE4OWJhNzItYzVjNi00YzIyLWI5ODMtMjFkMzNkNjRlMzJkXkEyXkFqcGdeQXVyODM2OTEyNTE@._V1_SX300.jpg',
    imdbRating: '7.4',
    Genre: 'Comedy',
    Plot: 'A comedy about Raja and his adventures with his friends in their village.',
    Director: 'Deepa Shree Niraula',
    Actors: 'Deepak Raj Giri, Priyanka Karki, Jeetu Nepal'
  },
  {
    imdbID: 'tt11564570',
    Title: 'Bir Bikram',
    Year: '2016',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZjE2YTVhMGEtZWI4Zi00NTg3LTg2NDUtNTJiMTNkNTJmNWE5XkEyXkFqcGdeQXVyODM2OTEyNTE@._V1_SX300.jpg',
    imdbRating: '7.6',
    Genre: 'Action, Drama',
    Plot: 'Bir decides to save his crush but finds himself entangled in a web of deceit, fraud and corruption.',
    Director: 'Milan Chams',
    Actors: 'Dayahang Rai, Anoop Bikram Shahi, Deeya Pun'
  },
  {
    imdbID: 'tt12345678',
    Title: 'Kalo Pothi',
    Year: '2015',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYzJhYjdmYzQtYzQ3Yi00NGE2LTlmMzYtNmQzNzI5NTJkNzNjXkEyXkFqcGdeQXVyODM2OTEyNTE@._V1_SX300.jpg',
    imdbRating: '7.2',
    Genre: 'Drama',
    Plot: 'We are in the year 2001, a temporary ceasefire brings a much-needed break to a small war-torn village in Northern Nepal.',
    Director: 'Min Bahadur Bham',
    Actors: 'Khadka Raj Nepali, Sukra Raj Rokaya, Jit Bahadur Malla'
  },

  // More Hollywood Movies
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    imdbRating: '8.8',
    Genre: 'Action, Sci-Fi, Thriller',
    Plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    Director: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Marion Cotillard, Tom Hardy'
  },
  {
    imdbID: 'tt0109830',
    Title: 'Forrest Gump',
    Year: '1994',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    imdbRating: '8.8',
    Genre: 'Drama, Romance',
    Plot: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man.',
    Director: 'Robert Zemeckis',
    Actors: 'Tom Hanks, Robin Wright, Gary Sinise'
  },
  {
    imdbID: 'tt0137523',
    Title: 'Fight Club',
    Year: '1999',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY0NTUy._V1_SX300.jpg',
    imdbRating: '8.8',
    Genre: 'Drama',
    Plot: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much more.',
    Director: 'David Fincher',
    Actors: 'Brad Pitt, Edward Norton, Meat Loaf'
  },
  {
    imdbID: 'tt0944947',
    Title: 'Game of Thrones',
    Year: '2011–2019',
    Type: 'series',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcyNTQ@._V1_SX300.jpg',
    imdbRating: '9.3',
    Genre: 'Action, Adventure, Drama',
    Plot: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    Director: 'David Benioff, D.B. Weiss',
    Actors: 'Emilia Clarke, Peter Dinklage, Kit Harington'
  },
  {
    imdbID: 'tt0903747',
    Title: 'Breaking Bad',
    Year: '2008–2013',
    Type: 'series',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYTU3NWNhSjUtMzY0YS00Y2ZiLWFhOTAtOGQ5NGJlNzYxNjg0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg',
    imdbRating: '9.5',
    Genre: 'Crime, Drama, Thriller',
    Plot: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.',
    Director: 'Vince Gilligan',
    Actors: 'Bryan Cranston, Aaron Paul, Anna Gunn'
  },

  // More Hindi Movies
  {
    imdbID: 'tt6148156',
    Title: 'Queen',
    Year: '2013',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTMxODU1OTkwOF5BMl5BanBnXkFtZTgwNDc4MzU4MjE@._V1_SX300.jpg',
    imdbRating: '8.2',
    Genre: 'Adventure, Comedy, Drama',
    Plot: 'A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled.',
    Director: 'Vikas Bahl',
    Actors: 'Kangana Ranaut, Rajkummar Rao, Lisa Haydon'
  },
  {
    imdbID: 'tt3863552',
    Title: 'Gully Boy',
    Year: '2019',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOGRjZWU1ZTEtY2M2ZC00NDc1LTgzMGQtYWQyMGQwMDMzZWFlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    imdbRating: '7.9',
    Genre: 'Drama, Music',
    Plot: 'A coming-of-age story based on the lives of street rappers in Mumbai.',
    Director: 'Zoya Akhtar',
    Actors: 'Ranveer Singh, Alia Bhatt, Siddhant Chaturvedi'
  },
  {
    imdbID: 'tt8108274',
    Title: 'Article 15',
    Year: '2019',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZWVlZDViOGQtY2E5Ni00NzlhLWE3ODMtMzFkNmJmNzg1NGVhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    imdbRating: '8.1',
    Genre: 'Crime, Drama, Mystery',
    Plot: 'In the backdrop of the rape of three girls in a small town in UP, a newly appointed police officer investigates the case.',
    Director: 'Anubhav Sinha',
    Actors: 'Ayushmann Khurrana, Nassar, Manoj Pahwa'
  },
  
  // Additional South Indian Movies
  {
    imdbID: 'tt7838252',
    Title: 'Super Deluxe',
    Year: '2019',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNjQ0N2YzN2MtZGMzMS00MmZkLWIyM2UtZTEzZDU5NTM5NTllXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_SX300.jpg',
    imdbRating: '8.3',
    Genre: 'Drama, Mystery, Thriller',
    Plot: 'An unfaithful newly-wed wife, an estranged father, a priest and an angry son suddenly find themselves in the most unexpected predicaments.',
    Director: 'Thiagarajan Kumararaja',
    Actors: 'Vijay Sethupathi, Fahadh Faasil, Samantha Akkineni'
  },
  {
    imdbID: 'tt8239946',
    Title: 'Vikram Vedha',
    Year: '2017',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNzEyMTRmNzQtY2FhYi00OGZkLWI4ZDMtNGEzM2I2YjExMGEyXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_SX300.jpg',
    imdbRating: '8.4',
    Genre: 'Action, Crime, Drama',
    Plot: 'Vikram, an honest officer with the Lucknow police, is on a mission to find and eliminate Vedha, a gangster and drug dealer.',
    Director: 'Gayatri, Pushkar',
    Actors: 'R. Madhavan, Vijay Sethupathi, Shraddha Srinath'
  }
]

// Function to get movies by categories
export const getMoviesByCategory = (category) => {
  switch(category) {
    case 'hollywood':
      return mockMoviesDatabase.filter(movie => 
        ['tt0111161', 'tt0068646', 'tt0468569', 'tt0110912', 'tt0167260', 'tt0816692', 'tt4154796', 'tt6751668', 'tt1375666', 'tt0109830', 'tt0137523', 'tt0944947', 'tt0903747'].includes(movie.imdbID)
      )
    case 'bollywood':
      return mockMoviesDatabase.filter(movie => 
        ['tt0169547', 'tt0405159', 'tt8108198', 'tt9389998', 'tt8291224', 'tt9900782', 'tt10028196', 'tt6148156', 'tt3863552', 'tt8108274'].includes(movie.imdbID)
      )
    case 'south-indian':
      return mockMoviesDatabase.filter(movie => 
        ['tt7019842', 'tt6148156', 'tt8690344', 'tt10579952', 'tt10189514', 'tt8946378', 'tt9389998', 'tt11145118', 'tt7838252', 'tt8239946', 'tt10295212'].includes(movie.imdbID)
      )
    case 'nepali':
      return mockMoviesDatabase.filter(movie => 
        ['tt10649034', 'tt8949716', 'tt6841172', 'tt10899028', 'tt11564570', 'tt12345678'].includes(movie.imdbID)
      )
    default:
      return mockMoviesDatabase
  }
}

// Function to get random movies
export const getRandomMovies = (count = 20) => {
  const shuffled = [...mockMoviesDatabase].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}