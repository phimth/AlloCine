import React,{Component} from "react"
import { inject, observer} from "mobx-react"

@inject('MovieStore')
@observer
class MovieList extends Component{
    
    async fetch(){
        const url ="https://api.themoviedb.org/3/discover/movie?api_key=5a09926889c9b29f2ca6618bfae9a5c0&with_genres="+ this.props.id
        const response = await fetch(url)
        const data = await response.json()
    }
    render(){
        return(
            <div>movies</div>
        )
    }
}

export default MovieList

// const MoviesList = () =>{

//   return useObserver(()=>(
//     <ul>
//     {store.movies.map(movie => (<li key={movie}>{movie}</li>))}
//   </ul>
//   ))

// }