/*eslint-disable*/
import type { Messages } from "../../@types/messages";
const lang: Messages = {
  langSelect: {
    button: "Sélectionnez la langue",
    label: "La langue parlée est <strong>{lang}</strong>",
    title: "Réception",
    readInfo:
      "montrer tous <0>les messages non lus</0> ou <1>les marquer</1> comme <2>lus</2>.",
    basicHtmlTest:
      "<strong>test</strong><br /> des balises <i>simples</i> et <i>italiques</i>.",
  },
  messages: {
    count: `{
      count, plural,
    =0 {Vous n’avez pas de message.}
    =1 {vous avez un message.}
    other {Vous avez <0><strong>{count}</strong></0> messages.}
    }`,
  },
};
export default lang;
