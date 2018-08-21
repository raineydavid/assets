(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "xxx",
        devKey: "xxx",
        showLatestChannel: true,
        channels: [
            {
                type: "playlist",
                id: "xxx",
                title: "Curation of videos"
            },
            {
                type: "searchterm",
                query: "women tech",
                title: "Women In Tech Videos"
            },

        ],
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));
