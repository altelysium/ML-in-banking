import { getTokens } from "../../services/api/getTokens.service";
export const authModule = {
  state: {
    accessToken: localStorage.getItem("token") || false,
    user: null,
    tokens: null,
  },
  getters: {
    isAuth: (state) => {
      return !!state.accessToken;
    },
  },
  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token;
      localStorage.setItem("token", state.accessToken);
    },
    setUser(state, user) {
      state.user = user;
    },
    setTokens(state, tokens) {
      state.tokens = tokens;
    },
  },
  actions: {
    async login({ state, commit }, { username, password }) {
      commit("setTokens", await getTokens(username, password));
      if (state.tokens.accessToken) {
        commit("setAccessToken", state.tokens.accessToken);
        commit("setUser", state.tokens.username);
      }
    },
  },
};
