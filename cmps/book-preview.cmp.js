export default {
    props:['book'],
    template:`
        <section class="book-preview">
            <p class="title" >{{book.title}}</p>
            <p class="author" >By: {{book.authors[0]}}</p>
        </section>
    `,
    data(){
        return{}
    },
    created(){},
    methods:{},
    computed:{}
}