import postgres, {Sql} from 'postgres';

declare module globalThis {
    let postgresSqlClient: Sql;
  }
  
  // Connect only once to the database
  // https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
  function connectOneTimeToDatabase() {
    if (!('postgresSqlClient' in globalThis)) {
      globalThis.postgresSqlClient = postgres();
    }}