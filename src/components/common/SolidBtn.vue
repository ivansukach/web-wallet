<template>
  <button class="btn-grad">{{content}}</button>
</template>

<script>
export default {
  name: "solid-btn",
  props: {
    content: {
      type: String,
      default: null,
    },
  }
}
</script>

<style scoped>
button{
  outline: none;
  border: none;
  cursor: pointer;
}
.btn-grad {background-image: linear-gradient(to right, #f67f6f 0%, #bfe9ff  51%, #f67f6f  100%)}
.btn-grad {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

</style>
