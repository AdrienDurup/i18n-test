import React from 'react';

import { Trans } from '@lingui/react'; // TC for translate component

const Inbox=({i18n})=>{
 // const {i18n} =useContext(context);
/*   const messages = [{}, {}];
  const messagesCount = messages.length;
  const lastLogin = new Date();
  const markAsRead = () => { alert('Marked as read.') }; */

  const handleChangeLang = () => {
    const newLang = i18n.locale !== 'fr' ? 'fr' : 'en';
    console.log("newLang",newLang);
    i18n.activate(newLang);
  };

  return (
    <div>
      <Trans id="langSelect.label" values={{lang:i18n.locale}}/>
      <button onClick={handleChangeLang}>
        <Trans id="langSelect.button" />
      </button>
      <h1>
        <Trans id="langSelect.title"/>
      </h1>
{/*
      <p>
        <Trans>
          See all <a href="/unread">unread messages</a>{" or "}
          <a href="/" onClick={markAsRead}>mark them</a> as read.
        </Trans>
      </p>

      <p>
        {
          messagesCount === 1
            ? `There's ${messagesCount} message in your inbox.`
            : `There are ${messagesCount} messages in your inbox.`
        }
      </p>

      <footer>
        <Trans>
          Last login on {lastLogin.toLocaleDateString()}.
        </Trans>
      </footer> */}
    </div>
  )
}

export default Inbox;