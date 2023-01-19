import React, { useState } from 'react';
import i18n from './i18n';
import { Trans, useTranslation } from 'react-i18next';

/**
 * 
 * NOTES
 * Some tags can be activated in translation sentences : br, i, strong... for simple situations.
 * Otherwise we'll have to use Trans Component, in simple or "advanced" mode. 
 * Simple mode : nodes of default value have got an index that can be used to import nodes in translation sentences.
 * Advanced mode : you can list in a prop components that will be used.
 */
const Inbox = () => {
  const { t } = useTranslation();
  const [_lang, setLang] = useState('');
  console.log("I18N", _lang);
  const messages = [{}, {},{}];
  const messagesCount = messages.length;
  /* const lastLogin = new Date(); */
  const markAsRead = () => { alert('Marked as read.') };

  const handleChangeLang = () => {
    const newLang = i18n.language !== 'fr' ? 'fr' : 'en';
    console.log("newLang", newLang);
    setLang(newLang);// for re-render
    i18n.changeLanguage(newLang);
  };

  return (console.log(i18n.language) ??
    <div>
      <Trans>
        {t('langSelect.label', { lang: i18n.language })}
      </Trans>
      <button onClick={handleChangeLang}>
        {t('langSelect.button')}
      </button>
      <h1>
        {t('langSelect.title')}
      </h1>

      <p>
        <Trans i18nKey="langSelect.readInfo">
          {/* See all */}
          <a href="/unread">unread messages</a>
          {/* or */}
          <a href="/" onClick={markAsRead}>mark them</a>
        </Trans>
      </p>
      <p>
        <Trans i18nKey="langSelect.basicHtmlTest" />
      </p>
      <p>
        <Trans i18nKey="messages.count"
          count={messagesCount}
         // values={{ count: messagesCount }}
        >
        {{ count: messagesCount }}
        </Trans>
      </p>
      {/*
      <footer>
        <Trans>
          Last login on {lastLogin.toLocaleDateString()}.
        </Trans>
      </footer> */}
    </div>
  )
}

export default Inbox;