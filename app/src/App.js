import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PageRenderer from './components/utils/page-renderer'
import './assets/scss/main.scss'


export default function App() {
  return (
    <Router>

      <Routes>
        <Route path="/:page" element={<PageRenderer />} />
        <Route index element={<Navigate to='/main' />} />
      </Routes>

    </Router>
  );
}

