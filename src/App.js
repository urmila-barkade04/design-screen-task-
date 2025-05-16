import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScreenOne from './pages/ScreenOne';
import ScreenTwo from './pages/ScreenTwo';
import ScreenThree from './pages/ScreenThree';

const App = () => {
  return (
      <Router>
            <Routes>
                    <Route path="/" element={<ScreenOne />} />
                            <Route path="/about" element={<ScreenTwo />} />
                                    <Route path="/contact" element={<ScreenThree />} />
                                          </Routes>
                                              </Router>
                                                );
                                                };

                                                export default App;
