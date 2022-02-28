export default {
    template: `
        <section class="book-filter">

            <label>
            Search
            <input @input="setFilter" ref="nameInput" type="text" v-model="filterBy.byName" placeholder="Search...">
            <div>
            Price {{ filterBy.toPrice }}<input @input="setFilter" ref="priceInput" v-model="filterBy.toPrice" type="range" min="0" max="200" > 
            </div>    
        </label>
        </section>
    `,

    data() {
        return {
            filterBy: {
                byName: '',
                fromPrice: 0,
                toPrice: Infinity
            }
        };
    },

    mounted(){
        this.$refs.nameInput.focus()
        this.$refs.priceInput.focus()
    },


    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy);
            console.log(this.filterBy);
        },

        setFilterBy() {

        }
    }
}