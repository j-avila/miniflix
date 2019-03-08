import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class Upload extends Component {
  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'cloud_name',
      upload_preset: '<unsigned-preset>',
      tags: ['miniflix'],
      sources: ['local', 'url', 'google_photos', 'facebook', 'image_search']
      },
      function(error, result) {
        console.log('this is the result', result);
      });
  }

  render() {
    return(
      <>
        <Nav />
        <h3> Upload your 20 sec video</h3>
        <hr />

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <button className="btn btn-lg btn-info">Upload video</button>
          </div>
        </div>
      </>
    )
  }
}

export default Upload; 