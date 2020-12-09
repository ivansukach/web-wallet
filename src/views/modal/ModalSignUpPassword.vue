<template>
  <AuthFrame>
    <template v-slot:icon>
      <IconPassword height="35" width="35" />
    </template>
    <Form :submit="onSubmit">
      <h1 class="auth-title">Enter password and confirm it</h1>
      <div>
        <Steps
          :steps="[`Email`, `Password`, `Mnemonic`]"
          active-step="Password"
        />
        <FormGroup
            v-model.trim="fieldPassword"
            placeholder="Must be at least 10 characters"
            input-type="password"
            field-id="sign-up-password"
            field-label="Password"
        >
<!--        <TmFormGroup-->
<!--          :error="$v.fieldPassword.$error"-->
<!--          field-id="sign-up-password"-->
<!--          field-label="Password"-->
<!--        >-->
<!--          <TmField-->
<!--            id="sign-up-password"-->
<!--            v-model="fieldPassword"-->
<!--            v-focus-->
<!--            type="password"-->
<!--            placeholder="Must be at least 10 characters"-->
<!--          />-->
          <FormMsg
            v-if="$v.fieldPassword.$error && !$v.fieldPassword.required"
            name="Password"
            type="required"
          />
          <FormMsg
            v-if="$v.fieldPassword.$error && !$v.fieldPassword.minLength"
            name="Password"
            type="minLength"
            min="10"
          />
        </FormGroup>
        <FormGroup
            v-model.trim="fieldConfirmPassword"
            placeholder="Confirm your password"
            input-type="password"
            field-id="sign-up-confirm-password"
            field-label="Confirm Password"
        >
<!--        <TmFormGroup-->
<!--          :error="$v.fieldPasswordConfirm.$error"-->
<!--          field-id="sign-up-password-confirm"-->
<!--          field-label="Confirm Password"-->
<!--        >-->
<!--          <TmField-->
<!--            id="sign-up-password-confirm"-->
<!--            v-model="fieldPasswordConfirm"-->
<!--            type="password"-->
<!--            placeholder="Enter password again"-->
<!--          />-->
          <FormMsg
            v-if="
              $v.fieldConfirmPassword.$error &&
              !$v.fieldConfirmPassword.sameAsPassword
            "
            name="Password confirmation"
            type="match"
          />
        </FormGroup>
        <div class="auth-footer">
          <SolidBtn content="Next" type="submit" />
        </div>
      </div>
    </Form>
  </AuthFrame>
</template>

<script>
// import { mapState } from "vuex"
import IconPassword from "@/components/icons/IconPassword";
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import SolidBtn from "@/components/common/SolidBtn";
import FormGroup from "@/components/common/forms/FormGroup";
import Form from "@/components/common/forms/Form";
import FormMsg from "@/components/common/forms/FormMsg";
import AuthFrame from "@/components/common/AuthFrame";
import Steps from "@/components/auth/modal/Steps";

export default {
  name: `session-sign-up`,
  components: {
    SolidBtn,
    AuthFrame,
    FormGroup,
    FormMsg,
    Form,
    Steps,
    IconPassword
  },
  computed: {
    // ...mapState([`session`, `signup`]),
    fieldPassword: {
      get() {
        return this.$store.state.signUp.password
      },
      set(value) {
        this.$store.commit(`updateField`, { field: `password`, value })
      },
    },
    fieldConfirmPassword: {
      get() {
        return this.$store.state.signUp.confirmPassword
      },
      set(value) {
        this.$store.commit(`updateField`, {
          field: `confirmPassword`,
          value,
        })
      },
    },
  },
  methods: {
    async onSubmit() {
      this.$v.$touch()
      if (this.$v.$error) return
      await this.$router.push(`/create/confirm`)
    },
  },
  validations: {
    fieldPassword: { required, minLength: minLength(10) },
    fieldConfirmPassword: { sameAsPassword: sameAs(`fieldPassword`) },
  },
}
</script>
