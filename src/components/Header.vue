<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<!-- scripts -->
<script>
export default {
  name: 'Header',
  props: ['title'],
}
</script>
<!-- styles -->
<style scoped>
header{
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 20px;
}
</style>
