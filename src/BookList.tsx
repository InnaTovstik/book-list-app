import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { fetchBooks } from './booksSlice';
import { Container, Grid, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';

const BookList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { books, loading, error } = useSelector((state: RootState) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
        <Typography>Завантаження книг...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error">Помилка: {error}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
        Список книг
      </Typography>
      <Grid container spacing={4}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'green', fontSize: '1.5rem' }}>
                  {book.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Автор: {book.author}
                </Typography>
                <Typography variant="body2">
                  Рейтинг: {book.rating}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to={`/book/${book.id}`}>
                  Деталі
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BookList;
