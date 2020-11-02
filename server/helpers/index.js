exports.sortMoviesByTitle = (movies) => {  
  movies.sort(function (a, b) {
    if (a.title > b.title) {
        return 1;
    }
    if (b.title > a.title) {
        return -1;
    }
    return 0;
  }); 
  return movies    
}