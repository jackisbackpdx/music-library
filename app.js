const main = document.getElementById('summary');
console.log(main);

const tameImpala = {
    artist: 'Tame Impala',
    album: 'Currents',
    releaseDate: 'July 27, 2015',
    image: '../assets/tame-impala.png'
};

const dominicFike = {
    artist: 'Dominic Fike',
    album: 'Don\'t Forget About Me, Demons',
    releaseDate: 'October 16, 2018',
    image: '../assets/courtney-barnett.jpg'
};

const theShins = {
    artist: 'The Shins',
    album: 'Oh, Inverted World',
    releaseDate: 'February 19, 2001',
    image: 'https://i.imgur.com/6l0gdp6.jpg'
};

const courtneyBarnett = {
    artist: 'Courtney Barnett',
    album: 'Sometimes I Sit and Think, and Sometimes I Just Sit',
    releaseDate: 'March 20, 2015',
    image: 'https://i.imgur.com/XYwFujW.jpg'
};

const songs = [
    tameImpala,
    dominicFike,
    theShins,
    courtneyBarnett
];

let cards = [];

for(let i = 0; i < songs.length; i++) {
    let song = songs[i];
    
    const placeCard = document.createElement('div');
    placeCard.classList.add('place-card');
  
    let img = document.createElement('img');
    img.setAttribute('src', song.image);
    placeCard.appendChild(img);
    
    let details = document.createElement('aside');
  
    const artist = document.createElement('h1');
    artist.textContent = song.artist;
  
    const album = document.createElement('p');
    album.textContent = song.album;
  
    const releaseDate = document.createElement('p');
    releaseDate.textContent = song.releaseDate;
    
    details.appendChild(artist);
    details.appendChild(album);
    details.appendChild(releaseDate);
    releaseDate.classList.add('release-date');
  
    placeCard.appendChild(details);
    main.appendChild(placeCard);
  
    cards.push(placeCard);
}

cards[0].style.left = '3%';
cards[1].style.left = '38%';
cards[2].style.left = '73%';
cards[3].style.display = 'none';

const right = document.getElementById('right');

right.addEventListener('click', function() {
    for(let i = 0; i < cards.length; i++) {
        let styleLeft = parseInt(cards[i].style.left);
        styleLeft += 35;
        cards[i].style.left = styleLeft + '%';
      
        if(cards[i].style.display === 'none') {
            cards[i].style.display = 'initial';
            cards[i].style.left = '3%';
        }
    }
    for(let i = 0; i < cards.lenth; i++) {
        if(cards[i].style.left === '108%') {
            console.log(cards[i].style.left);

        }
    }
});