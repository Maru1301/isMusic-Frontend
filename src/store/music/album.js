import http from "@/plugins/http";
// count state 必須是 Object
const state = {
    album: {},
}

// getters 也可以整理到這邊直接返回 count 內容
const getters = {
    getAlbum: state => state.album
}

// actions 也是以 Object 形式建構。
const actions = {
    async setAlbum({ commit }, albumId) {
        const response = await http(`https://localhost:7043/Albums/${albumId}`);
        const responseAlbum = await response.json();
        commit("setAlbum", responseAlbum);
    },
}

// mutations
const mutations = {
    setAlbum(state, payload) {
        state.album = payload;
        state.album.songs.forEach(song => song.isHover = false);
    },
}

/*
  因為我們把 vuex 所有職權都寫在同一隻檔案，
  所以必須要 export 出去給最外層 index.js 組合使用
*/
export default {
    state,
    getters,
    actions,
    mutations
}