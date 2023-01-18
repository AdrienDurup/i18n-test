import './App.css';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { messages } from './locales/placeholder/messages';
import { messages as frMess } from './locales/fr/messages';
import { messages as enMess } from './locales/en/messages';
import Inbox from './Inbox';

i18n.load(
  {
    en: enMess,
    fr: frMess,
    placeholder: messages
  }
);
i18n.activate('placeholder');

function App() {
  return (
    <I18nProvider i18n={i18n}>
      <div className="App">
        <main>
          <Inbox i18n={i18n} />
        </main>
      </div>
    </I18nProvider>

  );
}

export default App;
