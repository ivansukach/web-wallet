import {makeCosmoshubPath, Secp256k1HdWallet} from "@cosmjs/launchpad";
import config from "../../../config";
// import axios from "axios";
// import {generateMnemonic} from "bip39";

export default () => {
  const state = {
    accounts: []
  };
  const mutations = {};
  const actions = {
    // async generateMnemonic() {
    //   const { generateMnemonic } = await import("bip39");
    //   return generateMnemonic();
    // }
    async createSeed() {
      alert("seed")
      const { getSeed } = await import("@lunie/cosmos-keys")
      return getSeed()
    },
    async createKey(store, { email, password, mnemonicPhrase }) {
      // return new Promise(async (resolve, reject) => {
      // console.log(state.mnemonic);
      console.log("createKey")
      console.log("email", email)
      console.log("password", password)
      console.log("mnemonicPhrase", mnemonicPhrase)
      const wallet = await Secp256k1HdWallet.fromMnemonic(
          mnemonicPhrase,
          makeCosmoshubPath(0),
          config.ADDRESS_PREFIX
      );
      const [{ address }] = await wallet.getAccounts();
      const serializedWallet = await wallet.serialize(password);
      console.log("serialized wallet: " + serializedWallet);
      localStorage.setItem("address", address);
      console.log("address: " + address);
      localStorage.setItem("email", email);
      localStorage.setItem("wallet", serializedWallet);
      // const restored = await Secp256k1Wallet.deserialize(serialized, "my password");
      // console.log("restored: "+restored);
      // const bufferAddress = "cosmos1xr6snj7cfst8eyja5fwsed6n5gvxyvc0f46c68";
      // const walletBuffer = await Secp256k1HdWallet.fromMnemonic(
      //   "brand slot learn draft unfold person rifle fit code globe hip coast woman view review spy orchard range kangaroo adult apple tank across analyst",
      //   makeCosmoshubPath(0),
      //   config.ADDRESS_PREFIX
      // );
      // const url = `${config.API}/auth/accounts/cosmos1xr6snj7cfst8eyja5fwsed6n5gvxyvc0f46c68`;
      // const acc = (await axios.get(url)).data;
      // console.log(acc);
      // const client = new LcdClient(config.API);
      // const gasPrice = GasPrice.fromString("0.00000025octa");
      // const gasLimits = { send: 80000 };
      // const client = new SigningCosmosClient(
      //   config.API,
      //   address,
      //   wallet,
      //     gasPrice,
      //     gasLimits
      // );
      // console.log(signingClient);
      // const response = await client.nodeInfo();
      // console.log(response);
      // const msgSend = {
      //   type: "cosmos-sdk/MsgSend",
      //   value: {
      //     from_address: bufferAddress,
      //     to_address: "cosmos1p09gjmhtjtfqanv4k35x4s25ekdgmyr5dsl4e5",
      //     amount: "1octa"
      //   }
      // };
      // const fee = {
      //   amount: [],
      //   gas: "200000",
      // };
      // signingClient
      //   .sendTokens(
      //     address,
      //     coins(1, "octa")
      //   )
      //   .then(response => {
      //     console.log(response);
      //   });
      store.commit(`updateAuthStatus`, true )
      // const url = `${config.API}/auth/accounts/${address}`;
      // const acc = (await axios.get(url)).data;
      // console.log(acc);
    }
  };
  return {
    state,
    mutations,
    actions
  };
};
