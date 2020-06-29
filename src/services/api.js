import axios from 'axios'

// Search
export function getSearchResult(query) {
  return axios.get(`/search/shows?q=${query}`).then(res => res.data)
}

// DashBoard
export function getAllShows() {
  return axios.get('/shows').then(res => res.data)
}

// Detail Page
export function getShowDetailsById(id) {
  return axios.get(`/shows/${id}?embed=cast`).then(res => res.data)
}

