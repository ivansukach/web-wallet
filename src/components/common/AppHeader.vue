<template>
  <nav
    class="app-header"
    :class="{ hideSidebarMenu: hideSidebarMenu, open: open}"
  >
    <div v-show="!hideSidebarMenu" class="container" :class="{ open: open }">
      <div class="header-item" :class="{ open: open }">
        <a href="https://octa-coin.com">
          <img
              class="header-item-logo"
              src="../../styles/images/logo.png"
              alt="OCTA"
          />
        </a>
        <div class="header-menu-section">
          <template v-if="!desktop">
<!--            <UserMenu v-if="isMobileApp" />-->
            <div v-if="open" class="control-menu closeButton" @click="close()"></div>
            <div v-else class="control-menu openButton" @click="show()"></div>
          </template>
        </div>
      </div>
      <AppMenu v-if="open || desktop" @close="close" />
    </div>
  </nav>
</template>


<script>
// import { mapState } from "vuex"
import AppMenu from "./AppMenu"
// import UserMenu from "account/UserMenu"
export default {
  name: `app-header`,
  components: {
    AppMenu,
    // UserMenu,
  },
  data: () => ({
    open: false,
    desktop: false,
  }),
  computed: {
  //   ...mapState([`session`, `connection`]),
  //   networkSlug() {
  //     return this.connection.networkSlug
  //   },
  //   isMobileApp() {
  //     return this.session.mobile
  //   },
    hideSidebarMenu() {
      return !this.$route.meta.networkSpecificRoute && this.desktop;
    },
  },
  mounted: async function () {
    this.watchWindowSize()
    window.addEventListener('resize', this.watchWindowSize);
  },
  methods: {
    close() {
      this.open = false
    },
    show() {
      this.open = true
    },
    watchWindowSize() {
      if (window.innerWidth >= 1024) {
        this.close()
        this.desktop = true
        return
      } else {
        this.desktop = false
      }
    },
  },
}
</script>

<style>
.app-header {
  z-index: var(--z-appHeader);
  position: relative;
  height: 100vh;
  width: var(--sidebar-width);
  background-color: var(--menu-background);
  box-shadow:0 0 10px lightblue;
  /*display: flex;*/
  /*flex-direction: row;*/
}

.app-header .hideSidebarMenu {
  display: none;
}

.control-menu{
  font-size: var(--xxl);
  line-height: 100%;
}

.openButton:after{
  content: '\2630';
}
.closeButton:after{
  content: '\2612';
}

/*.container {*/
/*  display: flex;*/
/*  width: var(--sidebar-plus-width);*/
/*  flex-direction: row;*/
/*}*/

/*.app-header .header-item.open {*/
/*  background: var(--app-nav);*/
/*}*/

/*.mobile-menu-action {*/
/*  font-size: 1.5rem !important;*/
/*}*/

.container {
  flex: 1;
  display: flex;
  height: 100%;
  width: var(--sidebar-width);
  background: var(--app-nav);
  flex-flow: column nowrap;
  padding-top: 1.4rem;
}

.header-item-logo {
  width: 10vw;
  min-width: 100px;
  margin: 2vh 0 2vh 1vw;
}

/*.header-menu-section {*/
/*  display: inline-block;*/
/*  float: right;*/
/*  vertical-align: middle;*/
/*  !*align-items: center;*!*/
/*}*/

/*.header-menu-section > * {*/
/*  padding: 0 0.5rem;*/
/*}*/

/*.mobile-menu-action,*/
/*.header-menu-section a {*/
/*  color: azure;*/
/*}*/

/*.app-header .header-item {*/
/*  padding: 1.75rem;*/
/*  font-size: 0;*/
/*}*/

.app-header .header-item a {
  display: inline-block;
}

@media screen and (max-width: 1023px) {
  .app-header {
    width: 100%;
    height: auto;
    vertical-align: center;
    /*min-height: 0;*/
  }
    .app-header.open {
      height: 100vh;
    }

    /*.app-header > .container {*/
    /*  height: auto;*/
    /*}*/

  .container {
    width: 100%;
    padding: 0;
  }

  .app-header .header-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1vw;
/*    padding: 0.5rem 0.5rem 0.5rem 1rem;*/
/*    !*color: var(--link);*!*/
/*    cursor: pointer;*/
  }

/*  .header-item-logo {*/
/*    height: 1.75rem;*/
/*  }*/
}

/*@media screen and (min-width: 1024px) {*/
/*  .app-header > .container {*/
/*    position: fixed;*/
/*    height: 100%;*/
/*    background: var(--app-nav);*/
/*  }*/
/*}*/


</style>
