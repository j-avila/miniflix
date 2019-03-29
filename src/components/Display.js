import React, { Component } from "react";
// import { isLoggedIn } from '../utils/AuthService';
import Nav from "./Nav";
import axios from "axios";
import { CloudinaryContext, Transformation, Video } from 'cloudinary-react';


class Display extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
  }

  getVideos = () => {
    axios.get('http://res.cloudinary.com/unicodeveloper/video/list/miniflix.json').then(res => {
      console.log(res.data.resources)
      this.setState({videos: res.data.resources})
    })
  }

  componentDidMount() {
    this.getVideos()
  }

  render() {
    const {videos} = this.state
    return (
      <div>
        <Nav />
        <h3 className="text-center"> Latest videos on miniflix</h3>
        <hr />
          <CloudinaryContext cloudName="unicodeveloper">
          <div className="col-sm-12">
            <div className="row">
              {
                videos.map((data, index) => {
                  return(
                    <div className="col-sm-4" key={index}>
                      <div className="embend-reponsive embed-reponsive-4by3">
                        <Video publicId={data.public_id} width="300" heigth="300" controls> </Video>
                      </div>
                      <div><h3>{data.name}</h3>Created at {data.created_at}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          </CloudinaryContext>
      </div>
    )
  }
}

export default Display;