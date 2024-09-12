// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    {title:"shape of you", artist: "Ed sheeran", genre:"Pop"},
    {title: "Crush", artist: "yuna ft Usher", genre:"R&B"},
    {title: "So Amazing", artist: "Stevie wonder ft Beyonce", genre:"R&B"},
    {title: "Dance with my father", artist: "Luther vandross", genre:"R&B"},
    {title: "Adorn", artist: "Miguel", genre:"R&B"},
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here 
    const container = document.getElementById('playlists');

    //clear previous content
    container.innerHTML = '';

    // Each Guardians preffered Genre
    Object.entries(guardians).map(([guardian, preferredGenre]) => {
     const playlist = songs.filter((song) => song.genre ===preferredGenre);

        // Div for Guardians Playlist
        const guardianDiv = document.createElement('div');
        guardianDiv.classList.add('playlist');

        // Playlist heading
        guardianDiv.innerHTML = `<h3>${guardian}'s Playlist (${preferredGenre})</h3>`;

        // songs on each guardian's playlist
        playlist.map((song) => {
            const songItem = document.createElement('p');

            //<a> tag with href for each song title
            songItem.innerHTML = `<a href="#" target="_blank"><strong>${song.title}</strong></a> by ${song.artist}`;

            // Append the song item to the guardian's playlist div
            guardianDiv. appendChild(songItem);
        })

        // Append the playlist div to the main container
        container.appendChild(guardianDiv);
    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


