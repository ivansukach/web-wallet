<template>
  <AuthFrame>
    <template v-slot:icon>
      <IconForgotPassword height="35" width="35" />
    </template>
    <Form :submit="onSubmit.bind(this)">
      <h1 class="auth-title">Mnemonic Phrase</h1>
      <div>
        <div class="session-main bottom-indent reorder">
          <Steps
            :steps="[`Email`, `Password`, `Mnemonic`]"
            active-step="Mnemonic"
          />
          <MnemonicPhrase />
<!--          class="field-checkbox"-->
<!--          <FormGroup-->
<!--            v-model.trim="fieldWarning"-->
<!--            input-type="checkbox"-->
<!--            field-id="sign-up-warning"-->
<!--            field-label="I understand that lost seeds cannot be recovered."-->
<!--          >-->
<!--            <div class="field-checkbox-input">-->
<!--              <label class="field-checkbox-label" for="sign-up-warning">-->
<!--                <input-->
<!--                  id="sign-up-warning"-->
<!--                  v-model="fieldWarning"-->
<!--                  v-focus-->
<!--                  type="checkbox"-->
<!--                />-->
<!--                I understand that lost seeds cannot be recovered.</label-->
<!--              >-->
<!--            </div>-->
<!--            <TmFormMsg-->
<!--              v-if="$v.fieldWarning.$error && !$v.fieldWarning.required"-->
<!--              name="Recovery confirmation"-->
<!--              type="required"-->
<!--            />-->
<!--            <TmFormMsg v-if="error" type="custom" :msg="errorMessage" />-->
<!--          </FormGroup>-->
          <label id="warning">
            <input type="checkbox" v-model.trim="fieldWarning"/>
            I understand that lost seeds cannot be recovered.
          </label>
                      <FormMsg
                        v-if="$v.fieldWarning.$error && !$v.fieldWarning.required"
                        name="Recovery confirmation"
                        type="required"
                      />
                      <FormMsg v-if="error" type="custom" :msg="errorMessage" />
        </div>
        <div class="auth-footer">
          <SolidBtn content="Create" />
        </div>
      </div>
    </Form>
  </AuthFrame>
</template>

<script>
import { mapState
  // , mapGetters
} from "vuex"
import { sameAs } from "vuelidate/lib/validators"
import SolidBtn from "@/components/common/SolidBtn";
// import FormGroup from "@/components/common/forms/FormGroup";
import Form from "@/components/common/forms/Form";
import FormMsg from "@/components/common/forms/FormMsg";
import AuthFrame from "@/components/common/AuthFrame";
import Steps from "@/components/auth/modal/Steps";
import IconForgotPassword from "@/components/icons/IconForgotPassword";
import MnemonicPhrase from "@/components/auth/MnemonicPhrase";
import { generateMnemonic } from "bip39";
export default {
  name: `session-sign-up`,
  components: {
    IconForgotPassword,
    SolidBtn,
    AuthFrame,
    // FormGroup,
    FormMsg,
    Form,
    Steps,
    MnemonicPhrase
  },
  data: () => ({
    error: false,
    errorMessage: ``,
  }),
  computed: {
    ...mapState([`session`, `signup`]),
    // ...mapGetters([`network`, `networkSlug`, `isExtension`, `currentNetwork`]),
    // mnemonic: {
    //   get() {
    //     return this.$store.state.signUp.mnemonicPhrase
    //   },
    // },
    fieldWarning: {
      get() {
        return this.$store.state.signUp.warning
      },
      set(value) {
        this.$store.commit(`updateField`, { field: `warning`, value })
      },
    },
  },
  beforeMount() {
    // this.$store.dispatch(`createAccount`)
    this.$store.commit(`updateField`, { field: `mnemonicPhrase`, value: generateMnemonic(256) })
  },
  // beforeDestroy: function () {
  //   this.$store.dispatch(`resetSignUpData`)
  // },
  methods: {
    async onSubmit() {
      alert("SUBMIT")
      this.$v.$touch()
      if (this.$v.$error) return
      try {
        console.log("email", this.$store.state.signUp.email)
        console.log("password", this.$store.state.signUp.password)
        console.log("mnemonicPhrase", this.$store.state.signUp.mnemonicPhrase)
        await this.$store.dispatch(`createKey`,
            {email: this.$store.state.signUp.email,
            password: this.$store.state.signUp.password,
            mnemonicPhrase: this.$store.state.signUp.mnemonicPhrase})
        await this.$router.push({ name: "portfolio" });
      } catch (error) {
        alert("error")
        this.error = true
        this.errorMessage = error.message
      }
    },
  },
  validations: {
    fieldWarning: { required: sameAs(() => true) },
  },
}
</script>

<style>
#warning{
  color: var(--form-text-color);
  margin: 2rem 0;
}
</style>
