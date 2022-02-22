/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import Head from 'next/head';

import Script from 'next/script';

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'jbtte',
        uploadPreset: 'cha_das_marias',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
        }
      }
    );
    document.getElementById('upload_widget').addEventListener(
      'click',
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <>
        {/* <Head>
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            src="https://widget.cloudinary.com/v2.0/global/all.js"
            type="text/javascript"
          />
        </Head> */}
        <button id="upload_widget" className="btn btn-success small-screen">
          Mande seu Video
        </button>
      </>
    );
  }
}

export default CloudinaryUploadWidget;
