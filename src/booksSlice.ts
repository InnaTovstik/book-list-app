import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Book } from './booksData';

interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BooksState = {
  books: [
    {
      id: 1,
      name: 'Кобзар',
      author: 'Тарас Шевченко',
      genre: 'Поезія',
      rating: '4.9',
      description: 'Збірка віршів та поем великого українського поета Тараса Шевченка.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Тіні забутих предків',
      author: 'Михайло Коцюбинський',
      genre: 'Роман',
      rating: '4.8',
      description: 'Один з найвідоміших творів української літератури, роман про життя гуцулів.',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Захар Беркут',
      author: 'Іван Франко',
      genre: 'Історична проза',
      rating: '4.7',
      description: 'Історична повість про боротьбу українського народу проти монголо-татарської навали.',
      image: 'https://via.placeholder.com/150'
    }
  ],
  loading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch('/api/books');
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  const data = await response.json();
  return data as Book[];
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

