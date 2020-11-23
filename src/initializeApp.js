import { createApolloProvider} from "./gql/apollo.js";

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
    const apolloProvider = await createApolloProvider()
    // apolloErrorHandler.onError((error) => {
    //     console.error(error)
    //     alert("initialized: "+initialized)
    //     if (!initialized) {
    //         alert("not initialized")
    //         bootError(new Error("Failed to connect to API: " + error.message))
    //     }
    // })
    // await apolloProvider.defaultClient.query({
    //     query: Validators,
    //     fetchPolicy: "network-only",
    // })
    // initialized = true
    return {apolloProvider}

}