"use strict";

export default opts => ({
  account: require(`./account.js`).default(opts),
  keystore: require(`./keystore.js`).default(opts),
  signUp: require(`./signUp.js`).default(opts)
});
