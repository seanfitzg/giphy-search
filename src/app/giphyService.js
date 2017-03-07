const giphyService = function($resource) {

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

    return returnVal;
};

export default giphyService;