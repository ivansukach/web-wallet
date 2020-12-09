<template>
    <button class="glow-effect">{{content}}</button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    content: {
      type: String,
      default: null,
    },
  }
}
</script>

<style scoped>
button {
  /*border: 1px solid blue;*/
  outline: none;
  background: #fff;
  cursor: pointer;
  border-radius: 10px;
  padding: 15px;
  position: relative;
}
/*.glow-effect:before {*/
/*  content: '';*/
/*  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);*/
/*  position: absolute;*/
/*  top: -2px;*/
/*  left:-2px;*/
/*  background-size: 400%;*/
/*  z-index: -1;*/
/*  filter: blur(5px);*/
/*  width: calc(100% + 4px);*/
/*  height: calc(100% + 4px);*/
/*  animation: glowing 20s linear infinite;*/
/*  opacity: 0;*/
/*  transition: opacity .3s ease-in-out;*/
/*  !*border-radius: 10px;*!*/
/*}*/

/*.glow-effect:active {*/
/*  color: #000;*/
/*}*/
/*.glow-effect:hover {*/
/*  border: none;*/
/*}*/

/*.glow-effect:hover:before {*/
/*  opacity: 1;*/
/*}*/

/*@keyframes glowing {*/
/*  0% { background-position: 0 0; }*/
/*  50% { background-position: 400% 0; }*/
/*  100% { background-position: 0 0; }*/
/*}*/
</style>