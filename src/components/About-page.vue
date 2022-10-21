<template>
    <section id="About" class="container">
        
            <div id="image"><img src="../assets/myImage.jpg" alt=""></div>
        
             <div id="text">
            <h1>ABOUT <span>ME</span> </h1>
            <h3>Front End Developer And UX/UI Designer</h3>
            <p>My name is Sheikh Tijan Hydara. <br>
               A young UX/UI designer <br>
                and a front end developer. <br>
                I studied Bsc in computer science<br>
                in the University of The Gambia<br>
                I am always ready to learn new things<br>
               and very good at working with people<br>
               I love taking challengies because <br>
               because i always learn from it <br>
               I Always love to share my little knowledge
                </p>
        </div>
    
       
        
        
    </section>
</template>

<script>
export default {
    
}
</script>

<style>
   
    #About{
        
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 50vh;
        /* padding: auto; */
        margin: auto;
        color: #fff;
    }
    #About img{
        display: none;
    }
   
    #text{
        /* background: #000;
        opacity: 0.7;
        text-align: left; 
        border-radius: 50px;
        width: 300px;
        height: 300px;
        box-shadow: -20px 20px 20px rgb(44, 43, 43); */
        margin: auto;
        text-align: center;
        }
    #text p{
        font-size: 10px;
    }
     
   

    @media (min-width: 800px) {
        #text{
            width: 350px;
            height: 350px;
        }
         #About{
            height: 70vh;  
        }
         #image{
            margin:auto;
        }
         #About img{
            display: block;
            width: 300px;
            height: 350px;
            box-shadow: -10px 10px 20px rgb(44, 43, 43);
        }
         #text p{
            margin-top: 60px;
        }
    }

     @media (min-width: 1000px) {
        #text{
            width: 450px;
            height: 450px;
            text-align: left;
        }
         #About{
            height: 80vh;  
            width: 70%;
            display: flex;
            flex-direction: row;
        }
        h1{
            font-size: 40px;
        }
        /* #image{

        } */
        
         #About img{
            display: block;
            width: 400px;
            height: 450px;
        }
         #text p{
            /* margin-top: 90px; */
            font-size: 15px;
        }
    }
    
</style>