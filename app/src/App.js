import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PageRenderer from './components/utils/page-renderer'
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";

//styles
import './assets/scss/main.scss'

export default function App() {
  return (
    <Router>
      <Container>
        <Header />

        <Routes>
          <Route path="/:page" element={<PageRenderer />} />
          <Route index element={<Navigate to='/main' />} />
        </Routes>
      </Container>

    </Router>
  );
}

