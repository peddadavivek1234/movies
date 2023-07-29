import {Component} from 'react'
import Cookies from 'js-cookie'

class FetchApi extends Component {
    state = {
        moviesData: [],
    }

    componentDidMount() {
        this.getMoviesData()
    }

    getMoviesData = async () => {
        const jwtToken = Cookies.get('jwt_token')
        const apiUrl = 'https://hoblist.com/api/movieList'
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`
            },
            method: 'POST',
        }
        const response = await fetch(apiUrl,options)
        if (response.ok) {
            const fetchedData = await response.json()
            const updatedData = fetchedData.
        }
    }
}