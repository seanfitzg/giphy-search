const favouritesService = function($resource) {

    var returnVal = {};

    returnVal.getFavourites = function() {
        var res = $resource('api/favourites');
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

export default favouritesService;