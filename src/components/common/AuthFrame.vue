<template>
  <transition name="component-fade" mode="out-in">
    <div class="session-frame">
      <!--      @keyup.esc="closeModal()"-->
      <div class="session-outer-container">
        <div class="modal-icon"><slot name="icon"></slot></div>
        <div class="session">
          <div class="session-header">
            <a class="control-container" @click="goBack()">
              <IconLeftArrow class="svg-icon" />
            </a>
            <a class="control-container" @click="closeModal()">
              <IconClose class="svg-icon" />
            </a>
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// import config from "src/../config"
// import { mapState, mapGetters } from "vuex"
import IconClose from "../icons/IconClose.vue";
import IconLeftArrow from "../icons/IconLeftArrow.vue";

export default {
  name: `auth-frame`,
  components: {
    IconLeftArrow,
    IconClose
  },
  // data: () => ({
  //   isExtension: config.isExtension,
  // }),
  // computed: {
  //   ...mapState([`auth`]),
  //   ...mapGetters([`networkSlug`]),
  // },
  methods: {
    goBack() {
      try {
        this.$router.go(-1);
      } catch (error) {
        this.$router.push({
          name: "validators"
        });
      }
    },
    closeModal() {
      if (this.$store.state.account.userSignedIn) {
        this.$router.push({
          name: `portfolio`
        });
      } else {
        this.$router.push({
          name: `validators`
        });
      }
    }
  }
};
</script>

<style>
@import "../../styles/session.css";

.invisible {
  visibility: hidden;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter,
.component-fade-leave-to .component-fade-leave-active {
  opacity: 0;
}

.control-container {
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0 0 4px transparent;
  transition: box-shadow 0.5s ease-in-out;
}
.control-container:hover {
  border-color: aqua;
  box-shadow: 0 0 4px aqua;
}

/*.icon-circle {*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  background: var(--app-fg);*/
/*  color: var(--dim);*/
/*  border-radius: 50%;*/
/*  padding: 2.5rem;*/
/*  position: absolute;*/
/*  top: 0.6rem;*/
/*  left: 40%;*/
/*  z-index: 1;*/
/*  width: 4rem;*/
/*  height: 4rem;*/
/*}*/

/*.icon-image {*/
/*  width: 2rem;*/
/*  height: 2rem;*/
/*  transform: scaleX(-1);*/
/*  filter: invert(85%) sepia(9%) saturate(18%) hue-rotate(6deg) brightness(85%)*/
/*    contrast(87%); !* converts to same than var(--dim) *!*/
/*}*/
</style>
