import React,{Component} from "react"
import { inject, observer} from "mobx-react"
import SideBar from './screens/SideBar'
import MovieList from "./screens/MovieList"
import MovieDetails from "./screens/MovieDetails"
import { Flex, Box } from 'reflexbox'
import SearchBar from './screens/SearchBar'

@inject('MovieStore')
@observer
class App extends Component{
  constructor(props){
    super(props)
    this.state={movies:[]}
  }

  componentDidMount = async() => {
    await this.props.MovieStore.fetchMovies()
  }

  selectGender = async(id) => {
    try{
      const url ="https://api.themoviedb.org/3/discover/movie?api_key=5a09926889c9b29f2ca6618bfae9a5c0&with_genres="+ id
      const response = await fetch(url)
      const data = await response.json()
      const list = data.results
      this.setState({movies:list})
    }catch(error){

    }
  }

  render(){
    return(
      <div>
        <div style={{margin:10}}>
            <SearchBar films={this.state.movies}/>
        </div>
      <Flex style={{ flex: 1, flexDirection: 'row'}}>
        <Box style={{flex:1}}>
          <SideBar selectGender={this.selectGender}/>
        </Box>
        <Box style={{flex:3}}>
        <ul>
          {this.state.movies.map(movie => (<MovieDetails key={movie.id} id={movie.id} original_title={movie.original_title} overview={movie.overview} release={movie.release_date} ></MovieDetails>))}
        </ul>
      </Box>
      </Flex>
      </div>
    )   
  }
}


export default App