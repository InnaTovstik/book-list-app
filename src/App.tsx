import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './BookList';
import BookDetail from './BookDetail';
import AddBookForm from './AddBookForm';
import { Container, Button } from '@mui/material';

const App: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<>
            <BookList />
            <Button variant="contained" color="primary" onClick={toggleForm} sx={{ mt: 2 }}>
              {isFormOpen ? 'Закрити форму' : 'Додати нову книгу'}
            </Button>
            {isFormOpen && <AddBookForm />}
          </>} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
