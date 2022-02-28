import bookApp from './views/book-app.cmp.js';
import appHeader from './cmps/app-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'


const options = {
    template: `
        <section>
            <app-header></app-header>
           <book-app></book-app> 
           <app-footer></app-footer>
        </section>
    `,
    components:{
        bookApp,
        appHeader,
        appFooter
    }
};

const app = Vue.createApp(options);
app.mount('#app');

