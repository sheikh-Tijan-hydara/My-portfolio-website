<template>
    <section id="skills">
        <h1>MY SKILLS</h1>
        <div class="skills-text">
            <ul>
                <li> Html & CSS
                    <div class="skills-line"></div>
                </li>
                <li> Figma
                    <div class="skills-line"></div>
                </li>
                <li> Javascript
                    <div class="skills-line"></div>
                </li>
                <li> VueJS
                    <div class="skills-line"></div>
                </li>
                <li> Team Work <div class="skills-line"></div></li>
                <li> Fast learning<div class="skills-line"></div></li>

            </ul>
            <h2>I'm Skilled at these <br> <span>Tech Stacks</span></h2>
        </div>
       

        
    </section>
  


</template>

<script>
export default {
    
}
</script>

<style>
.skills-line{
    width: 150px;
    height: 4px;
    background: white;
    margin-top: 10px;
}
    #skills{
        background: rgb(14, 13, 13);
        width: 80vw;
        height: 50vh;
        text-align: center;
        margin: auto;
        color: #fff;
        box-shadow: -20px 20px 20px rgb(32, 32, 32);
}
#skills h1{
    padding: 20px;
    color: #fff;
    font-size: 20px;
    margin-bottom: -40px;
    font-weight: bold;
   
}
.skills-text{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px 0;
    align-items: center;   
}
.skills-text ul {
    text-align: left;
    width: 50%;
}
.skills-text ul li{
    margin: 20px 0;
    list-style: none;
    font-size: 10px;
}

.skills-text img{
   display: none;
}
@media (min-width: 800px) {
    #skills{
        height: 70vh;
    }
    #skills h1{
        padding: 0.6em 2em;
        margin-bottom: 50px;
        font-size: 30px;
    }
    .skills-text img{
        width: 200px;
        height:150px;
        margin: 20px;
        display: block;
    }
    .skills-text ul li{
    margin: 30px 0;
    list-style: none;
    font-size: 15px;
    font-weight: bold;
}
.skills-text{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 100px;
    align-items: center;   
}

}

@media (min-width: 1000px) {
    #skills{
        height: 70vh;
    }
    #skills h1{
        padding: 0.7em 2.3em;
        font-size: 40px;
    }
    .skills-text img{
        width: 270px;
        height:220px;
    }
     .skills-text ul li{
    margin: 20px 0;
    list-style: none;
    font-size: 20px;
    font-weight: bold;
}
#skills h2{
    font-size: 40px;
}
.skills-line{
    width: 350px;
    height: 4px;
    background: white;
    margin-top: 10px;
}
}
</style>