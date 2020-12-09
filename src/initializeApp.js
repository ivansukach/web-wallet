import {createApolloProvider} from "./gql/apollo.js";
import Store from "./store";
// import config from "../config";
// import axios from "axios";

export const bootError = (error) => {
    document.querySelector("#app").innerHTML = `
  <div class="boot-error">
    <h2>OCTA web wallet failed to start. Please try refreshing this page in a few minutes. 
    If the error persists please contact us <a href="mailto:help@octa-coin.com">help@octa-coin.com</a></h2>
    <p class="error">${error}</p>
  </div>
    `
}
export default async function init() {
    // let initialized = false
    const apolloProvider = await createApolloProvider().catch(error => {
        bootError(error);
    });
    const store = Store({apollo: apolloProvider.defaultClient})
    await store.dispatch(`loadUserData`)
      // const url = `${config.API}/auth/accounts/cosmos1xr6snj7cfst8eyja5fwsed6n5gvxyvc0f46c68`;
      // const acc = (await axios.get(url)).data;
      // console.log(acc);
    // await apolloProvider.defaultClient.query({
    //     query: Validators,
    //     fetchPolicy: "network-only",
    // })
    // initialized = true
    return {apolloProvider, store}

}