import { createStore } from "vuex";
import album from "./music/album";
import artist from "./music/artist";
import creator from "./music/creator";
import playlist from "./music/playlist";
import popular from "./music/popular";
import queue from "./music/queue";
import SongGenres from "./music/songGenres";
import login from "./login/login";
import library from "./music/library";
import shop from "./Shop/shop";

export default createStore({
    modules: {
        login,
        shop,
        music: {
            namespaced: true,
            modules: {
                album,
                artist,
                creator,
                playlist,
                popular,
                queue,
                SongGenres,
                library,
            },
        },
    },
});