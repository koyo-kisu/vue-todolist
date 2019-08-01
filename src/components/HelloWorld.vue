<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: 'home',
  data: function() {
    return {
      myTodo:'',
    }
  },
  methods: {
    addToDo: function(){
      console.log('myTodo: ' + this.myTodo)
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  box-sizing:border-box;
}

body, html, #app {
  background:#8ac8e5;
}

.home {
  width:300px;
  margin:auto;
}
</style>
