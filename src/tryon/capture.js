import React, { Component } from 'react';
import $ from "jquery";
import styles from "./capture.css";
import "./js/tracking.min";
import "./js/face.min";
export class Capturecomponent extends Component{

  componentDidMount(){
    if (!navigator.mediaDevices) {
      alert('getUserMedia support required to use this page');
    }
    let imageData={};
    var video=document.getElementById('video');
    var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
window.navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    video.srcObject = stream;
    video.onloadedmetadata = (e) => {
        video.play();
    };
})
.catch( () => {
    alert('You have give browser the permission to run Webcam and mic ;( ');
});
      document.querySelector('#obtn').addEventListener('click', () => {
        document.getElementById("preloader").style.display="block";
        context.drawImage(video,130,0,360,480,0,0,360,480);
        var dataURL = canvas.toDataURL('image/png');
        localStorage.setItem("camera",dataURL);
        const blobBin = atob(dataURL.split(',')[1]);
        const selfieImageArray = [];
        for (let i = 0; i < blobBin.length; i++) {
          selfieImageArray.push(blobBin.charCodeAt(i));
        }
        const selfieImageFile = new Blob([new Uint8Array(selfieImageArray)], { type: 'image/png' });
        const formdata = new FormData();
        formdata.append('selfie', selfieImageFile);
        const request = new XMLHttpRequest();
        request.open('POST', '/widget/uploadSelfie', true);
        request.onreadystatechange = () => {
          if (request.readyState === 4) {
            if (request.status === 200) {
              const data = JSON.parse(request.responseText);
              localStorage.setItem('sId', data._id);
              imageData=data;

              window.location="/view/main/tryon";
            }
          }
        };
        request.onerror = () => {
          alert('Something went wrong');
        };
        request.send(formdata);
      //window.location="/view/main/tryon";

    });

  }
    render(){
        return(

            <div className={styles.wrap}>
              <nav>
      <ul className={styles.brand}>
          <li style={{marginLeft:"2%",marginTop:"0%"}} >
              <a href="#">
                  <img src={require("./img/logo.png")} width="100"/>
              </a>
          </li>
        </ul>
        </nav>
    <div className={styles.demo} id="demo">
      <div className={styles.imgframe} id="imgframe">
        <div className={styles.preloader} id="preloader"></div>
      </div>

      <span id="obtn" className={styles.btn}>
          <img className={styles.rimg} src={require("./img/widget/camera_white.png" )}/>
        </span>
              <div className={styles.cardtitle} styles="margin-bottom:15px;">
                <strong>POSITION YOUR FACE INSIDE THE CAMERA</strong>
              </div>
              <video id="video"  width="360" height="480" autoPlay loop muted style={{display:"block",position:"fixed",top:"40px",objectFit:"cover"}}></video>
              <div>

              <div>
        </div>
        </div>
        <span className={styles.power}>Powered by
          <img className={styles.foobrand} src={require("./img/widget/oic_footer.png")} />
        </span>

        <canvas id="canvas" className="canvas" width="360" height="480" style={{visibility:"hidden"}}> </canvas>
          <a className={styles.oicmodalclose} href="/view/main/tryon" id="oicmodalclose" >
              <img src={require("./img/widget/close.png" )}/>
          </a>

    </div>

  </div>
        );
    }
}
export default Capturecomponent;
