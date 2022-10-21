<template>
   <section id="projects" class="container">
        <h1>My PROJECTS</h1>
        <div id="general">
            <a href="https://github.com/sheikh-Tijan-hydara/vue-style-object"><div id="first"></div></a>
            <div id="general-1">
                <div id="general-2">
                    <div id="general-3">
                        <a href="https://github.com/sheikh-Tijan-hydara/Assignment-on-vue-reactivity"><div id="second"></div></a>
                        <a href="https://github.com/sheikh-Tijan-hydara/Vue-js-projects"><div id="third"></div></a>
                    </div>
                    <a href="https://github.com/sheikh-Tijan-hydara/FIrst-work-on-vue-CLI"><div id="four"></div></a>
                </div>
            </div>
        </div>
   </section>
</template>

<script>
export default {
    
}
</script>
<style>
    #projects{
        height: 80vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: auto;
        
    }
    #projects h1{
        background:#000;
        color:#fff;
        padding: 0.5em 1.9em;
        border-radius: 50px;    }
    #general{
        display: flex;
        flex-direction: row;
        background: #000;
        box-shadow: -20px 20px 20px rgb(44, 43, 43);
        margin: auto;

    }
    #first{
        width: 130px;
        height: 320px;
        background: url('../assets/image-1.png') no-repeat center center/cover;
        cursor: pointer;

    }
    #general-1{
        display: flex;
        flex-direction: row;
    }
     #general-2{
        display: flex;
        flex-direction: column;
    }
    #general-3{
        display: flex;
        flex-direction: row;
    }
     #second{
        width: 100px;
        height: 100px;
        background: url('../assets/image-2.png') no-repeat center center/cover;
        cursor: pointer;
    }
     #third{
        width: 100px;
        height: 100px;
        background: url('../assets/image-3.png') no-repeat center center/cover;
        cursor: pointer;

    }
     #four{
        width: 200px;
        height: 200px;
        background: url('../assets/image-4.png') no-repeat center center/cover;
        cursor: pointer;

    }
    #first, #second, #third, #four{
        margin: 5px;
    }

    @media (min-width: 800px){
         #projects{
             height: 80vh;    
        }
        #projects h1{
        padding: 0.7em 2.2em;
         }
        #first{
            width: 200px;
            height: 420px;
        }
        #second{
        width: 200px;
        height: 200px;
       
        }
        #third{
            width: 200px;
            height: 200px;       
        }
        #four{
            width: 420px;
            height: 200px;

        }
}

@media (min-width: 1200px){
         #projects{
             height: 90vh;    
        }
        #projects h1{
        padding: 0.7em 2.2em;
         }
        #first{
            width: 270px;
            height: 470px;
        }
        #second, #third{
        width: 300px;
        height: 200px;
        }
        
        #four{
            width: 620px;
            height: 250px;

        }
}
</style>