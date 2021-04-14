import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=5708990e-1745-4631-8cb3-4cd9e4c36cec',
})

export default api