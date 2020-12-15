import React,{Component} from "react";
import styles from "./preview.css";
import $ from "jquery";
let frames = ['lookz_00005243', 'lookz_00005244', 'lookz_00005245', 'lookz_00005246',
'lookz_00005247', 'lookz_00005248', 'lookz_00005249', 'lookz_00005250',
'lookz_00005251', 'lookz_00005252', 'lookz_00005253','lookz_00004049']

let sessionId = window.localStorage.getItem('sId');
let imageData={};
class Preview extends Component{
  componentDidMount(){

    for (let i=0;i<frames.length;i++) {
      $('#widgetorder').append('<div style="position: relative; left: 0; top: 0;margin:30px"><figure id="figure" class="figure" style="border: solid 1px #bbcff6;" onhover="box-shadow: 0 2px 11px 3px #d3dbda;"><img id="profile-image" class="profile-image"  style="width:360px;" /><img class="oicframe" id="oicframe" style="position:absolute"/></figure></div>');
    }


    if (localStorage.getItem('sId')!=null) {
      let $profileImage = document.querySelectorAll('#profile-image');
      const request = new XMLHttpRequest();
      request.open('GET', `/widget/${sessionId}`);
      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
          imageData = JSON.parse(request.responseText);
          let imgsrr=`https://storage.googleapis.com/cep-module-vision/webapp/${imageData.imageUrl}`;
          for (let i=0;i<$profileImage.length;i++) {
            $profileImage[i].setAttribute('src',imgsrr);

          }
          _getFramesV2(sessionId, frames)

        }
      };
      request.onerror = () => {
        imageData = {};
        alert('Something went wrong');
      };
      request.send(null);
    }else{
      sessionId='DEFAULT';
      if(localStorage.getItem("mod")==="male"){
        sessionId="5fd0fa3cd81f417eff008db3";
        /*imageData = {
            _id: 'DEFAULT',
            sellionPointsWidth: 186.6,
            sellionPointsHeight: 215.5,
            distance: 136.19,
            YPR: '0_3_0',
            deviationYaw: 0,
            deviationPitch: 0,
            deviationRoll: 0
        };*/
        let $profileImage = document.querySelectorAll('#profile-image');
        for (let i=0;i<$profileImage.length;i++) {
          $profileImage[i].setAttribute('src','/public/img/widget/profile.jpg');
          //_getFramesV2(sessionId, frames);
        }
        _getFramesV2(sessionId, frames)
      }
      else{
        let $profileImage = document.querySelectorAll('#profile-image');
        sessionId="5fd0fab8d81f417eff008db4";
        /*imageData = {
            _id: 'DEFAULT',
            sellionPointsWidth: 183.71,
            sellionPointsHeight: 201.08,
            distance: 136.19,
            YPR: '0_3_0',
            deviationYaw: 0,
            deviationPitch: 0,
            deviationRoll: 0
        };*/
        for (let i=0;i<$profileImage.length;i++) {
          $profileImage[i].setAttribute('src','/public/img/widget/female.jpg');

        }
        _getFramesV2(sessionId, frames)

      }
    }




    function _getFramesV2(sessionId, frames) {
  		var frameIdArray = frames;
  		const request = new XMLHttpRequest();
  		request.open('POST', '/widget/getGlassFrames', true);
  		request.setRequestHeader('Content-Type', 'application/json');
  		request.onreadystatechange = () => {
  			if (request.readyState === 4 && request.status === 200) {
  				let data = JSON.parse(request.responseText);
          console.log(request.responseText);
  				let $previewFrame = document.querySelectorAll('#oicframe');
  				for (let i=0;i<data.length;i++) {
  					$previewFrame[i].setAttribute('src', data[i].frameUrl);
  					$previewFrame[i].style.left = `${data[i].left}px`;
  					$previewFrame[i].style.top = `${data[i].top}px`;
  					$previewFrame[i].style.width = `${data[i].width}px`;
  					$previewFrame[i].style.transform = `perspective(200px) rotateX(${data[i].deviationX}deg) rotateY(${
  						data[i].deviationY
  					}deg) rotateZ(${data[i].deviationZ}deg)`;
  				}
  			}
  		};
  		request.onerror = () => {
  			alert('Something went wrong');
  		};
  		if (imageData._id === 'DEFAULT') {
  			request.send(
  				JSON.stringify({
  					_id: imageData._id,
  					frameId: frameIdArray,
  					imageData
  				})
  			);
  		} else {
  			request.send(
  				JSON.stringify({
  					_id: sessionId,
  					frameId: frameIdArray
  				})
  			);
  		}
  	}








  }







  render(){
      return(
          <div className={styles.tryoncont}>
              <nav>
      <ul className={styles.brand}>
          <li style={{marginLeft:"2%",marginTop:"0%"}} >
              <a href="#">
                  <img src={require("./img/logo.png")} width="100"/>
              </a>
          </li>

          <ul className={styles.nav}>
              <li className={styles.item}>
                  <a href="/view/main/tryon" >Try On View</a>
              </li>
              <li className={styles.item}>
                  <a href="#">Compare View</a>
              </li>
          </ul>
      </ul>
  </nav>

  <div className={styles.page}>
      <div className={styles.glasses}>
          <ul className={styles.widgetorder} id="widgetorder">
          </ul>
        </div>
          </div>
      </div>

  );}
}

export default Preview;
