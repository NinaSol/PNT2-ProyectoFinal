import { defineStore } from "pinia";

export const useStore = defineStore("userStore", {
  //state
  state: () => ({
    _userName: "",
    _userEmail: "",
  }),
  actions: {
    setUserName(userName) {
      this._userName = userName;
    },

    setUserEmail(userEmail) {
        this._userEmail = userEmail;
    }
  },
  getters: {
    userName() {
      return this._userName;
    },
    userEmail() {
      return this._userEmail;
    },
  },
});
