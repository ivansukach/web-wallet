import Vue from "vue"
import { ApolloClient } from "apollo-boost"
import { ApolloLink, concat, split} from "apollo-link"
import { createPersistedQueryLink } from "apollo-link-persisted-queries"
import { WebSocketLink } from "apollo-link-ws"
import { InMemoryCache } from "apollo-cache-inmemory"
import { getMainDefinition } from "apollo-utilities"
import VueApollo from "vue-apollo"
import config from "../../config"
import { getFingerprint } from "../scripts/fingerprint"
import { createHttpLink } from "apollo-link-http"

Vue.use(VueApollo)

// // to avoid circular dependencies we use this error handler, for errors happening in the router
// // those errors should trigger things in the store (that needs the router)
// class DeferredErrorHandler {
//   constructor() {
//     this.errors = []
//   }
//   error(error) {
//     if (this.errorCallback) {
//       this.errorCallback(error)
//     } else {
//       this.errors.push(error)
//     }
//   }
//   onError(callback) {
//     this.errorCallback = callback
//     if (this.errors.length > 0) {
//       this.errors.forEach((error) => this.error(error))
//     }
//   }
// }
// export const apolloErrorHandler = new DeferredErrorHandler()

const makeHttpLink = () => {
  const uri = `${config.graphqlHost}/graphql`
  return createPersistedQueryLink().concat(
    createHttpLink({
      uri: uri,
    })
  )
}

const makeWebSocketLink = () => {
  const uri = `${config.graphqlHost.replace("http", "ws")}/graphql`
  return new WebSocketLink({ uri })
}

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   console.log("error")
//     alert(graphQLErrors);
//     alert(networkError);
//   })

const createApolloClient = async () => {
  const fingerprint = await getFingerprint()
  const middleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        fingerprint,
      },
    })
    return forward(operation)
  })
  const link = ApolloLink.from([
    split(
      ({ query }) => {
        const definition = getMainDefinition(query)
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        )
      },
      makeWebSocketLink(),
      makeHttpLink()
    ),
  ])


  return new ApolloClient({
    link: concat(middleware, link),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  })
}

export const createApolloProvider = async () => {
  return new VueApollo({
    defaultClient: await createApolloClient(),
    defaultOptions: {
      // apollo options applied to all queries in components
      $query: {
        fetchPolicy: "cache-and-network",
      },
    },
    errorHandler(error){
      alert(error)
    },
  })
}
