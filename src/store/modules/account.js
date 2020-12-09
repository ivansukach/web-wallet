import config from "../../../config";
import axios from "axios";

export default () => {
  const state = {
    authenticated: false,
    user: {
      email: ``,
      address: ``,
      balance: {
        denom: ``,
        amount: 0
      }
    },
  };
  const mutations = {
    updateAuthStatus(state, status) {
      state.authenticated = status;
    },
    setUserData(state, userData) {
      state.user.email = userData.email;
      state.user.address = userData.address;
    },
    setUserBalance(state, userBalance) {
      state.user.balance.denom = userBalance.denom;
      state.user.balance.amount = userBalance.amount;
    }
  };
  const actions = {
    async loadUserData({ commit }) {
      // const data = "1, 2, 3"
      // console.log(JSON.parse(data))
      const email = localStorage.getItem("email")
      const address = localStorage.getItem("address")
      const wallet = localStorage.getItem("wallet")
      commit(`setUserData`, { email, address });
      if (email && address && wallet){
        commit(`updateAuthStatus`, true);
      }
    },
    async getBalance({ commit, state }) {
      const url = `${config.API}/auth/accounts/${state.user.address}`;
      try{
        const acc = (await axios.get(url)).data;
        console.log(acc);
        commit(`setUserBalance`, acc.result.value.coins[0]);
      } catch(error) {
        alert(error)
      }


    },
  };
  return {
    state,
    mutations,
    actions
  };
};
