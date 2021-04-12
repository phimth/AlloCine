import {obersavable,action,computed, observable, runInAction} from "mobx"

class MovieStore {
    @observable movies = []

    @action addMovies = (movie) => {
        this.movies.push(movie)
    }

    @computed get moviesCount(){
        return this.movies.length
    }

    @computed get moviesAll(){
        return this.movies
    }

    @action async fetchMovies(id){
        this.movies = []
        try{
            const url ="https://api.themoviedb.org/3/discover/movie?api_key=5a09926889c9b29f2ca6618bfae9a5c0&with_genres="+ id
            const response = await fetch(url)
            const data = await response.json()

            runInAction(()=>{
                this.movies = data.results
            })

            // const list = data.results
            // this.movies = list
            // return this.movies
        }catch(error){

        }

    }
}

const store = new MovieStore()
export default store 