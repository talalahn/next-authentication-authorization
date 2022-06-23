// import Tokens from 'csrf';

// const tokens = new Tokens();

// export function createCsrfToken(secret: string) {
//   if (typeof process.env.CSRF_SECRET_SALT === 'undefined') {
//     throw new Error('CSRF_SECRET_SALT is not defined');
//   }

//   return tokens.create(secret);
// }

// export function createCSRFSecret() {
//   return tokens.secretSync();
// }

// export function verifyCsrfToken(secret: string, csrfToken: string) {
//   // if (typeof process.env.CSRF_SECRET_SALT === 'undefined') {
//   //   throw new Error('CSRF_SECRET_SALT is not defined');
//   // }

//   return tokens.verify(secret, csrfToken);
// }
export function Auth() {}
