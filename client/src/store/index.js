import { createStore } from "vuex";

const store = createStore({
  state: {
    language: "tr",
    languages: ["tr", "en"],
    darkMode: true,
    loading: false,
    profile: true,
    menu: true,
    loadbar: true,
  },

  mutations : {
    setLanguage(state, payload) {
      state.language = payload.language
    },

    changeMode(state) {
      state.darkMode = !state.darkMode
    },

    setLoading(state, payload) {
      state.loading = payload.loading
    },

    setProfile(state, payload) {
      state.profile = payload.profile
    },

    setMenu(state, payload) {
      state.menu = payload.menu
    },
    setLoadBar(state, payload) {
      state.loadbar = payload.loadbar
    }
  }
})

export default store;