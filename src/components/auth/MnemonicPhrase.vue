<template>
  <div class="mnemonic-phrase">
    <div class="mnemonic-warning">
      <p>
        This mnemonic phrase is all that is needed to access your account. Please
        make sure to store it in a safe place.
      </p>
    </div>
    <div
      v-clipboard:copy="value"
      v-clipboard:success="() => onCopy()"
      class="copy-mnemonic"
    >
      Copy to clipboard
      <IconCopy class="copy-icon" :class="{copied: copied}" height="20" width="20" />
    </div>
    <div>
      <table class="mnemonic-table">
        <tr>
          <td v-for="(word, index) in splitMnemonic.slice(0, 6)" :key="index">
            <span class="word-number">{{ index + 1 }}</span>
            {{ word }}
          </td>
        </tr>
        <tr>
          <td v-for="(word, index) in splitMnemonic.slice(6, 12)" :key="index">
            <span class="word-number">{{ index + 7 }}</span>
            {{ word }}
          </td>
        </tr>
        <tr>
          <td v-for="(word, index) in splitMnemonic.slice(12, 18)" :key="index">
            <span class="word-number">{{ index + 13 }}</span>
            {{ word }}
          </td>
        </tr>
        <tr>
          <td v-for="(word, index) in splitMnemonic.slice(18, 24)" :key="index">
            <span class="word-number">{{ index + 19 }}</span>
            {{ word }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import IconCopy from "@/components/icons/IconCopy";
export default {
  name: `mnemonic-phrase`,
  components: {IconCopy},
  props: {
    value: {
      type: String,
      default: ``,
    },
  },
  data: () => ({
    copied: false,
  }),
  computed: {
    splitMnemonic: function () {
      console.log("splitMnemonic", this.$store.state.signUp.mnemonicPhrase)
      return this.$store.state.signUp.mnemonicPhrase.split(` `)
    },
  },
  methods: {
    onCopy() {
      this.copied = true
    },
  },
}
</script>
<style scoped>
.mnemonic-table {
  width: calc(100% + 8px);
  border-spacing: 4px;
  border-collapse: separate;
  margin: 0 -4px;
}

.mnemonic-table td {
  text-align: center;
  width: 16.6666666666667%;
  background-color: var(--bg-session);
  padding: 0.5rem 0.1rem 0.5rem 0.1rem;
  border-radius: 0.2rem;
  font-size: 0.9rem;
  color: var(--form-text-color);
}

.mnemonic-table td .word-number {
  display: block;
  width: 100%;
  opacity: 0.5;

  /* Prevent user to copy word numbers, we only want the words in their correct order */
  user-select: none;
}

.copy-mnemonic {
  display: flex;
  justify-content: center;
  float: right;
  font-size: 0.8rem;
  cursor: pointer;
  margin-bottom: 0.2rem;
  color: var(--octa-color);
}


.mnemonic-phrase .copied {
  margin-left: 5px;
  fill: green;
}

.copy-icon{
  transition: fill .5s ease, margin .3s ease;
}

.mnemonic-warning {
  border: 2px solid var(--warning);
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

.mnemonic-warning p {
  font-size: var(--sm);
  color: var(--warning);
  margin: 0;
}

@media screen and (max-width: 360px) {
  .mnemonic-table td {
    /*padding: 0.5rem 0.1rem 0.5rem 0.1rem;*/
    /*border-radius: 0.2rem;*/
    font-size: 0.7rem;
  }
}

@media screen and (min-width: 361px) and (max-width: 667px) {
  .mnemonic-table td {
    font-size: 0.8rem;
  }
}
</style>
