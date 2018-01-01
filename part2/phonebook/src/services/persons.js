import axios from 'axios'
const SERVER = `${process.env.REACT_APP_SERVER_ADDRESS}/persons`

const createPerson = (newPerson) => {
  return axios.post(SERVER, newPerson).then(_handleResponse)
}

const getAllPersons = () => {
  return axios.get(SERVER).then(_handleResponse)
}

const deletePerson = (id) => {
  return axios.delete(`${SERVER}/${id}`).then(_handleResponse)
}

const _handleResponse = (response) => response.data

export default { createPerson, getAllPersons }
