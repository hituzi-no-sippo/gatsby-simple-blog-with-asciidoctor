/* eslint-disable react-hooks/rules-of-hooks */
import { useLang } from 'context/LanguageContext';

import * as moment from 'moment';
import 'moment/min/locales.min';

import { dateDisplay } from 'config'

const formatMessage = (msgId, ...args) => {
  const { lang, messages } = useLang();

  const msg = messages[msgId];

  if (msg == null) {
    // eslint-disable-next-line no-console
    console.error(`MessageId [${msgId}] is not exist!!
    You should add it to config/locales/${lang}.js`);
    return msgId;
  }

  if (typeof msg === 'function') {
    return msg(...args);
  }

  return msg;
};

const formatDate = dateStr => {
  const momentDate = moment(dateStr);
  const { lang } = useLang();

  if (dateDisplay.diff.patternWithNotConvert.test(momentDate.fromNow())) {
    return momentDate.locale(lang).format(dateDisplay.format)
  }

  const localeDiffStr = momentDate.locale(lang).fromNow();
  const { newPost } = dateDisplay.diff;

  if (typeof newPost.emoji !== 'string') {
    return localeDiffStr;
  }

  const isNew = (() => {
    const enDiffStr = momentDate.locale('en').fromNow();

    if (/month|year/.test(enDiffStr)) {
      return false;
    }

    const daysDiff = /second|minute|hour|a day/.test(enDiffStr)
      ? 1
      : Number(enDiffStr.slice(0, enDiffStr.indexOf(' ')))

    return daysDiff <= newPost.boundary;
  })();

  return (isNew ? newPost.emoji : '') + localeDiffStr;
};

export { formatMessage, formatDate };
