import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { updateAnimalAction, fetchDogAction } from '../redux/actions';
import AnimalAdapter from '../apis/AnimalAdapter';
import * as actions from '../redux/actions';

 class AnimalPicture extends Component {
   getCat = (event) => {
     // this.props.updateAnimal(url);
   }

   getDog = (event) => {
     console.log(this.props);
     this.props.fetchDog();

     // AnimalAdapter.getDog()
     //  .then(url => {
     //    // this.setState({ url })
     //    this.props.updateAnimal(url);
     //  })
   }

   renderPicture = () => {
     if (!this.props.loading) {
       return <img src={this.props.animalSrc} alt="cute animal" />
     } else {
       return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
     }
   }

   render() {
     return (
       <div className="animal-picture">
         <button onClick={this.getCat}>Fetch Cat</button>
         <button onClick={this.getDog}>Fetch Dog</button>
         {this.renderPicture()}
       </div>
     );
   }
 }

 function mapStateToProps(state) {
   return {
     animalSrc: state.animal.animalSrc,
     loading: state.animal.loading,
   }
 }

 // function mapDispatchToProps(dispatch) {
 //   return {
 //     updateAnimal: (url) => dispatch(updateAnimalAction(url)),
 //     fetchDog: () => dispatch(fetchDogAction()),
 //     // fetchDog: () => {
 //     //   AnimalAdapter.getDog()
 //     //    .then(url => {
 //     //       // this.setState({ url })
 //     //       // this.props.updateAnimal(url);
 //     //       dispatch(updateAnimalAction(url));
 //     //     })
 //     //   }
 //   }
 // }

 export default connect(mapStateToProps, actions)(AnimalPicture);
