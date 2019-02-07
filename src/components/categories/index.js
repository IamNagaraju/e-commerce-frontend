import React, { Component } from 'react'
import axios from "axios"
import { BrowserRouter, Link, Route } from "react-router-dom"
class CategoryIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/categories').then(response => {
      this.setState({
        categories: response.data
      })
    })
  }
  render() {
    return (
      <div>
        <h3>Lisitng Categories- {this.state.categories.length}</h3>
        <ul>
          {this.state.categories.map((data, index) => {
            return <li key={index}><Link to={
              {
                pathname: `/categories/${data._id}`,
                state: {
                  category: {
                    _id: data._id,
                    name: data.name
                  }
                }
              }
            }>{data.name}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}

export default CategoryIndex