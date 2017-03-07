/*eslint-disable no-unused-vars */
/*eslint-disable no-console */
export default function(favouritesService) {
    const main = this;

    main.results = [];

    function mapResults(results) {
        results.$promise.then(results => {
            let mappedResults = _.map(results.data, item => {
                return {
                    thumbnail: item.images.fixed_width_still.url,
                    fullSize: item.images.original.url,
                    source: item.source_post_url
                }
            });
            main.results = mappedResults;
        });
    }
}