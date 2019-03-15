export function fetchCat() {
  return fetch('https://aws.random.cat/meow')
    .then(resp => resp.json())
    .then(json => json.file);
}

export function toggleFavorite(cat) {
  const authUserStr = sessionStorage.getItem('authUser') || 'undefined';
  const { userName } = authUserStr === 'undefined' ? {} : JSON.parse(authUserStr);
  const favoriteStr = sessionStorage.getItem('favoritesByUser') || 'undefined';
  const favoriteByUser = favoriteStr === 'undefined' ? {} : JSON.parse(favoriteStr);
  const favorites = favoriteByUser[userName] || [];
  const index = favorites.indexOf(cat);

  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(cat);
  }

  favoriteByUser[userName] = favorites;
  sessionStorage.setItem('favoritesByUser', JSON.stringify(favoriteByUser));

  return favorites;
}

export function getFavorites() {
  const authUserStr = sessionStorage.getItem('authUser') || 'undefined';
  const { userName } = authUserStr === 'undefined' ? {} : JSON.parse(authUserStr);
  const favoriteStr = sessionStorage.getItem('favoritesByUser') || 'undefined';
  const favoriteByUser = favoriteStr === 'undefined' ? {} : JSON.parse(favoriteStr);
  return favoriteByUser[userName] || [];
}