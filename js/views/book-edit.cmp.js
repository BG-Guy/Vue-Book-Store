import { bookService } from '../services/book-service.js';
import { eventBus } from '../services/eventBus-service.js';


export default {
    template: `
    
        <section class="book-edit">
            <h4>Add book</h4>
            <form @submit.prevent="save">
                <input type="text" v-model="bookToEdit.author" placeholder="Author">
                <input type="number" v-model.number="bookToEdit.title" placeholder="Book Title">
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            bookToEdit: null,
        };
    },

    created() {
        const id = this.$route.params.bookId;
        if (id) {
            bookService.get(id)
                .then(book => this.bookToEdit = book);
        } else {
            this.bookToEdit = bookService.getEmptyBook();
        }
    },


    methods: {
        save() {
            if (!this.bookToEdit.vendor) return;
            bookService.save(this.bookToEdit)
                .then(book => {
                    eventBus.emit('show-msg', { txt: 'Saved succesfully', type: 'success' })
                    this.$router.push('/book')
                });
        }
    },

    computed: {
        formTitle() {
            const id = this.$route.params.bookId;
            return id ? 'Edit book' : 'Add book';
        }
    }
}
