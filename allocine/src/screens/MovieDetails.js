import React,{Component} from "react"
import { useLocalStore, useObserver} from "mobx-react"
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

class MovieDetails extends Component{
    constructor() {
        super();
        this.state = {
          showPopup: false
        };
      }

    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }

    render(){
        return(
            <div>
            <Popup trigger={<button className="button" key={this.props.id}> {this.props.original_title} </button>} modal>
            <span>
                <h2>Movie : {this.props.original_title}</h2>
                <h3><strong>Release date</strong> : {this.props.release}</h3>
                <p>Description</p>
                <p>{this.props.overview}</p>
            </span>
          </Popup>
          </div>
        )
    }
}

export default MovieDetails