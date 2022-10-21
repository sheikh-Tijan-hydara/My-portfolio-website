<template>
    <section  id="education">

      <div class="career">
        <h1>EDUCATION</h1>
        <div class="career-content">
           <div class="education-line"></div>
        <ul>
          <li>Farafenni Senior School</li>
          <li>University Of The Gambia:  BSC in Computer Science</li>
          <li>Code Academy:  Basic Html & CSS</li>
          <li>Free Code Camp:  Responsive Web Develoment</li>
           <li>Self Taught:  Figma, Javascript, Vuejs</li>
        </ul>
        </div>
       
      </div>

      <div class="hobbies">
        <h1>HOBBIES</h1>
        <ul>
          <li><i class="fa-solid fa-book-open"></i> Reading</li>
          <li><i class="fa-solid fa-square-code"></i> Code</li>
          <li><i class="fa-solid fa-bicycle"></i> Cycling</li>
          <li><i class="fa-regular fa-futbul"></i> FootBall</li>
        </ul>
      </div>

   
    </section>
    
    
</template>

<script>
export default {
    
}
</script>

<style>
   
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css');
 
   

    @media (min-width: 300px){
          #education{
         background: rgb(14, 13, 13);
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
         margin: auto;
        align-items: center;
        
       }
        #education h1{       
        color: #fff;
        text-align: center;

      }
       #education li{
        color: #fff;
        margin: 30px;
        list-style: none;
        
       }
        .career{
    text-align: left;
  }
  .hobbies{
   
    background: rgb(22, 22, 22);
    height: 60vh;
    width: 100%;
    text-align: center;
    padding: auto;


  }
   .career-content{
        display: flex;
        flex-direction: row;
      }
       .education-line{
        background: rgb(197, 3, 155);
        width: 3px;
        height: 300px;
        margin-left: 20px;
        margin-right: -50px;

      }
 
    }

     @media (min-width: 900px){
      .education-line{
        background: rgb(197, 3, 155);
        width: 4px;
        height: 300px;
        margin-left: 20px;
        margin-right: -50px;

      }
      .career-content{
        display: flex;
        flex-direction: row;
      }
        
    #education{
        background: rgb(14, 13, 13);
        height: 80vh;
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: auto;
        align-items: center;
       }
       #education h1{       
        color: #fff;

      }
       #education li{
        color: #fff;
        margin: 30px;
        list-style: none;
        
       }
  .career{
    text-align: left;
    padding: 20px;
  }
  .career h1{
    text-align: center;
  }
  .hobbies{
    border-radius: 20px;
    background: rgb(22, 22, 22);
    height: 40vh;
    width: 500px;
    text-align: center;
    box-shadow: -10px 10px 20px rgb(24, 23, 23);


  }
 
       .career{
        width: 50%;
       }
    }
</style>