<template>
 <p>simple text</p>
</template>

<script>
import PageViewer from './components/PageViewer.vue';
export default{
 components:{
  PageViewer
 },
  data(){
    return{
      activePage:0,
      pages:[
        { 
        link:{text:'Home',url:'index.html'} ,
        pageTitle:'Home page',
        content:'This is home content'
        },
        { 
        link:{text:'About',url:'about.html'} ,
        pageTitle:'About page',
        content:'This is About content'
        },
        { 
        link:{text:'Contact',url:'contact.html'} ,
        pageTitle:'Contact page',
        content:'This is contact content'
        },
      ]
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
