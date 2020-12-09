<template>
  <router-link :to="route" class="tm-li-session">
    <div class="tm-li-session-icon">
      <slot></slot>
    </div>
    <div class="tm-li-session-text">
      <div class="tm-li-session-title">
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="tm-li-session-icon arrow">
      <IconRightArrow class="svg-icon"/>
    </div>
  </router-link>
</template>

<script>
import IconRightArrow from "../icons/IconRightArrow.vue";
export default {
  name: `tm-li-session`,
  components: { IconRightArrow },
  props: {
    title: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      default: ``,
    },
  },
}
</script>

<style scoped>
.tm-li-session {
  display: flex;
  padding: 1.5rem;
  margin: 0.5rem 0;
  background-color: oldlace;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease, box-shadow 0.5s ease;
}

.tm-li-session:hover {
  cursor: pointer;
  background: mintcream;
  box-shadow: 0 0 6px aqua;
}

.arrow {
  transition: all 0.2s ease;
  left: 0;
  position: relative;
}

.tm-li-session:hover .arrow {
  left: -2px;
}

.tm-li-session-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tm-li-session-title {
  color: #4691f6;
  font-size: x-large;
  font-weight: 400;
}

.tm-li-session-text {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  padding: 0 1rem;
}
</style>
