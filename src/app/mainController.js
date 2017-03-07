/*eslint-disable no-unused-vars */
/*eslint-disable no-console */

import _ from 'lodash';

export default function(giphyService) {
    const main = this;


    let lastCallToApi = {};

    main.offset = 0;
    main.search = "test";
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

    main.getCats = function(offset) {
        let results = giphyService.searchApi('cats', offset);
        if (lastCallToApi !== main.getCats) main.offset = 0
        lastCallToApi = main.getCats;
        mapResults(results);
    }

    main.getDogs = function(offset) {
        let results = giphyService.searchApi('dogs', offset);
        if (lastCallToApi !== main.getDogs) main.offset = 0
        lastCallToApi = main.getDogs;
        mapResults(results);
    }

    main.more = function() {
        main.offset += 15;
        lastCallToApi(main.offset);
    }

    main.back = function() {
        main.offset -= 15;
        if (main.offset <= 0) main.offset = 0;
        lastCallToApi(main.offset);
    }

    main.displayPopup = function(item) {
        main.selected = item.fullSize;
        main.sourceUrl = item.source;
    }
}