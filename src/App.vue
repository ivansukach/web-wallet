<template>
  <div id="app">
    <AppHeader />
    <div id="app-content">
<!--      <div id="bar-container">-->
<!--        <CookieBar v-if="!isMobileApp" />-->
<!--        &lt;!&ndash;        <MaintenanceBar />&ndash;&gt;-->
<!--        &lt;!&ndash;        <DisconnectedBar />&ndash;&gt;-->
<!--      </div>-->
<!--      <UserMenu v-if="!isMobileApp" />-->
      <router-view name="auth" />
      <router-view />
    </div>
    <!--    <MobileMenu />-->
  </div>
</template>

<script>
import AppHeader from "./components/common/AppHeader"

export default {
  name: `app`,
  components: {
    AppHeader,
    // CookieBar,
    // DisconnectedBar,
    // UserMenu,
    // MaintenanceBar,
    // MobileMenu,
  },
}
</script>


<style>
@import "./styles/app.css";
</style>
