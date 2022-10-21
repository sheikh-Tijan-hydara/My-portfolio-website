<template>
  
  <section id="landing">
     <header>
        <div id="logo">Tijou</div>
        
        <div class="hambuger" @click="isActive = !isActive" > 
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>


        </div>
       

         <div class="nav-bar" :class="{active: isActive}">
            <ul>
              <li> <a href="#landing">HOME</a> </li>
              <li> <a href="#About">ABOUT</a> </li>
              <li> <a href="#skills">SKILLS</a> </li>
              <li> <a href="#projects">PROJECTS</a> </li>
              <li> <a href="#education">EDUCATION</a> </li>
            </ul>
        </div>

    </header>
    <div id="carrosel">
      <h2>Hello, My Name Is </h2>
      <h1>SHEIKH TIJAN HYDARA </h1>
      <h2>I am a
        <span class="typed-text">{{typeValue}}</span>
        <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
      </h2>
    </div>
  </section>

</template>

<script>

export default {
  data (){
    return{
      typeValue: '',
      typeStatus: false,
      typeArray: ['Front End Developer', 'UX/Ui designer','Graduate of University Of the Gambia', 'Problem solver', 'A very good team worker'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
      isActive: false,
    };
  },

  methods: {

   

    typeText(){
      if(this.charIndex < this.typeArray[this.typeArrayIndex].length){       
        if(!this.typeStatus)
          this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;


        setTimeout(this.typeText, this.typingSpeed);       
      }
      else{
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
        
      }
    },
    eraseText(){
      if(this.charIndex > 0){
        
        if(!this.typeStatus)
          this.typeStatus = true;


        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
        
      }
      else{

        this.typeStatus = false;
        this.typeArrayIndex += 1;

        if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
        

      }
    },
    
  },
  created(){
      setTimeout(this.typeText, this.newTextDelay + 200);
      
    }
}


</script>


<style>

  .line{
    background: white;
    width: 30px;
    height: 3px;
    margin: 4px 0;
  
  }
   header{
      background: rgb(22, 22, 22);

  display: flex;
  flex-direction: row;
  height: 100px;
  width: auto;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  color: white;
}
.hambuger {
  display: block;
  cursor: pointer;
}


  #carrosel{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: #000; */
    color:  #fff;
  }
  h2{
    font-size: 1rem;
    font-weight: bold;
  }
  .typed-text{
    color: rgb(197, 3, 155);
  }

  .cursor{
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: #fff;
    animation: cursorBlink 1s infinite;
  }
  .typing{
    animation: none;
  }

  @keyframes cursorBlink {
    49%{
      background-color: #fff;
    }
    50%{
      background-color: transparent;
    }
    99%{
      background-color: transparent;
    }
  }

  #landing{
    background: rgb(14, 13, 13);
    width: 100%;
    height: 70vh;
    /* background: url('../assets/test.jpg') no-repeat center center/cover ;    */
  }
  #landing h1{ font-size: 1.5rem;}
  
 
  

@media (max-width: 900px){
  #logo{
  font-size: 20px;
  padding: 10px 20px;
  background: white;
  color: black;
  font-weight: bold;
  border-radius: 50px;
}
  header .nav-bar {
  display: flex;
  flex-direction: column;
  top: 90px;
  left: 0;
  right: 0;
  position: absolute;
  text-align: center;
  background: rgb(89, 138, 243);
  height: 300px;
  opacity: 0.7;

}
header .nav-bar li{
  list-style: none;
  margin: 20px 0;
}
header .nav-bar li a{
  
  color: white;
  font-size: 15px;
}
header .nav-bar li a:hover{
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
}
header .active{
  height: 400px;
  background: rgb(89, 138, 243);
   
}
.active ul{
    opacity: 1;

}

}

 @media (min-width: 800px){

  
   #logo{
  font-size: 20px;
  padding: 10px 20px;
  background: white;
  color: black;
  font-weight: bold;
  border-radius: 50px;
}
    
    #landing h1{ font-size: 3rem;}
    #landing{
      height: 70vh;
  }
  
  
  h2{
    font-size: 2rem;
    font-weight: bold;
  }
 }

@media (min-width: 1000px){

   #landing{
      height: 80vh;
  }
 

#logo{
  font-size: 20px;
  padding: 10px 20px;
  background: white;
  color: black;
  font-weight: bold;
  border-radius: 50px;
}
header ul{
  display: flex;
  flex-direction: row;
  
}
header ul li{
  list-style: none;
}
header ul li a{
  margin: 0 20px;
  color: white;
  font-size: 15px;
}
header ul li a:hover{
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
}
.hambuger {
  display: none;
}

  
}
</style>