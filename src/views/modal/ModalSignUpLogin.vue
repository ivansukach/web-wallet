<template>
  <AuthFrame>
    <template v-slot:icon>
      <IconCreateAccount height="35" width="35" />
    </template>
    <Form :submit="onSubmit">
      <h1 class="auth-title">Enter your email</h1>
      <div>
        <div class="session-main bottom-indent">
          <Steps
            :steps="[`Email`, `Password`, `Mnemonic`]"
            active-step="Email"
          />
          <FormGroup
            v-model.trim="fieldEmail"
            placeholder="Enter your valid email"
            field-id="sign-up-name"
            field-label="Email address"
            input-type="email"
          >
            <!--          <input v-model.trim="fieldName"/>-->
            <FormMsg
              v-if="this.$v.fieldEmail.$error && !this.$v.fieldEmail.required"
              name="Email"
              type="required"
            />
<!--            <FormMsg-->
<!--              v-if="$v.fieldEmail.$error && !$v.fieldEmail.minLength"-->
<!--              name="Name"-->
<!--              type="minLength"-->
<!--              min="3"-->
<!--            />-->
            <FormMsg
                v-if="$v.fieldEmail.$error && !$v.fieldEmail.email"
                name="Email"
                type="email"
            />
<!--            <FormMsg-->
<!--              v-if="$v.fieldName.$error && !$v.fieldName.nameExists"-->
<!--              name="Name"-->
<!--              type="custom"-->
<!--              msg="already exists"-->
<!--            />-->
          </FormGroup>
          <!--            :error="$v.fieldName.$error"-->
          <!--            <TmField-->
          <!--              id="sign-up-name"-->
          <!--              v-model.trim="fieldName"-->
          <!--              v-focus-->
          <!--              type="text"-->
          <!--              placeholder="Must be at least 3 characters"-->
          <!--              vue-focus="vue-focus"-->
          <!--            />-->
          <!--            <TmFormMsg-->
          <!--              v-if="$v.fieldName.$error && !$v.fieldName.required"-->
          <!--              name="Name"-->
          <!--              type="required"-->
          <!--            />-->
          <!--            <TmFormMsg-->
          <!--              v-if="$v.fieldName.$error && !$v.fieldName.minLength"-->
          <!--              name="Name"-->
          <!--              type="minLength"-->
          <!--              min="3"-->
          <!--            />-->
          <!--            <TmFormMsg-->
          <!--              v-if="$v.fieldName.$error && !$v.fieldName.nameExists"-->
          <!--              name="Name"-->
          <!--              type="custom"-->
          <!--              msg="already exists"-->
          <!--            />-->
          <!--          </TmFormGroup>-->
        </div>
        <div class="auth-footer">
          <SolidBtn content="Next" type="submit" />
        </div>
      </div>
    </Form>
  </AuthFrame>
</template>

<script>
// import { mapState, mapGetters } from "vuex";
import { required, email} from "vuelidate/lib/validators";
import SolidBtn from "@/components/common/SolidBtn";
import FormGroup from "@/components/common/forms/FormGroup";
import Form from "@/components/common/forms/Form";
// import TmField from "common/TmField";
import FormMsg from "@/components/common/forms/FormMsg";
import AuthFrame from "@/components/common/AuthFrame";
import Steps from "@/components/auth/modal/Steps";
// import { getWalletIndex } from "@lunie/cosmos-keys";
import IconCreateAccount from "@/components/icons/IconCreateAccount";
// const nameExists = (value) => {
//   const walletIndex = getWalletIndex()
//   if (walletIndex.some((e) => e.name === value)) {
//     return false
//   } else {
//     return true
//   }
// }
export default {
  name: `session-sign-up`,
  components: {
    IconCreateAccount,
    AuthFrame,
    SolidBtn,
    // TmField,
    FormGroup,
    FormMsg,
    Form,
    Steps
  },
  computed: {
    //   // ...mapState([`auth`, `signup`]),
    //   // ...mapGetters([`network`, `networks`, `isExtension`]),
    fieldEmail: {
      get() {
        return this.$store.state.signUp.email;
      },
      set(value) {
        this.$store.commit(`updateField`, { field: `email`, value });
      }
    }
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();
      console.log(this.$v.$error);
      console.log(this.$v.fieldEmail);
      if (this.$v.$error) return;
      await this.$router.push(`/create/password`);
      // alert("SUBMIT")
    }
  },
  validations: {
    fieldEmail: { required, email }
  }
};
</script>

<style>
.form-btn {
  /*z-index: var(--z-modal)+2;*/
  background: yellow;
  position: relative;
}
.form-btn:before {
  position: absolute;
  content: "";
  background: red;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  top: -8px;
  left: -8px;
}
</style>
