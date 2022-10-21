import { createApp } from 'vue'
import App from './App.vue'
import LandingPage from './components/Landing-page.vue'
import AboutPage from './components/About-page.vue'
import SkillsPage from './components/Skills-page.vue'
import ProjectsPage from './components/Projects-page.vue'
import EducationPage from './components/Education-page.vue'
import FooterPage from './components/Footer-page.vue'




const app = createApp(App);

app.component('landing-page', LandingPage);
app.component('about-page', AboutPage);
app.component('skills-page', SkillsPage);
app.component('projects-page', ProjectsPage);
app.component('education-page', EducationPage);
app.component('footer-page', FooterPage);

app.mount('#app');
