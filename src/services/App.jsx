import { Component } from "react";
import Button from "../Button/Button";
import { fetchMovies } from "services/moviesApi";


class App extends Component  {
  state ={ 
    isListShown: false,
    movies: [],
    isLoader: false,
  }
  componentDidUpdate(prevState,prevProps) {
if(prevState.isListShown !== this.state.isListShown && this.state.isListShown){
  this.setState({isLoader:true});
  fetchMovies().then(res => {
    
  })
}

  }

  togelVisibility = () => {
this.setState(prevState => {
  return {isListShown: !prevState.isListShown}
})
  }
  render() {
    const {isListShown} = this.state;
    return (
  
     <Button 
     text={isListShown ? "Hide movies" : "Show movies"}
     clickHandler={this.togelVisibility}
     />
 
  );
  }
  
};

export default App