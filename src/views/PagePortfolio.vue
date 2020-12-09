<template>
  <TmPage :sign-in-required="true">
<!--    &lt;!&ndash;  <h1>HELLO</h1>&ndash;&gt;-->
    <template slot="signInRequired">
      <Balance />
<!--      <DelegationsOverview />-->
<!--      <Undelegations />-->
    </template>
  </TmPage>
</template>

<script>
// import DelegationsOverview from "staking/DelegationsOverview"
import Balance from "../components/common/Balance"
import TmPage from "../components/common/TmPage";
// import Undelegations from "staking/Undelegations"

export default {
  name: `page-portfolio`,
  components: {
    Balance,
    TmPage,
    // Undelegations,
    // DelegationsOverview,
  },
}
</script>
