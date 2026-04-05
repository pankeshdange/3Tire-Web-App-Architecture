import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu, Header, Dashboard, TransactionForm, About, AWSServices, Documentation } from './components';
import FocusLock from 'react-focus-lock';
import DatabaseDemo from './components/DatabaseDemo/DatabaseDemo'
import Home from './components/Home/Home'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  const handleTransactionAdded = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Header />
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
              <Switch>
                <Route path="/analytics">
                  <Dashboard key={refreshKey} />
                </Route>
                <Route path="/add-transaction">
                  <TransactionForm onTransactionAdded={handleTransactionAdded} />
                </Route>
                <Route path="/db">
                  <DatabaseDemo />
                </Route>
                <Route path="/aws-services">
                  <AWSServices />
                </Route>
                <Route path="/documentation">
                  <Documentation />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Home/>
                </Route>
              </Switch>
            </FocusLock>
          </div>
        </Router>
    </ThemeProvider>
  );
}

export default App;

