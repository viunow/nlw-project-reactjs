import React from 'react';
import styles from './App.module.scss';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './contexts/auth';

export function App() {
  const { user } = React.useContext(AuthContext);

  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
}
