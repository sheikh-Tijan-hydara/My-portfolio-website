<template>
  <landing-page></landing-page>
  <about-page></about-page>
  <skills-page></skills-page>
  <projects-page></projects-page>
  <education-page></education-page>
  <footer-page></footer-page>
</template>

<script>

export default {
                                                                                                                                                          
 
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css');


.text-color-primary{
  color: blue;
  font-size: 30;
}
body{
  background: rgb(22, 22, 22);
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
} 
/* .container{
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 10px;
} */
span{
    color: rgb(197, 3, 155);
  }
  h1{
    font-size: 1.5rem;
  }
  a{
    color: black;
    text-decoration: none;
    font-weight: bold;
  }
  p{
    font-size: 0.7rem;
  }

  @media(min-width: 800px){
    h1{
      font-size: 1.7rem;
    }
    p{
    font-size: 0.7rem;
  }
  }

  @media(min-width: 1200px){
    h1{
      font-size: 1.9rem;
    }
    p{
    font-size: 0.9rem;
  }
  }

</style>
