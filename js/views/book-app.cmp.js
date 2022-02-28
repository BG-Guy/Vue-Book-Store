import { bookService } from '../services/book-service.js';
import { eventBus } from '../services/eventBus-service.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookList from '../cmps/book-list.cmp.js';
import bookDetails from './book-details.cmp.js';
import bookEdit from './book-edit.cmp.js';

export default {
    template: `
        <section class="book-app">
           <book-filter @filtered="setFilter" />
           <book-list :books="booksForDisplay" @remove="removeBook" @selected="selectBook" />
           <book-edit @saved="saveBook" />
           <book-details v-if="selectedBook" :book="selectedBook" @close="selectedBook = null" />
        </section>
    `,
    components: {
        bookFilter,
        bookList,
        bookDetails,
        bookEdit,
    },
    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: null
        };
    },
    created() {
        bookService.query()
            .then(books => this.books = books)
        
    },

    methods: {
        removeBook(id) {
            bookService.remove(id)
            .then(() => {
                const idx = this.cars.findIndex((car) => car.id === id);
                this.cars.splice(idx, 1);
                eventBus.emit('show-msg', { txt: 'Deleted succesfully', type: 'success' });
            })
            .catch(err => {
                console.error(err);
                eventBus.emit('show-msg', { txt: 'Error - please try again later', type: 'error' });
            });
        },
        selectBook(book) {
            this.selectedBook = book;
            console.log(book);
        },
        saveBook(book) {
            this.books.push(book);
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },
    computed: {
        booksForDisplay() {
            if (!this.filterBy) return this.books;
            const regex = new RegExp(this.filterBy.byName, 'i');
            return this.books.filter(book => (book.listPrice.amount) < this.filterBy.toPrice && regex.test(book.title))
        }
    },
};
