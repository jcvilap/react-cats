export function authenticate(credentials) {
  sessionStorage.setItem('authUser', JSON.stringify(credentials));
  return setTimeout(() => {
  }, 100);
}

export function signout() {
  sessionStorage.removeItem('authUser');
}

export function refreshSession() {
  const authUser = sessionStorage.getItem('authUser');
  if (!authUser || authUser === 'undefined') {
    return {};
  }
  return JSON.parse(authUser);
}

export function isAuthenticated() {
  const authUser = sessionStorage.getItem('authUser');
  if (!authUser || authUser === 'undefined') {
    return false;
  }

  const { userName, password } = JSON.parse(authUser);
  return !!(userName && password);
}

