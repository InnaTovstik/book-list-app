import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from './booksSlice';
import { Book } from './booksData';
import { Container, TextField, Button, Typography } from '@mui/material';

const AddBookForm: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBook: Book = {
      id: Date.now(),
      name,
      author,
      genre,
      rating,
      description,
      image: 'https://via.placeholder.com/150',
    };
    dispatch(addBook(newBook));
    setName('');
    setAuthor('');
    setGenre('');
    setRating('');
    setDescription('');
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Додати нову книгу
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Назва"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Автор"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Жанр"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Рейтинг"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Опис"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Додати книгу
        </Button>
      </form>
    </Container>
  );
};

export default AddBookForm;
