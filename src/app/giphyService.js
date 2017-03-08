/*eslint-disable no-unused-vars */
/*eslint-disable no-console */
const giphyService = function($http) {

    var returnVal = {};

    returnVal.searchApi = function(searchTerm, offset) {

        if (!offset) offset = 0;
        return $http.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=15&offset=${offset}`);

    };

    returnVal.addToFavourites = function(data) {

        var x = $http.post('/api/favourites', data).then(
            function(success) {
                var x = success;
            },
            function(fail) {
                var x = fail;
            });
    };

    returnVal.getFavourites = function() {

        return $http.get('/api/favourites');
    };

    return returnVal;
};

export default giphyService;