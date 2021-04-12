import React,{Component} from "react"
import { useLocalStore, useObserver} from "mobx-react"

export default class GenderList extends Component{
    state= {
        loading:true,
        genders: [],
        bestMovie:null,
    }

    async componentDidMount(){
        const genderUrl ="https://api.themoviedb.org/3/genre/movie/list?api_key=5a09926889c9b29f2ca6618bfae9a5c0"
        const genderResponse = await fetch(genderUrl)
        const genderData = await genderResponse.json()

        const movieUrl ="https://api.themoviedb.org/3/trending/movie/week?api_key=5a09926889c9b29f2ca6618bfae9a5c0"
        const movieResponse = await fetch(movieUrl)
        const movieData = await movieResponse.json()
        this.setState({genders:genderData.genres,bestMovie:movieData.results[0], loading:false})
    }

    render(){
        return (<div>
            {this.state.loading ? 
                <div>Loading genders...</div>
                : 
                <div>
                    <div>{this.state.bestMovie.original_title}</div>
                    <div>{this.state.bestMovie.overview}</div>
                    {this.state.bestMovie.video ? <div>{this.state.bestMovie.video}</div>:<div>Can't read video</div>}
                    <ul>
                        {this.state.genders.map(gender=>(
                            <li key={gender.id}>
                            <button onClick={()=>this.props.selectGender(gender.id)}>{gender.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>}
        </div>)
    }
  }