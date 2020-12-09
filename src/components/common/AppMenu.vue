<template>
  <menu class="app-menu">
    <div class="flexible-column">
      <router-link
        class="app-menu-item"
        active-class="glow-effect"
        :to="{ name: 'portfolio'}"
        exact="exact"
        title="Portfolio"
        @click.native="handleClick()"
      >
        <h2 class="app-menu-title">Portfolio</h2>
      </router-link>
      <router-link
        class="app-menu-item"
        active-class="glow-effect"
        :to="{ name: 'validators'}"
        title="Validators"
        @click.native="handleClick()"
      >
        <h2 class="app-menu-title">Validators</h2>
      </router-link>

      <router-link
        class="app-menu-item"
        active-class="glow-effect"
        :to="{ name: 'proposals'}"
        title="Proposals"
        @click.native="handleClick()"
      >
        <h2 class="app-menu-title">Proposals</h2>
      </router-link>

      <router-link
        class="app-menu-item"
        active-class="glow-effect"
        :to="{ name: 'transactions'}"
        exact="exact"
        title="Transactions"
        @click.native="handleClick()"
      >
        <h2 class="app-menu-title">Transactions</h2>
      </router-link>

<!--      <router-link-->
<!--        class="app-menu-item hide-m"-->
<!--        to="/about"-->
<!--        exact="exact"-->
<!--        title="About"-->
<!--        @click.native="handleClick()"-->
<!--      >-->
<!--        <h2 class="app-menu-title">About</h2>-->
<!--      </router-link>-->

<!--      <router-link-->
<!--        class="app-menu-item hide-m"-->
<!--        to="/careers"-->
<!--        exact="exact"-->
<!--        title="Careers"-->
<!--        @click.native="handleClick()"-->
<!--      >-->
<!--        <h2 class="app-menu-title">Careers</h2>-->
<!--      </router-link>-->

<!--      <router-link-->
<!--        class="app-menu-item hide-m"-->
<!--        to="/security"-->
<!--        exact="exact"-->
<!--        title="Security"-->
<!--        @click.native="handleClick()"-->
<!--      >-->
<!--        <h2 class="app-menu-title">Security</h2>-->
<!--      </router-link>-->

<!--      <router-link-->
<!--        class="app-menu-item hide-m"-->
<!--        to="/terms"-->
<!--        exact="exact"-->
<!--        title="Terms"-->
<!--        @click.native="handleClick()"-->
<!--      >-->
<!--        <h2 class="app-menu-title">Terms of Service</h2>-->
<!--      </router-link>-->

<!--      <router-link-->
<!--        class="app-menu-item hide-m"-->
<!--        to="/privacy"-->
<!--        exact="exact"-->
<!--        title="Privacy"-->
<!--        @click.native="handleClick()"-->
<!--      >-->
<!--        <h2 class="app-menu-title">Privacy Policy</h2>-->
<!--      </router-link>-->
    </div>
    <Btn id="helpBtn" content="Help / Feedback"/>
  </menu>
</template>

<script>
import Btn from "./Btn";
// import { mapGetters, mapState } from "vuex"
// import { shortDecimals } from "scripts/num.js"
export default {
  name: `app-menu`,
  components: {
    Btn
  },
  // filters: {
  //   shortDecimals,
  // },
  computed: {
    // ...mapState([`connection`]),
    // ...mapGetters([`network`]),
    // networkSlug() {
    //   return "octa"
    // },
  },
  methods: {
    handleClick() {
      this.$emit(`close`)
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style scoped>
.app-menu {
  z-index: var(--z-appMenu);
  flex-grow: 3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  position: relative;
  padding: 3rem 0 0 0;
}

.app-menu-item {
  /*display: inline-block;*/
  margin: 0 1vw;
  border-radius: 5px;
  color: var(--menu-text);
  text-decoration: none;
}
.app-menu-item.glow-effect {
  background: #fff;
}

/*.app-menu-item:hover {*/
/*  background: var(--menu-dark);*/
/*}*/
.app-menu-title{
  font-weight: normal;
  margin-left: 1.5vw;
}

.app-menu-title:after {
  float: right;
  /*vertical-align: top;*/
  /*margin: 0 auto;*/
  /*text-align: center;*/
  content: '\276F';
  margin-right: 1vw;
  font-size: large;
}
.app-menu-item.router-link-exact-active h2:after {
  color: aqua;
}
#helpBtn {
  margin: 6vh 2vw;
}

.flexible-column {
  display: flex;
  flex-flow: column nowrap;
}

/*.app-menu .app-menu-item {*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*  align-items: center;*/
/*  padding: 0.5rem 0.5rem 0.5rem 0.75rem;*/
/*  margin: 0.5rem 1rem;*/
/*  font-weight: 400;*/
/*  font-size: 14px;*/
/*  color: var(--menu-text);*/
/*  border-radius: 0.25rem;*/
/*  transition: all 0.5s ease;*/
/*}*/

/*.auth-link {*/
/*  margin: 2.5rem 1rem 1rem;*/
/*}*/

/*.show-on-ledger {*/
/*  display: inline-block;*/
/*  padding-top: 1rem;*/
/*}*/

/*.show-on-ledger:hover {*/
/*  cursor: pointer;*/
/*}*/

/*.button.small.sidebar {*/
/*  display: flex;*/
/*  width: -webkit-fill-available;*/
/*}*/

/*.button.small {*/
/*  border-color: var(--menu-border);*/
/*}*/

/*.app-menu .app-menu-item--link:hover {*/
/*  color: var(--menu-link-hover);*/
/*}*/

/*.app-menu .app-menu-item.router-link-active {*/
/*  background: var(--app-nav-hover);*/
/*}*/

/*.app-menu .app-menu-item.router-link-active i {*/
/*  color: var(--highlight);*/
/*}*/

/*.app-menu .app-menu-item.router-link-active h2 {*/
/*  color: var(--menu-bright);*/
/*  font-weight: 500;*/
/*}*/

/*@media screen and (min-width: 1024px) {*/
/*  .hide-m {*/
/*    display: none !important;*/
/*  }*/
/*}*/

/*@media screen and (max-width: 1023px) {*/
/*  .hide-s {*/
/*    display: none !important;*/
/*  }*/
/*}*/

@media screen and (max-width: 1023px) {
/*  .app-menu {*/
/*    background: var(--app-nav);*/
/*    height: 100vh;*/
/*    top: 0;*/
/*    width: 100%;*/
/*    justify-content: space-between;*/
/*  }*/

/*  .app-menu .app-menu-item {*/
/*    padding: 0.5rem;*/
/*  }*/

  .app-menu-title {
    font-size: var(--xxl);
    line-height: 1.125;
    font-weight: 600;
    letter-spacing: 0.004em;
    /*color: var(--menu-dark);*/
  }
}

@media screen and (min-width: 1023px) {
  .app-menu {
    width: var(--sidebar-width);
    justify-content: space-between;
  }
}
</style>
