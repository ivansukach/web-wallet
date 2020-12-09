// import {
//   Secp256k1HdWallet,
//   makeCosmoshubPath,
//   // SigningCosmosClient,
//   // coins,
//   // GasPrice
// } from "@cosmjs/launchpad";
// import config from "../../../config";
// import axios from "axios";

export default () => {
  const state = {
    email: "",
    password: "",
    confirmPassword: "",
    mnemonicPhrase: "",
    warning: false
  };
  const mutations = {
    updateField(state, payload) {
      state[payload.field] = payload.value;
    }
  };
  const actions = {
    // async createKey({ state }) {
    //   // return new Promise(async (resolve, reject) => {
    //   // console.log(state.mnemonic);
    //   const wallet = await Secp256k1HdWallet.fromMnemonic(
    //     state.mnemonic,
    //     makeCosmoshubPath(0),
    //     config.ADDRESS_PREFIX
    //   );
    //   const [{ address }] = await wallet.getAccounts();
    //   const serializedWallet = await wallet.serialize(state.password);
    //   console.log("serialized wallet: " + serializedWallet);
    //   localStorage.setItem("address", address);
    //   console.log("address: " + address);
    //   localStorage.setItem("wallet", serializedWallet);
    //   // const restored = await Secp256k1Wallet.deserialize(serialized, "my password");
    //   // console.log("restored: "+restored);
    //   // const bufferAddress = "cosmos1xr6snj7cfst8eyja5fwsed6n5gvxyvc0f46c68";
    //   // const walletBuffer = await Secp256k1HdWallet.fromMnemonic(
    //   //   "brand slot learn draft unfold person rifle fit code globe hip coast woman view review spy orchard range kangaroo adult apple tank across analyst",
    //   //   makeCosmoshubPath(0),
    //   //   config.ADDRESS_PREFIX
    //   // );
    //   // const url = `${config.API}/auth/accounts/cosmos1xr6snj7cfst8eyja5fwsed6n5gvxyvc0f46c68`;
    //   // const acc = (await axios.get(url)).data;
    //   // console.log(acc);
    //   // const client = new LcdClient(config.API);
    //   // const gasPrice = GasPrice.fromString("0.00000025octa");
    //   // const gasLimits = { send: 80000 };
    //   // const client = new SigningCosmosClient(
    //   //   config.API,
    //   //   address,
    //   //   wallet,
    //   //     gasPrice,
    //   //     gasLimits
    //   // );
    //   // console.log(signingClient);
    //   // const response = await client.nodeInfo();
    //   // console.log(response);
    //   // const msgSend = {
    //   //   type: "cosmos-sdk/MsgSend",
    //   //   value: {
    //   //     from_address: bufferAddress,
    //   //     to_address: "cosmos1p09gjmhtjtfqanv4k35x4s25ekdgmyr5dsl4e5",
    //   //     amount: "1octa"
    //   //   }
    //   // };
    //   // const fee = {
    //   //   amount: [],
    //   //   gas: "200000",
    //   // };
    //   // signingClient
    //   //   .sendTokens(
    //   //     address,
    //   //     coins(1, "octa")
    //   //   )
    //   //   .then(response => {
    //   //     console.log(response);
    //   //   });
    //   const url = `${config.API}/auth/accounts/${address}`;
    //   const acc = (await axios.get(url)).data;
    //   console.log(acc);
    // }
  };
  return {
    state,
    mutations,
    actions
  };
};
