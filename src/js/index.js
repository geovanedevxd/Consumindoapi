function renderizarFilme(movie) {
    const { title, image, rating, year, description, isFavorited } = movie
    console.log(`Título: ${filme.title}`);
    console.log(`Avaliação: ${filme.rating}`);
    console.log(`Ano: ${filme.year}`);
    console.log(`Descrição: ${filme.description}`);
    console.log(`Favorito: ${filme.isFavorited ? 'Sim' : 'Não'}`);
    console.log('---');
}

const movies = [
    
    {
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
        title: 'Avengers',
        id:54321,
        rating: 9.2,
        year: 2019,
        description: 'Descrição do filme...',
        isFavorited: false,
    },
    {
        image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
        title: 'Batman',
        id:12345,
        rating: 9.2,
        year: 2022,
        description: 'Descrição do filme...',
        isFavorited: true,
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
        title: 'Doctor Strange',
        id:123456,
        rating: 9.2,
        year: 2022,
        description: 'Descrição do filme...',
        isFavorited: false,
    },
    {   
        id:1234567,
        image: 'https://pt.wikipedia.org/wiki/Avatar_%28filme%29#/media/Ficheiro:Avatar-Teaser-Poster.jpg',
        title: 'Avatar',
        rating: 9.5,
        year: 2009,
        description: 'Descrição do filme...',
        isFavorited: false,
    },
];

//filmes.forEach(movie => renderizarFilme(movie));
//let filme = movie
localStorage.setItem('filmes','54321');
console.log(id=1234567)
/*function getFavoriteMovies() {
    return JSON.parse(localStorage.getItem(

        ))
}*/
