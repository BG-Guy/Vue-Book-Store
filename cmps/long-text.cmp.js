
export default {
    props: ['txt'],
    template: `
        <section class="description">
            <p>{{getTextForDisplay}}</p>
            <div v-if="showMore">
                <p v-if="readMore" >{{showMore}}</p>
            <button class="show-more-btn"  @click="readMore = !readMore">Show More...</button>

            </div>
        </section>
    `,
    

    data() {
        return {
            text: this.txt,
            showMore: null,
            readMore: false
        }
    },

    methods: {
        
        

        
    },
    computed: {
        getTextForDisplay() {
                if (this.txt.length > 100) {
                    this.showMore = this.txt.slice(50,this.txt.length)
                    this.text = this.txt.slice(0, 50)
                    return this.text
                }
                return this.text
            
        }
    },
}