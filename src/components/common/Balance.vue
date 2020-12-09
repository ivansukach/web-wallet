<template>
  <section class="control-panel">
    <div>
      Balance
      <div>{{user.email}}</div>
      <div>{{user.address}}</div>
      <div><span id="amountCoins">{{user.balance.amount}}</span><span>{{user.balance.denom}}</span></div>
    </div>
    <div>
      Send Panel
    </div>
  </section>

</template>
<script>
// import { bigFigureOrShortDecimals } from "scripts/num"
// import { noBlanks } from "src/filters"
// import Btn from "./Btn"
// import SendModal from "src/ActionModal/components/SendModal"
// import DelegationModal from "src/ActionModal/components/DelegationModal"
// import UndelegationModal from "src/ActionModal/components/UndelegationModal"
// import ModalWithdrawRewards from "src/ActionModal/components/ModalWithdrawRewards"
// import ModalTutorial from "common/ModalTutorial"
// import TableBalances from "common/TableBalances"
import { mapGetters } from "vuex"
// import gql from "graphql-tag"
// import { sendEvent } from "scripts/google-analytics"
// import config from "src/../config"

export default {
  name: `tm-balance`,
  components: {
    // Btn,
    // SendModal,
    // DelegationModal,
    // UndelegationModal,
    // ModalWithdrawRewards,
    // ModalTutorial,
    // TableBalances,
  },
  beforeMount() {
    this.$store.dispatch(`getBalance`)
  },
  // filters: {
  //   noBlanks,
  // },
  // data() {
  //   return {
  //     sentToGA: false,
  //     rewardsSentToGA: false,
  //     balances: [],
  //     showTutorial: false,
  //     rewards: [],
  //     preferredCurrency: "USD",
  //     cosmosTokensTutorial: {
  //       fullguide: `https://lunie.io/guides/how-to-get-tokens/`,
  //       background: `red`,
  //       steps: [
  //         {
  //           title: "How to get tokens",
  //           // Each content array item will be enclosed in a span (newline)
  //           content: [
  //             "The easiest way to get tokens is to find a reputable exchange, like Coinbase or Binance, to purchase your tokens from.",
  //           ],
  //           affiliate: [
  //             {
  //               text:
  //                 "Need some ATOM to stake with Lunie? Buy some at today at",
  //               link: config.referralLinks["Coinbase"],
  //               linkText: "Coinbase",
  //               onClickFunction: this.sendAffiliateClickEvent,
  //               onClickParam: "Coinbase",
  //             },
  //           ],
  //         },
  //         {
  //           title: "Create your address",
  //           content: [
  //             "You can create an address with Lunie using our browser extension, our mobile wallets or a Ledger Nano hardware wallet.",
  //           ],
  //         },
  //         {
  //           title: "Back it up!",
  //           content: [
  //             "When you create an address, ensure your backup code is correct and in a secure place. We don't recommend using an address if you haven't backed it up appropriately.",
  //           ],
  //         },
  //         {
  //           title: "Send to your address",
  //           content: [
  //             "The short version of your address will look something like this: cosmos...7yqp. Make sure to use the full version of your address to successfully receive tokens.",
  //           ],
  //         },
  //         {
  //           title: "Have more questions?",
  //           content: [
  //             "Check out our full guide to getting tokens so you can start staking!",
  //           ],
  //         },
  //       ],
  //     },
  //   }
  // },
  computed: {
    //   ...mapState([`connection`, `session`]),
    ...mapGetters([
      `user`,
      //     `networks`,
      //     `network`,
      //     `stakingDenom`,
      //     `currentNetwork`,
    ]),
  }
  //   // only be ready to withdraw of the validator rewards are loaded and the user has rewards to withdraw
  //   // the validator rewards are needed to filter the top 5 validators to withdraw from
  //   readyToWithdraw() {
  //     return Object.values(this.totalRewardsPerDenom).find((value) => value > 0)
  //   },
  //   getAllDenoms() {
  //     if (this.balances.length > 0) {
  //       const balances = this.balances
  //       return balances.map(({ denom }) => denom)
  //     } else {
  //       return [this.stakingDenom]
  //     }
  //   },
  //   totalRewardsPerDenom() {
  //     return this.rewards.reduce((all, reward) => {
  //       return {
  //         ...all,
  //         [reward.denom]: parseFloat(reward.amount) + (all[reward.denom] || 0),
  //       }
  //     }, {})
  //   },
  //   totalRewards() {
  //     return this.totalRewardsPerDenom[this.stakingDenom] || 0
  //   },
  //   isTestnet() {
  //     return this.networks.find((network) => network.id === this.network)
  //       .testnet
  //   },
  // },
  // watch: {
  //   totalRewards(totalRewards) {
  //     if (this.rewards && !this.rewardsSentToGA) {
  //       this.sendRewards(totalRewards)
  //     }
  //   },
  // },
  // mounted: function () {
  //   const persistedPreferredCurrency = this.session.preferredCurrency
  //   if (persistedPreferredCurrency) {
  //     this.preferredCurrency = persistedPreferredCurrency
  //   }
  // },
  // methods: {
  //   onWithdrawal() {
  //     this.$refs.ModalWithdrawRewards.open()
  //   },
  //   onSend(denom = undefined) {
  //     this.$refs.SendModal.open(denom)
  //   },
  //   onStake(amount) {
  //     this.$refs.StakeModal.open()
  //   },
  //   onUnstake(amount) {
  //     this.$refs.UnstakeModal.open()
  //   },
  //   openTutorial() {
  //     this.showTutorial = true
  //   },
  //   hideTutorial() {
  //     this.showTutorial = false
  //   },
  //   setPreferredCurrency() {
  //     this.$store.dispatch(`setPreferredCurrency`, this.preferredCurrency)
  //   },
  //   sendRewards(totalRewards) {
  //     // sending to ga only once
  //     sendEvent(
  //       {
  //         network: this.network,
  //         address: this.address,
  //       },
  //       "Portfolio",
  //       "Balance",
  //       "totalRewards",
  //       totalRewards
  //     )
  //     this.rewardsSentToGA = true
  //   },
  //   /* istanbul ignore next */
  //   sendAffiliateClickEvent(partner) {
  //     sendEvent(
  //       {
  //         network: this.network,
  //         address: this.address,
  //       },
  //       "Portfolio",
  //       "Tutorials",
  //       `linkTo${partner}`,
  //       "click"
  //     )
  //   },
  // },
  // apollo: {
  //   balances: {
  //     query: gql`
  //       query($networkId: String!, $address: String!, $fiatCurrency: String) {
  //         balancesV2(
  //           networkId: $networkId
  //           address: $address
  //           fiatCurrency: $fiatCurrency
  //         ) {
  //           id
  //           type
  //           denom
  //           available
  //           total
  //           fiatValue {
  //             amount
  //             denom
  //             symbol
  //           }
  //         }
  //       }
  //     `,
  //     /* istanbul ignore next */
  //     variables() {
  //       return {
  //         networkId: this.network,
  //         address: this.address,
  //         fiatCurrency: this.preferredCurrency,
  //       }
  //     },
  //     /* istanbul ignore next */
  //     skip() {
  //       return !this.address
  //     },
  //     update(result) {
  //       return result.balancesV2
  //     },
  //   },
  //   rewards: {
  //     query: gql`
  //       query rewards(
  //         $networkId: String!
  //         $delegatorAddress: String!
  //         $fiatCurrency: String
  //       ) {
  //         rewards(
  //           networkId: $networkId
  //           delegatorAddress: $delegatorAddress
  //           fiatCurrency: $fiatCurrency
  //         ) {
  //           id
  //           amount
  //           denom
  //         }
  //       }
  //     `,
  //     /* istanbul ignore next */
  //     variables() {
  //       return {
  //         networkId: this.network,
  //         delegatorAddress: this.address,
  //         fiatCurrency: this.preferredCurrency,
  //       }
  //     },
  //     /* istanbul ignore next */
  //     skip() {
  //       return !this.address
  //     },
  //   },
  //   $subscribe: {
  //     blockAdded: {
  //       /* istanbul ignore next */
  //       variables() {
  //         return {
  //           networkId: this.network,
  //         }
  //       },
  //       /* istanbul ignore next */
  //       query() {
  //         return gql`
  //           subscription($networkId: String!) {
  //             blockAdded(networkId: $networkId) {
  //               height
  //               chainId
  //             }
  //           }
  //         `
  //       },
  //       /* istanbul ignore next */
  //       result() {
  //         /* istanbul ignore next */
  //         this.$apollo.queries.balances.refetch()
  //         this.$apollo.queries.rewards.refetch()
  //       },
  //     },
  //   },
  // },
}
</script>
<style scoped>
.control-panel{
  width: 76vw;
  margin: 0 1.9vw;
  height: 60vh;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
}
.control-panel > *{
  width: 50%;
  height: calc(100% - 4vw);
  margin: 2vw;
  border: 1px solid orange;
}
#amountCoins{
  margin-right: 5px;
}
@media screen and (max-width: 1024px) {
  .control-panel {
    width: 96vw;
    flex-direction: column;
  }
  .control-panel > *{
    width: calc(100% - 4vw);
    height: 50%;
  }
}



</style>
