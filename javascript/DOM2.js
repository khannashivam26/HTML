<html>
  <head>
    <title>BULB ON/OFF</title>
    <style>
       
    .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
 width:50%;
  }
    
        .centerbutton{
            display:block;
            margin-left:auto;
            margin-right: auto;
            padding:20px;
            background-color: green;
        }
    </style>
  </head>
  <body style="background-color: black;">
    <img id='img' src="img/bulb_off.avif"  alt="image not found" class="center">
    <button id='bttn' class="centerbutton">Turn On</button>
    <script>
        let btn=document.getElementById('bttn');
        let img=document.getElementById('img');
        btn.addEventListener('click',toggleBtn);
        function toggleBtn(e){
            if(btn.textContent.includes('Turn On')){
                img.src="img/bulb_on.avif";
                btn.textContent="Turn Off";
            }else{
                img.src="img/bulb_off.avif";
                btn.textContent="Turn On";
            }
            
        }
    </script>
  </body>
</html>
