import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class CategoryShow extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/categories/${id}/products`)
      .then(response => {
        this.setState({ produdcts: response.data });
      });
  }
  render() {
    console.log(this.props.location.state.category.name);
    return (
      <div>
        <h2>Listing Products - {this.state.products.length}</h2>
        <h2>{this.props.location.state.category.name}</h2>
        <Link to="/categories">Back</Link>
      </div>
    );
  }
}
