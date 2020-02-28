const LOYOUT_SUCCESS = 'LOYOUT_SUCCESS';

const text = {
  add: 'ADD',
  remove: 'REMOVE',
  header: 'BOOKMAR\'S REACT',
  footer: '©2019 Created by A.VOITOVYCH',
};

const menuCategories = [
  {
    title:'INITIAL',
    links:[
      'http://localhost:8080/home',
      'https://translate.google.com',
      'https://www.w3schools.com'
    ]
  },
  {
    title:'EMAILS & FB',
    links:[
      'https://mail.ukr.net/classic#msglist',
      'https://mail.google.com/mail/u/0/#inbox',
      'https://www.facebook.com/']
  },
  {
    title:'TW & ARTICLES',
    links:[
      'https://twitter.com/',
      'https://www.robinwieruch.de/react-hooks-fetch-data/?utm_campaign=Robin%20Wieruch%20-%20A%20Developer%27s%20Digest&utm_medium=email&utm_source=Revue%20newsletter',
      'https://blog.logrocket.com/5-things-you-didnt-know-about-react-devtools-2c6e0ef22529',
      'https://medium.freecodecamp.org/reintroducing-react-every-react-update-since-v16-demystified-60686ee292cc',
      'https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/',
      'https://kentcdodds.com/blog/application-state-management-with-react',
      'https://medium.freecodecamp.org/how-to-create-a-timeline-component-with-react-1b216f23d3d4?fbclid=IwAR0Mg2KGXZ9NWIaqsT7p95eWKenWoBjGYiEtA5ljLcMNNgsOA5DoQDF9KgY',
      'http://matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/?fbclid=IwAR3eVJzF3Mk2kweDaxXcH43fM317e1ElG4myoUZOtU2Y1MjEh84TQUMnnQE#%F0%9F%8C%94',
      'https://css-tricks.com/netlify-functions-for-sending-emails/?fbclid=IwAR2V6eF1ZUSPx2SXD68BieduY296lbZeQuKALOxBApb_oJfsUy1lhPtJgfw',
      'https://dev.to/ryannhg/async-await-60-of-the-time-it-works-every-time-45lg',
      'https://dev.to/gmartigny/why-the-js-ecosystem-is-awesome-48nl',
      'https://www.robinwieruch.de/react-controlled-components/',
      'https://www.robinwieruch.de/react-list-components/',
      'https://www.robinwieruch.de/postgresql-express-node-rest-api/?utm_campaign=Robin%20Wieruch%20-%20A%20Developer%27s%20Digest&utm_medium=email&utm_source=Revue%20newsletter',
      'https://www.robinwieruch.de/mongodb-express-node-rest-api/?utm_campaign=Robin%20Wieruch%20-%20A%20Developer%27s%20Digest&utm_medium=email&utm_source=Revue%20newsletter',
      'https://www.robinwieruch.de/react-component-composition/?utm_campaign=Robin%20Wieruch%20-%20A%20Developer%27s%20Digest&utm_medium=email&utm_source=Revue%20newsletter',
      'https://blog.angularindepth.com/developments-in-web-components-im-excited-about-in-2019-3ae7751c2f64',
      'https://dev.to/denisepen/tackling-algorithms-counting-unique-values-1a5n',
      'https://dev.to/alex_barashkov/how-to-debug-nodejs-in-a-docker-container-bhi',
      'https://scotch.io/tutorials/how-to-use-console-in-nodejs?utm_source=newsletter&utm_medium=email&utm_campaign=22_best_vs_code_extensions_for_web_development_how_to_console_in_nodejs&utm_term=2019-02-14',
      'https://dev.to/tiffany/bugfix-spelunking-in-someone-elses-code-495k',
      'https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf?fbclid=IwAR1bMwGjB-Kyzt-kBHZfU_OAyALpSsBDDZOsUWFoG66PvX0JOKh002zaYpc',
      'https://frontendmasters.com/books/javascript-enlightenment/#1',
      'https://quantizd.com/building-live-streaming-app-with-node-js-and-react/',
      'https://levelup.gitconnected.com/how-to-build-an-ionic-chat-app-with-react-and-stream-739b67611280',
      'https://www.robinwieruch.de/react-scroll-to-item/',
      'https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks/',
      'https://blog.logrocket.com/12-tips-for-writing-clean-and-scalable-javascript-3ffe30abfe20']
  },
  {
    title:'VIDEO LEARN',
    links:[
      'https://coursehunters.net/course/udemy-advanced-reactandredux',
      'https://www.udemy.com/advanced-tsql-querying-using-sql-2014/?start=0',
      'https://coursehunters.net/course/nodejs-v2-udemy']
  },
  {
    title:'CURRENT PROJECT',
    links:[
      'https://clubhouse.io/',
      'https://github.com/',
      'https://ninjamock.com/',
      'https://cloud.mongodb.com/v2/5cd348bd79358e65c8fe03cf#metrics/replicaSet/5cd349939ccf649fa31fe024/explorer/bookmarks/users/find',
      'http://localhost:8080']
  },
  {
    title:'STUFFS FOR PROJECT',
    links:[
      'https://reactjs.org/docs/hooks-effect.html',
      'https://ant.design/components/list/',
      'https://lodash.com/docs/4.17.11#merge',
      'https://developers.facebook.com/apps/571013073413679/settings/basic/',
      'https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm',
      'https://kentcdodds.com/blog/authentication-in-react-applications']
  },
  {
    title:'REST',
    links:[
      'https://music.youtube.com/watch?v=So2_AxSXak4&list=LM',
      'http://radioskovoroda.com/radio',
      'https://coursehunters.net/course/nauchites-pisat-na-ruby']
  }
];

const T = {
  AUTH: 'AUTH',
};

export {
  LOYOUT_SUCCESS,
  text,
  menuCategories,
  T,
};
