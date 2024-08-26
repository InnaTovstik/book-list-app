import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Container, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const book = useSelector((state: RootState) =>
    state.books.books.find((book) => book.id === parseInt(id!, 10))
  );

  if (!book) {
    return (
      <Container>
        <Typography>Книга не знайдена</Typography>
        <Button component={Link} to="/">
          Повернутися до списку книг
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={book.image} // Заглушка або фактичне зображення
          alt={book.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'green', fontSize: '2rem' }}>
            {book.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Автор: {book.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Жанр: {book.genre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Рейтинг: {book.rating}
          </Typography>
          <Typography variant="body1" paragraph>
            Опис: {book.description}
          </Typography>
        </CardContent>
        <Button size="small" component={Link} to="/">
          Повернутися до списку книг
        </Button>
      </Card>
    </Container>
  );
};

export default BookDetail;
