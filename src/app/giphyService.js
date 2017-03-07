/*eslint-disable no-unused-vars */
/*eslint-disable no-console */
const giphyService = function($resource, $http) {

    var returnVal = {};

    returnVal.searchApi = function(searchTerm, offset) {

        if (!offset) offset = 0;

        var res = $resource(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=15&offset=${offset}`);
        return res.get(
            function(results) {
                return results;
            },
            function(err) {
                return err;
            });
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