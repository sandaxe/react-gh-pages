import React, { Component } from 'react';
import styles from "./tryon.css";
import $ from "jquery";
const axios = require('axios');
import Capturecomponent from "./capture";
import html2canvas from "html2canvas";
var deter="";
    let currentModelInView = 0;
    let imageData = {};
    let imageSource = '';
    let $previewFrame=document.querySelector('#oicframe');
    imageSource = '/public/img/widget/profile.jpg';
    imageData = {
        _id: 'DEFAULT',
        sellionPointsWidth: 186.6,
        sellionPointsHeight: 215.5,
        distance: 136.19,
        YPR: '0_3_0',
        deviationYaw: 0,
        deviationPitch: 0,
        deviationRoll: 0
    };

class Tryon extends Component{

    componentDidMount(){

      $(function() {
        var url = window.location.href;
        $("nav a").each(function() {
          var con=this.href;
          var connew=con.replace('#', '');
            if (url == connew) {
                $("nav a").addClass("active");
            }
        });
    });





      localStorage.setItem("mod","male");
      imageData = {
          _id: 'DEFAULT',
          sellionPointsWidth: 186.6,
          sellionPointsHeight: 215.5,
          distance: 136.19,
          YPR: '0_3_0',
          deviationYaw: 0,
          deviationPitch: 0,
          deviationRoll: 0
      };
      for(let i=0;i<=100;i++)
      {
        var sss="img"+i;
        localStorage.removeItem(sss);
      }
        this.init();
    }

init(){



 const sessionId = localStorage.getItem('sId');
 if (localStorage.getItem('sId')!=null) {
   document.getElementById("preloader").style.display="block";
    let $profileImage = document.querySelectorAll('#profile-image');
    const request = new XMLHttpRequest();
    request.open('GET', `/widget/${sessionId}`);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        imageData = JSON.parse(request.responseText);
          $('#oicframe').attr('src', '');
          $("#profile-image").attr(
            'src',
            localStorage.getItem("camera")
          );
          document.getElementById("preloader").style.display="none";

      } else {
        document.getElementById("preloader").style.display="block";
          $('#profile-image').attr('src', '/public/img/widget/profile.jpg');
          imageData = {
              _id: 'DEFAULT',
              sellionPointsWidth: 186.6,
              sellionPointsHeight: 215.5,
              distance: 136.19,
              YPR: '0_3_0',
              deviationYaw: 0,
              deviationPitch: 0,
              deviationRoll: 0
          };
          localStorage.setItem("mod","male");
          document.getElementById("preloader").style.display="none";
        }

    };
    request.onerror = () => {
      imageData = {};
      alert('Something went wrong');
    };
    request.send(null);
  }
  else {
    document.getElementById("preloader").style.display="block";
      $('#profile-image').attr('src', '/public/img/widget/profile.jpg');
      imageData = {
          _id: 'DEFAULT',
          sellionPointsWidth: 186.6,
          sellionPointsHeight: 215.5,
          distance: 136.19,
          YPR: '0_3_0',
          deviationYaw: 0,
          deviationPitch: 0,
          deviationRoll: 0
      };
      localStorage.setItem("mod","male");
      document.getElementById("preloader").style.display="none";
    }

  var index = 1;
  var ins=1;
  document.querySelector('#like').addEventListener('click', () => {
    html2canvas(document.getElementById('copying')).then(function(canvas) {
      var deturl=canvas.toDataURL('image/png');
      ///

      ///
      var imgs = document.createElement("img");
      imgs.id="imgs"+index;
      imgs.class="imgs";
  imgs.style.width = "70px";
  imgs.style.height = "70px";
  imgs.style.cursor = "pointer";
  imgs.style.marginLeft = "15px";
  imgs.src=deturl;
  let im="img"+index;
  localStorage.setItem(im,deturl);
  document.getElementById("favcont").appendChild(imgs);
  index++;
  document.getElementById("favcont").style.display="flex";
  document.getElementById("oclose").style.display="block";
});


  });




    let $userRefSelectModelModal = document.querySelector('#oic-select-model-modal');
    document.querySelector('#select-model-btn').addEventListener('click', () => {
        $('#oicframe').attr('src', '');
        deter=require("./img/widget/profile.jpg");

        $userRefSelectModelModal.style.display = '';
            $userRefSelectModelModal.style.display = 'block';
    });

    document.querySelector("#favcont").addEventListener('click',()=>{
      document.getElementById("modelbox").style.display="block";
      var getDivId = document.getElementById("favcont");
      var cimg = getDivId.getElementsByTagName("img");

      if(cimg.length!=1){
        for(let i=1;i<cimg.length;i++)
      {
        var s="img"+i;
      var im = document.createElement("img");
      var di=document.createElement("pops");
      di.id="pops";
      document.getElementById("popup").appendChild(di);
      im.id="img"+i;
      im.style.width = "360px";
      im.style.height = "500px";
    im.style.cursor = "pointer";
    im.style.marginLeft = "15px";
    im.style.marginRight = "15px";
    im.src=localStorage.getItem("img"+i);
    document.getElementById("pops").appendChild(im);
    var rm=document.createElement("img");
    rm.id="removal";
    rm.class=i;
    rm.style.cursor="pointer";
    rm.style.position="absolute";
    rm.src="https://cdn1.iconfinder.com/data/icons/diagona/icon/16/101.png";
     document.getElementById("pops").appendChild(rm);

}} else{
  let i=1;
 var im = document.createElement("img");
 var di=document.createElement("pops");
 di.id="pops";
 document.getElementById("popup").appendChild(di);
 im.id="img"+i;
 im.style.width = "360px";
 im.style.height = "500px";
im.style.cursor = "pointer";
im.style.marginLeft = "15px";
im.style.marginRight = "15px";
im.src=localStorage.getItem("img"+i);
document.getElementById("pops").appendChild(im);
var rm=document.createElement("img");
rm.id="removal";
rm.class=i;
rm.style.cursor="pointer";
rm.style.position="absolute";
rm.src="https://cdn1.iconfinder.com/data/icons/diagona/icon/16/101.png";
document.getElementById("pops").appendChild(rm);

}
    });
    $(document).ready(function(){

    $('#popup').on('click','#removal', function(){
      var s="img"+this.class;
      var  getDivId=document.getElementById("pops")
      var ss=document.getElementById(s);
      var st=this.class;
      var f=document.querySelectorAll("#removal");
      //this.style.display="none";
      this.remove();
      getDivId.removeChild(ss);
      localStorage.removeItem(s);
    });
});
document.querySelector("#selectb").addEventListener('click',()=>{
  index=1;
  var getDivId = document.getElementById("pops");
  var fin=document.querySelectorAll("#removal");
var fina=getDivId.getElementsByTagName("img");
  var getDiv = document.getElementById("favcont");
  var cimg = getDiv.getElementsByTagName("img");
if(fina.length==0){
  document.getElementById("oclose").style.display="none";
  getDiv.innerHTML='';
}else{
  for (let j = 1; j < cimg.length; j++) {
    var foun="imgs"+j;
    var findit="img"+j;
    if (localStorage.getItem(findit)!=null) {
      getDivId.removeChild(document.getElementById(findit));

    } else {
      if(document.getElementById(foun)!=null){
      document.getElementById(foun).remove();
    }
    }
  }
}
  document.getElementById("modelbox").style.display="none";
});

    document.querySelector("#oicclose").addEventListener('click',()=>{
      document.getElementById("modelbox").style.display="none";
      var getDivId = document.getElementById("pops");
      var fin=document.querySelectorAll("#removal");
      for(let i=0;i<fin.length;i++){
        var findit="img"+i;
        fin[i].remove();
        if (localStorage.getItem(findit)!=null) {
          getDivId.removeChild(document.getElementById(findit));

        }
      }

    });
    document.querySelector("#oclose").addEventListener('click',()=>{
      document.getElementById("favcont").style.display="none";
      var getDivId = document.getElementById("favcont");
      var cimg = getDivId.getElementsByTagName("img");
      for(let i=1;i<=100;i++)
      {
        localStorage.removeItem("img"+i);
      }
      var getDivId = document.getElementById("favcont");
      var cimg = getDivId.getElementsByTagName("img");
      for(let i=1;i<cimg.length;i++)
      {
        document.getElementById("favcont").removeChild(cimg[i]);
      }
      index=1;
      document.getElementById("oclose").style.display="none";
    });
    document.querySelector('#prev').addEventListener('click', () => {
        currentModelInView = 0;
        const img=require("./img/widget/profile.jpg");
        deter=require("./img/widget/profile.jpg");
        $('#profilecontainer').attr('src',img);
    });
    document.querySelector('#next').addEventListener('click', () => {
        currentModelInView = 1;
        const imgs=require("./img/widget/female.jpg");
        deter=require("./img/widget/female.jpg");
        $('#profilecontainer').attr('src', imgs);
    });
    function resizeImages(file, complete) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
          complete(resizeInCanvas(img));
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    function resizeInCanvas(img) {
      var perferedWidth = 360;
      var ratio = perferedWidth / img.width;
      var canvas = document.createElement('canvas');
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;
      var ctx = canvas.getContext('2d');
      if (canvas.width > canvas.height) {
        var preferedWidth = 360;
        var ratio = preferedWidth / img.width;
        var canvas = document.createElement('canvas');
        canvas.width = img.width * ratio;
        canvas.height = img.width * ratio * img.width / img.height;
        var ctx = canvas.getContext('2d');
        ctx.setTransform(0, perferedWidth / img.height, -perferedWidth / img.height, 0, canvas.width, 0);
        ctx.drawImage(img, 0, 0);
      } else {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
      return canvas.toDataURL();
    }

    document.getElementById("widget-upload").onchange=function(){
         localStorage.removeItem("sId");
        let $profileImage = document.querySelector('#profile-image');
        let $previewFrame=document.querySelector('#oicframe');
        resizeImages(this.files[0], dataUrl => {
          localStorage.setItem("camera",dataUrl);
          const blobBin = atob(dataUrl.split(',')[1]);
          const selfieImageArray = [];
          for (let i = 0; i < blobBin.length; i++) {
            selfieImageArray.push(blobBin.charCodeAt(i));
          }
          document.getElementById("preloader").style.display="block";
          document.getElementById('oic-upload-modals').style.display="none";
          const selfieImageFile = new Blob([new Uint8Array(selfieImageArray)], { type: 'image/png' });
          const formdata = new FormData();
          formdata.append('selfie', selfieImageFile);
          const request = new XMLHttpRequest();
          request.open('POST', '/widget/uploadSelfie', true);
          request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
              const data = JSON.parse(request.responseText);
              localStorage.setItem('sId', data._id);
              $profileImage.setAttribute('src', dataUrl);
              $previewFrame.setAttribute('src', '');
              document.getElementById("preloader").style.display="none";

              imageData = data;
            }
          };
          request.onerror = () => {
            alert('Something went wrong');
          };
          request.send(formdata);
        });
        document.getElementById("preloader").style.display="none";

    }
    document.querySelector('#upload-image-btn').addEventListener('click', () => {

        $("#oicframe").attr('src', '');
        document.getElementById('oic-upload-modals').style.display="block";
    });
        document.querySelector('#oicmodal__close').addEventListener('click', () => {
            document.getElementById('oic-select-model-modal').style.display="none";
            document.getElementById('oic-upload-modals').style.display="none";

        });
        document.querySelector('#oicmodel__close').addEventListener('click', () => {
            document.getElementById('oic-select-model-modal').style.display="none";
            document.getElementById('oic-upload-modals').style.display="none";

        });
        document.querySelector('#oic-submit-image').addEventListener('click', () => {
          localStorage.removeItem("camera");
          document.getElementById("preloader").style.display="block";
            document.getElementById('oic-select-model-modal').style.display="none";
            localStorage.removeItem("sId");
            if (currentModelInView === 0) {
                // Male Model
                imageSource = '/public/img/widget/profile.jpg';
                localStorage.setItem("mod","male");
                imageData = {
                    _id: 'DEFAULT',
                    sellionPointsWidth: 186.6,
                    sellionPointsHeight: 215.5,
                    distance: 136.19,
                    YPR: '0_3_0',
                    deviationYaw: 0,
                    deviationPitch: 0,
                    deviationRoll: 0
                };
            } else {
                // Female Model
                imageSource = '/public/img/widget/female.jpg';
                localStorage.setItem("mod","female");
                imageData = {
                    _id: 'DEFAULT',
                    sellionPointsWidth: 183.71,
                    sellionPointsHeight: 201.08,
                    distance: 136.19,
                    YPR: '0_3_0',
                    deviationYaw: 0,
                    deviationPitch: 0,
                    deviationRoll: 0
                };
            }
            document.getElementById("preloader").style.display="none";
            $('#profile-image').attr('src', deter);

        });

}

    getFrames=(frameId)=>{
      document.getElementById("preloader").style.display="block";
       var frameIdArray = [];
       let $previewFrame=document.querySelector('#oicframe');
       frameIdArray.push(frameId);
       const request = new XMLHttpRequest();
   		request.open('POST', '/widget/getGlassFrames', true);
      request.setRequestHeader( 'Access-Control-Allow-Origin', '*');
   		request.setRequestHeader('Content-Type', 'application/json');
   		request.onreadystatechange = () => {
   			if (request.readyState === 4 && request.status === 200) {

   				let data = JSON.parse(request.responseText);
   				if (!Array.isArray(data)) {
   					data = [data];
   				}


   				$previewFrame.setAttribute('src', data[0].frameUrl);
        //	$previewFrame.setAttribute('src', require("./img/mach.png"));//Demo For Favorite





   				$previewFrame.style.left = `${data[0].left}px`;
   				$previewFrame.style.top = `${data[0].top}px`;
   				$previewFrame.style.width = `${data[0].width}px`;
   				$previewFrame.style.transform = `perspective(200px) rotateX(${data[0].deviationX}deg) rotateY(${
   					data[0].deviationY
   				}deg) rotateZ(${data[0].deviationZ}deg)`;
          document.getElementById("preloader").style.display="none";
   			}
   		};
   		request.onerror = () => {
   			alert('Something went wrong');
   		//	$preloader.style.display = 'none';
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
   					_id: imageData._id,
   					frameId: frameIdArray
   				})
   			);
   		}
      ///

      ///
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
                <li className={styles.tries}>
                    <a href="#">Try On View</a>
                </li>
                <li className={styles.item}>
                    <a href="/view/main/preview">Compare View</a>
                </li>

            </ul>


        </ul>
    </nav>


    <div className={styles.page}>
        <div className={styles.glasses} id="glasses">
            <div className={styles.widgetorder} id="widgetorder">
                <div className={styles.widh}>
                <li>
                    <img src="https://s3-ap-south-1.amazonaws.com/2d-visual/lookz_00005243/thumbnail.jpg"/>
                    <p className={styles.prodname}>MARC - MB102</p>
                    <p>GOLDEN RIM AVIATOR</p>
                </li>
                <button onClick={()=>this.getFrames('lookz_00005243')}>TRY NOW</button>
                </div>
                <div className={styles.widh}>
                <li>
                    <img src="https://s3-ap-south-1.amazonaws.com/2d-visual/lookz_00005244/thumbnail.jpg"/>
                    <p className={styles.prodname}>MARC - MB102</p>
                    <p>GOLDEN RIM AVIATOR</p>
                </li>
                <button onClick={()=>this.getFrames('lookz_00005244')}>TRY NOW</button>
                </div>
                <div className={styles.widh}>
                <li>
                    <img src="https://s3-ap-south-1.amazonaws.com/2d-visual/lookz_00005245/thumbnail.jpg"/>
                    <p className={styles.prodname}>MARC - MB102</p>
                    <p>GOLDEN RIM AVIATOR</p>
                </li>
                <button onClick={()=>this.getFrames('lookz_00005245')}>TRY NOW</button>
                </div>
                <div className={styles.widh}>
                <li>
                    <img src="https://s3-ap-south-1.amazonaws.com/2d-visual/lookz_00005246/thumbnail.jpg"/>
                    <p className={styles.prodname}>MARC - MB102</p>
                    <p>GOLDEN RIM AVIATOR</p>
                </li>
                <button onClick={()=>this.getFrames('lookz_00005246')}>TRY NOW</button>
                </div>
                <div className={styles.widh}>
                <li>
                    <img src="https://s3-ap-south-1.amazonaws.com/2d-visual/lookz_00005247/thumbnail.jpg"/>
                    <p className={styles.prodname}>MARC - MB102</p>
                    <p>GOLDEN RIM AVIATOR</p>

                </li>
                <button onClick={()=>this.getFrames('lookz_00005247')}>TRY NOW</button>
                </div>
                <div className={styles.widh}>
                <li>
                    <img src="https://s3-ap-south-1.amazonaws.com/2d-visual/lookz_00005248/thumbnail.jpg"/>
                    <p className={styles.prodname}>MARC - MB102</p>
                    <p>GOLDEN RIM AVIATOR</p>

                </li>
                <button onClick={()=>this.getFrames('lookz_00005248')}>TRY NOW</button>
                </div>
                <div className={styles.widh}>
                <li>
                    <img src="https://s3-ap-south-1.amazonaws.com/2d-visual/lookz_00005249/thumbnail.jpg"/>
                    <p className={styles.prodname}>MARC - MB102</p>
                    <p>GOLDEN RIM AVIATOR</p>

                </li>
                <button onClick={()=>this.getFrames('lookz_00005249')}>TRY NOW</button>
                </div>
                <div className={styles.widh}>
                <li>
                    <img src="https://s3-ap-south-1.amazonaws.com/2d-visual/lookz_00005250/thumbnail.jpg"/>
                    <p className={styles.prodname}>MARC - MB102</p>
                    <p>GOLDEN RIM AVIATOR</p>

                </li>
                <button onClick={()=>this.getFrames('lookz_00005250')}>TRY NOW</button>
                </div>
                <div className={styles.widh}>
                <li>
                    <img src="https://s3-ap-south-1.amazonaws.com/2d-visual/lookz_00005251/thumbnail.jpg"/>
                    <p className={styles.prodname}>MARC - MB102</p>
                    <p>GOLDEN RIM AVIATOR</p>

                </li>
                <button onClick={()=>this.getFrames('lookz_00005251')}>TRY NOW</button>
                </div>
                <div className={styles.widh}>
                <li>
                    <img src="https://s3-ap-south-1.amazonaws.com/2d-visual/lookz_00005252/thumbnail.jpg"/>
                    <p className={styles.prodname}>MARC - MB102</p>
                    <p>GOLDEN RIM AVIATOR</p>

                </li>
                <button onClick={()=>this.getFrames('lookz_00005252')}>TRY NOW</button>
                </div>
                <div className={styles.widh}>
                <li>
                    <img src="https://s3-ap-south-1.amazonaws.com/2d-visual/lookz_00005253/thumbnail.jpg"/>
                    <p className={styles.prodname}>MARC - MB102</p>
                    <p>GOLDEN RIM AVIATOR</p>

                </li>
                <button onClick={()=>this.getFrames('lookz_00005253')}>TRY NOW</button>
                </div>
                <div className={styles.widh}>
                <li>
                    <img src="https://s3-ap-south-1.amazonaws.com/2d-visual/lookz_00004049/thumbnail.jpg"/>
                    <p className={styles.prodname}>MARC - MB102</p>
                    <p>GOLDEN RIM AVIATOR</p>

                </li>
                <button onClick={()=>this.getFrames('lookz_00004049')}>TRY NOW</button>
                </div>

            </div>

        </div>

        <div id="widgetcode">


            <div id="oic-main-wrap">
                <main className={styles.oiccontent} id="oic-content">

                    <div className={styles.oicinwrap}>

                        <div className={styles.tryoutarea}>

                            <div className={styles.tryoutoption}>
                                <nav className={styles.optionnav}>
                                    <ul className={styles.omenu}>
                                        <li className={styles.omenu__item}>
                                            <a href="/view/main/capture" className={styles.oichook}>
                                                <img className={styles.resimg} src={require("./img/widget/camera.png")} />
                                            </a>
                                        </li>
                                        <li className={styles.omenu__item}>
                                            <a className={styles.oichook} id="upload-image-btn">
                                                <img className={styles.resimg} src={require("./img/widget/upload.png")} />
                                            </a>
                                        </li>

                                        <li className={styles.omenu__item}>
                                            <a className={styles.oichook} id="select-model-btn">
                                                <img className={styles.resimg} src={require("./img/widget/preset.png")}/>
                                            </a>
                                        </li>
                                        <li className={styles.omenu__item}>
                                            <a className={styles.oichook} id="like">
                                                <img className={styles.resimg} src={require("./img/like.png")}/>
                                            </a>
                                        </li>

                                        <div className={styles.productmatch}>
                                            <ul className="oic-vlist">
                                                <li className={styles.oicitem}>
                                                    <a className={styles.producthook}>
                                                        <img className={styles.resimg} />
                                                    </a>
                                                </li>
                                                <li className={styles.oicitem}>
                                                    <a className={styles.producthook}>
                                                        <img className={styles.resimg} />
                                                    </a>
                                                </li>
                                                <li className={styles.oicitem}>
                                                    <a className={styles.producthook}>
                                                        <img className={styles.resimg} />
                                                    </a>
                                                </li>
                                                <li className={styles.oicitem}>
                                                    <a className={styles.producthook}>
                                                        <img className={styles.resimg} />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </ul>
                                </nav>
                            </div>
                            <div className={styles.oicuser__profile}>
                                <div className={styles.preloader} id="preloader"></div>
                                <div id="copying">
                                <img className={styles.resimg} id="profile-image"  style={{width:"360px"}} />
                                <img id="oicframe" className={styles.oicframe} />
                                </div>
                                <button  className={styles.oclose} id="oclose">
                                  X
                                </button>
                                <div className={styles.favcont} id="favcont">

                                  <img></img>
                                </div>
                            </div>

                            <div className={styles.oicmodals} id="oic-upload-modals" style={{display:"none"}}>
                                <div className={styles.oicmodal__body}>
                                    <div className={styles.oiccards}>
                                        <div className={styles.oiccards__body}>

                                                <div className={styles.oiccard__title}>
                                                    <strong>
                                                        click to select image
                                                        <br/>(or)
                                                        <br/>drag and drop</strong>
                                                </div>
                                                <input type="file" id="widget-upload" style={{opacity: "0.0",position: "absolute",top: "0",left: "0",bottom: "0",right: "0",width: "100%",height: "100%",}}/>
                                        </div>

                                    </div>
                                    <button className={styles.oicmodel__close} id="oicmodel__close">
                                        <img src={require("./img/widget/close.png" )}/>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.oicmodal} >
                                <div className={styles.oicmodals__body} id="oic-select-model-modal" style={{display:"none"}}>
                                    <div className={styles.oiccard}>
                                        <div className={styles.oiccard__body}>
                                            <div className={styles.oiccard__title}>
                                                <strong>Choose a model</strong>
                                            </div>
                                            <div className={styles.oicmodel__figure}>
                                                <img id="profilecontainer" className={styles.resimg} src={require("./img/widget/profile.jpg" )}/>
                                            </div>
                                            <nav className={styles.oicnav}>
                                                <a className={styles.oicnav__prev} id="prev">
                                                    <img src={require("./img/widget/left_arrow.png" )}/>
                                                </a>
                                                <a className={styles.oicnav__next} id="next">
                                                    <img src={require("./img/widget/right_arrow.png" )}/>
                                                </a>
                                            </nav>
                                            <div className={styles.oichlist}>
                                                <div className={styles.oicitem}>
                                                    <button id="oic-submit-image" className={styles.oicbtn}>Select</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className={styles.oicmodal__close} id="oicmodal__close">
                                        <img src={require("./img/widget/close.png" )}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>


            </div>
        </div>

    </div>

    <div id="modelbox" className={styles.modelbox}>
      <div id="modelcontent" className={styles.modelcontent}>
        <button className={styles.oicclose} id="oicclose">
            <img src={require("./img/widget/close.png" )}/>
        </button>
        <div className={styles.compare} id="compare">
          <h3 style={{textAlign: "center"}}>Compare Images</h3>
          <div className={styles.popup} id="popup">

          </div>

            <button id="selectb" className={styles.selectb}>Select
            </button>
        </div>
      </div>
    </div>
        </div>

    );}
}

export default Tryon;
