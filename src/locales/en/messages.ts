/*eslint-disable*/
import { Messages } from "../../@types/messages";
const lang:Messages = {
    langSelect:{
      button:"Select language",
      label:"Selected Language is {lang}",
      title:"Inbox",
      readInfo:"See all <0>unread messages</0> or <1>mark them</1> as <strong><i>read</i></strong>.",
      basicHtmlTest:"<strong>test</strong> <br />of <i>basic</i> tags.",
    },
    messages:{
      count:`{count, plural, =0 {You have no messages.}
      =1 {You have <strong>{count}</strong> message."}
      other {You have <0><strong>{count}</strong></0> messages.}}`,
    },
/*     "messages.count":"You have <strong>{{count}}</strong> message.",
      "messages.count_plural":"You have <strong>{{count}}</strong> messages.", */
  }
export default lang;