<template>
  <AuthFrame>
    <template v-slot:icon>
      <IconLogin height="35" width="35"/>
    </template>

    <div class="card-sign-in">
      <h2>Welcome to OCTA WALLET 👋</h2>
      <h3>How would you like to get started?</h3>

      <div class="session-list">
        <LiSession
          id="create-new-address"
          title="Create a new address"
          route="/create"
        ><IconCreateAccount height="30" width="30" class="icon-action"/></LiSession>
        <LiSession id="login" title="Login" route="/login"><IconLogin height="30" width="30" class="icon-action"/></LiSession>
        <LiSession
          id="recover-with-backup"
          title="Recover with backup code"
          route="/recover"
        ><IconForgotPassword height="30" width="30" class="icon-action"/></LiSession>
      </div>
    </div>
  </AuthFrame>
</template>

<script>
// import config from "src/../config"
// import { mapState, mapGetters } from "vuex"
import IconLogin from "@/components/icons/IconLogin";
import LiSession from "@/components/auth/AuthOption";
import AuthFrame from "./AuthFrame";
import IconCreateAccount from "@/components/icons/IconCreateAccount";
import IconForgotPassword from "@/components/icons/IconForgotPassword";

export default {
  name: `card-sign-in-required`,
  components: {
    IconForgotPassword,
    IconCreateAccount,
    LiSession,
    IconLogin,
    AuthFrame,
  },
  // data: () => ({
  //   isMobileApp: config.mobileApp,
  //   isExtension: config.isExtension,
  //   loaded: false,
  // }),
  // computed: {
  //   ...mapState([`auth`, `keystore`, `extension`]),
  //   ...mapGetters([`currentNetwork`]),
  //   accountExists() {
  //     return this.keystore && this.keystore.accounts.length > 0
  //   },
  //   createAccountLink() {
  //     return this.isMobileApp || this.auth.insecureMode
  //       ? `/select-network/create`
  //       : `/create`
  //   },
  // },
  // created() {
  //   this.$store.dispatch("loadLocalAccounts").then(() => {
  //     this.loaded = true
  //   })
  // },
}
</script>
<style scoped>
h2 {
  font-size: 24px;
  font-weight: 400;
}

h2,
h3 {
  color: #374B7C;
  text-align: center;
}

.icon-action{

}

.card-sign-in {
  max-width: 600px;
  padding: 1rem 0;
  margin: 0 auto;
  width: 100%;
}

.session-list {
  width: 100%;
  padding: 2rem 0;
}

@media screen and (max-width: 667px) {
  h2,
  h3 {
    text-align: center;
    padding-left: 0;
  }
}
</style>
