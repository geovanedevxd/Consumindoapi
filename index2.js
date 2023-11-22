/*fetch('https://api.themoviedb.org/3/movie/550?api_key=7a35d28221882d138bf64d48e91856c8')

.then((resp)=> resp.json())
.then(dados => {
    dados.results.forEach((valor) => {
        console.log(dados = resp.json())
    });
})*/
 
/*async function getPopularFilmes() {
    const url = ‘//api.themoviedb.org/3/movie/550?api_key=7a35d28221882d138bf64d48e91856c8’
    const fetchResponse = await fetch(url)
    // recebe os resultados em JSON e os retorna
}*/

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTM1ZDI4MjIxODgyZDEzOGJmNjRkNDhlOTE4NTZjOCIsInN1YiI6IjY1NWQzNTBlN2YyZDRhMDBlYTI1MmI2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.03giHUhNtik270Oo1_Jze1qmZxnVpr87D0m97bwx54A'
    }
  };
  
  fetch('https://api.themoviedb.org/3/search/collection?query=Avengers&include_adult=false&language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));