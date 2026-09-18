

import { initAuth0 } from '@auth0/nextjs-auth0';

// Public pages are rendered during the build without Auth0 secrets. Delay
// configuration until an auth or protected route actually needs a session.
let auth0Client;

const getAuth0 = () => {
  if (!auth0Client) {
    auth0Client = initAuth0({
      authorizationParams: { scope: 'openid profile' },
    });
  }
  return auth0Client;
};

const auth0 = {
  getSession: (...args) => getAuth0().getSession(...args),
  handleCallback: (...args) => getAuth0().handleCallback(...args),
  handleLogin: (...args) => getAuth0().handleLogin(...args),
  handleLogout: (...args) => getAuth0().handleLogout(...args),
};

export default auth0;

export function isAuthorized(user, role) {
  return Boolean(user?.[process.env.AUTH0_NAMESPACE + '/roles']?.includes(role));
}

export const authorizeUser = async (req, res) => {
  const session = await auth0.getSession(req, res);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/v1/login'
    });
    res.end();
    return null;
  }

  return session.user;
}

export const withAuth = getData => role => async ({req, res}) => {
  const session = await auth0.getSession(req, res);
  if (!session || !session.user || (role && !isAuthorized(session.user, role))) {
    res.writeHead(302, {
      Location: '/api/v1/login'
    });
    res.end();
    return {props: {}};
  }

  const data = getData ? await getData({req, res}, session.user) : {};

  return {props: {user: session.user, ...data}}
}
