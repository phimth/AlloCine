import React,{Component} from "react"
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component{
    render(){
    
    if(this.props.films==undefined){
        var films = []
    }else{
        var films = this.props.films
    }
    console.log(films)
        return(
            <Autocomplete
                freeSolo
                disableClearable
                options={films.map((movie)=>movie.original_title)}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Search Movie" variant="outlined" />}
            />
        )
    }
}

export default SearchBar