<template>
  <div class="stepItem" :class="{ active: active }">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "StepComponent",
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style>
.stepItem {
  display: flex;
  flex-direction: row;
  width: 100%;
  cursor: default;
  padding: 0.5rem 0.5rem 0.5rem 0;
  margin-right: 0.75rem;
  border-bottom: 2px solid white;
  color: var(--form-text-color);
}

.active {
  border-color: #f67f6f;
  color: #f67f6f;
}
</style>
