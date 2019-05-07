const LOYOUT_SUCCESS = 'LOYOUT_SUCCESS';

const text = {
  add: 'ADD',
  remove: 'REMOVE',
  header: 'BOOKMAR\'S',
  footer: '©2019 Created by A.VOITOVYCH',
};

const menuCategories = [
  {
    title: 'INITIAL',
    links: [
      'http://localhost:8080/home',
      'https://translate.google.com',
      'https://www.w3schools.com',
    ]
  },
  {
    title: 'EMAILS & FB',
    links: [
      'https://mail.ukr.net/classic#msglist',
      'https://mail.google.com/mail/u/0/#inbox',
      'https://mail.google.com/mail/u/1/#inbox',
      'https://www.facebook.com/',
    ]
  },
  {
    title: 'TW & ARTICLES',
    links: [
      'https://twitter.com/',
      'https://www.robinwieruch.de/react-hooks-fetch-data/?utm_campaign=Robin%20Wieruch%20-%20A%20Developer%27s%20Digest&utm_medium=email&utm_source=Revue%20newsletter',
      'http://matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/?fbclid=IwAR3eVJzF3Mk2kweDaxXcH43fM317e1ElG4myoUZOtU2Y1MjEh84TQUMnnQE#%F0%9F%8C%94',
      'https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/',
      'https://www.robinwieruch.de/react-controlled-components/',
      'https://www.robinwieruch.de/react-list-components/',
      'https://www.robinwieruch.de/postgresql-express-node-rest-api/?utm_campaign=Robin%20Wieruch%20-%20A%20Developer%27s%20Digest&utm_medium=email&utm_source=Revue%20newsletter',
      'https://www.robinwieruch.de/mongodb-express-node-rest-api/?utm_campaign=Robin%20Wieruch%20-%20A%20Developer%27s%20Digest&utm_medium=email&utm_source=Revue%20newsletter',
      'https://www.robinwieruch.de/react-component-composition/?utm_campaign=Robin%20Wieruch%20-%20A%20Developer%27s%20Digest&utm_medium=email&utm_source=Revue%20newsletter',
      'https://blog.angularindepth.com/developments-in-web-components-im-excited-about-in-2019-3ae7751c2f64',
      'https://dev.to/denisepen/tackling-algorithms-counting-unique-values-1a5n',
      'https://dev.to/alex_barashkov/how-to-debug-nodejs-in-a-docker-container-bhi',
      'https://scotch.io/tutorials/how-to-use-console-in-nodejs?utm_source=newsletter&utm_medium=email&utm_campaign=22_best_vs_code_extensions_for_web_development_how_to_console_in_nodejs&utm_term=2019-02-14',
      'https://dev.to/twhite/bugfix-spelunking-in-someone-elses-code-495k',
      'https://frontendmasters.com/books/javascript-enlightenment/#1',
    ]
  },
  {
    title: 'VIDEO LEARN',
    links: [
      'https://coursehunters.net/course/udemy-advanced-reactandredux',
      'https://www.udemy.com/advanced-tsql-querying-using-sql-2014/?start=0',
      'https://coursehunters.net/course/nodejs-v2-udemy',
    ]
  },
  {
    title: 'CURRENT PROJECT',
    links: [
      'https://kindgeek.atlassian.net/projects/HBO/issues/HBO-125?filter=myopenissues',
      'https://bitbucket.org/finovertech/hyperjar-back-office-fe/src/dev/constants/text.js',
      'http://hyperjar-api.s3-website-us-east-1.amazonaws.com/graphs/admin/object/setkycstatusresult/',
      'https://auth0.auth0.com/u/login',
      'https://app.zeplin.io/project/5c5d81ad95e08804f18abeaa/screen/5ca377d877eeb0193df9b12d',
      'http://localhost:3000/cardholder/07173750?filter=publicIdentifier&search=07173750',
    ]
  },
  {
    title: 'STUFFS FOR PROJECT',
    links: [
      'https://reactstrap.github.io/components/layout/',
      'http://busypeoples.github.io/post/react-component-lifecycle/',
      'https://reactjs.org/docs/hooks-effect.html',
      'https://nextjs.org/learn/basics/navigate-between-pages',
      'https://codesandbox.io/s/741nv8951q',
      'https://material.io/tools/icons/?icon=phonelink_ring&style=baseline',
      'https://graphql.github.io/learn/',
      'https://www.apollographql.com/docs/react/react-apollo-migration',
      'https://codesandbox.io/s/r5qp83z0yq',
      'https://coursehunters.net/course/udemy-graphql-with-react-complete-guide',
      'https://github.com/zeit/next.js/tree/canary/examples/with-apollo-auth',
      'https://github.com/adamsoffer/next-apollo-example',
      'https://github.com/apollographql/apollo-client/blob/master/docs/source/basics/setup.md',
      'https://ant.design/components/list/',
      'https://lodash.com/docs/4.17.11#merge',
      'https://hyperjar-admin.eu.auth0.com/login?state=g6Fo2SA5NkozS0I4emNJVTQ0Y190b1d0RTBIMHl3bXJzYUdnOKN0aWTZIGFpUEJlRE51d1F6QXlORHhqQVBTZU5EUm52RW5JYzRZo2NpZNkgVzJRN3AxMzNQd1ZhZzNWS3Q1bVhNcURFM1pBNHVxMTg&client=W2Q7p133PwVag3VKt5mXMqDE3ZA4uq18&protocol=oauth2&response_type=token%20id_token&redirect_uri=http%3A%2F%2F35.176.241.87%2Fauth-callback&scope=openid%20profile&audience=https%3A%2F%2Fhj-staging-api.finover.tech&nonce=pMonxUJ5sEKPAn1xweuVjY0MNPibc2-D&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xMC4xIn0%3D',
      'http://35.177.157.213/auth-callback?code=BWsqwGOlNlpK5FsN&state=g6Fo2SBiSkRCUktSUHJtSGNBOHBCXzBuMEpzUVJGSHNWVFVuR6N0aWTZIC1MVlVCOE92dG5UVUVvdmtSaGlFcW5pU2xSMzY4d3dCo2NpZNkgVzJRN3AxMzNQd1ZhZzNWS3Q1bVhNcURFM1pBNHVxMTg',
    ]
  },
  {
    title: 'REST',
    links: [
      'https://github.com/avoytovich/Bookmars',
      'https://codepen.io/anon/pen/YMPGwv',
      'https://music.youtube.com/watch?v=So2_AxSXak4&list=LM',
    ]
  },
];

export {
  LOYOUT_SUCCESS,
  text,
  menuCategories,
};
