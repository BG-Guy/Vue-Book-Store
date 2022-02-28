import longText from '../cmps/long-text.cmp.js';

export default {
    props: ['book'],
    template: `
        <section class="book-details">
            <h4>Book details</h4>
            <img :src="bookImgUrl">
            <p class="title" >{{book.title}}</p>
            <p class="author" >By: {{book.authors[0]}}</p>
            <p  :class="isCheap" >{{book.listPrice.amount}} {{book.listPrice.currencyCode}} </p>
            <p>{{ isLongRead }}</p>
            <p>{{ publishedDate }}</p>
            <p class="on-sale" v-if="isSale" >On Sale!</p>
            <div class="desc">
                <long-text :txt="book.description"></long-text>
            </div>
            <button class="close" @click="$emit('close')">X</button>

        </section>
    `,

    data() {
        return {
            isOnSale: null,
            txt: 100,

        }
    },

    methods: {
        getDesc() {
           this.txt = this.book.description
        }
    },

    components: {
        longText,
    },

    computed: {
        bookImgUrl() {
            return `${this.book.thumbnail}`;
        },

        isLongRead() {
            if (this.book.pageCount > 500) return 'Long Reading'
            if (this.book.pageCount < 100) return 'Light Reading'
            else return 'Decent Reading'
        },

        publishedDate() {
            if (this.book.publishedDate + 1 > (new Date).getFullYear()) return 'New!'
            if (this.book.publishedDate + 10 < (new Date).getFullYear()) return 'Veteran Book!'
        },

        isCheap() {
            let price = this.book.listPrice.amount
            console.log(price);
                if (price < 20) return {cheap: true}
                if (price > 20) return {expensive: true}
        },

        isSale() {
            return this.book.listPrice.isOnSale
        },

        
    }
}