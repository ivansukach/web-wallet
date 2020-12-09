<template>
  <div>
    <label v-if="fieldId && fieldLabel" :for="fieldId" class="form-group-label">
      {{ fieldLabel }}
    </label>
    <input
      :type="inputType"
      class="field"
      :value="value"
      v-on:input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: `form-group`,
  props: {
    placeholder: {
      type: String,
      default: null
    },
    fieldId: {
      type: String,
      default: null
    },
    fieldLabel: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    // subLabel: {
    //   type: String,
    //   default: null,
    // },
    inputType: {
      type: String,
      default: "text"
    }
  },
  computed: {
    cssClass() {
      let value = `tm-form-group`;
      if (this.error) value += ` tm-form-group--error`;
      return value;
    }
  }
};
</script>

<style>
/*.tm-form-group {*/
/*  padding: 0.75rem 0;*/
/*  position: relative;*/
/*}*/

/*.tm-form-group:last-child {*/
/*  border-bottom: none;*/
/*}*/

/*.tm-form-group__sub-label {*/
/*  position: absolute;*/
/*  bottom: 0.5rem;*/
/*  left: 1rem;*/
/*  font-size: var(--xs);*/
/*  color: var(--dim);*/
/*}*/
.field {
  /*background: transparent;*/
  /*border: 2px solid aqua;*/
  /*border-radius: 0;*/
  color: var(--form-text-color);
  /*display: block;*/
  font-size: 14px;
  /*min-width: 0;*/
  padding: 0.5rem 0.5rem;
  width: 100%;
  /*-webkit-appearance: none;*/
}

.form-group-label {
  display: block;
  line-height: 2rem;
  font-size: 14px;
  color: var(--form-text-color);
  text-align: left;
  font-weight: 500;
}

/*.tm-form-group__sub-label ~ .tm-form-group__label {*/
/*  line-height: 1rem;*/
/*}*/

/*.tm-form-group--error .tm-field,*/
/*.tm-form-group--error .tm-select {*/
/*  border-color: var(--danger);*/
/*}*/
</style>
