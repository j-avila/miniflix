import React, { Component} from 'react';
// import { Link } from 'react-router-dom';
import Nav from './Nav';

class Upload extends Component {
  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'dqb3ubfrv',
      upload_preset: 'miniflix-test',
      tags: ['miniflix'],
      sources: ['local', 'url', 'google_photos', 'facebook', 'image_search']
      },
      function(error, result) {
        console.log('this is the result', result);
      });
  }

  render() {
    return(
      <div>
        <Nav />
        <h3> Upload your 20 sec video</h3>
        <hr />

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <button onClick={this.uploadWidget} className="btn btn-lg btn-info">Upload video</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Upload; 