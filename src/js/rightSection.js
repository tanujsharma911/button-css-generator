
// right editor section logic
let normalState = document.querySelector('#normalState');
normalState.addEventListener('click', checkStateChecked);
let hoverState = document.querySelector('#hoverState');
hoverState.addEventListener('click', checkStateChecked);
let clickState = document.querySelector('#click');
clickState.addEventListener('click', checkStateChecked)


let normalStateSection = document.querySelector('#normalStateSection');
let hoverStateSection = document.querySelector('#hoverStateSection');
let clickStateSection = document.querySelector('#clickStateSection');

function checkStateChecked(){
   if(normalState.checked){
      normalStateSection.style.display = '';
      hoverStateSection.style.display = 'none'
      clickStateSection.style.display = 'none'

   }else if(hoverState.checked) {
      normalStateSection.style.display = 'none';
      hoverStateSection.style.display = ''
      clickStateSection.style.display = 'none'

   }else if(clickState.checked){
      normalStateSection.style.display = 'none';
      hoverStateSection.style.display = 'none'
      clickStateSection.style.display = ''
   }
}
checkStateChecked()


var btn = document.querySelector('#editable-btn');



// set range dynamic
function btnText(){
   btn.textContent = document.querySelector('#text').value;
   generate()
}
function btnFontSize(){
   btn.style.fontSize = document.querySelector('#fontSize').value + 'px';
   generate()
}
function textAlign(){
   let textAlign = 'center';
   if(document.querySelector('#centerTextAlign').checked){
      textAlign = 'center'
   }else if(document.querySelector('#leftTextAlign').checked){
      textAlign = 'left'
   }else if(document.querySelector('#rightTextAlign').checked){
      textAlign = 'right'
   }
   btn.style.textAlign = textAlign;
   generate()
}

function btnWidth() {
   btn.style.width = document.querySelector('#width').value + 'px';
   document.querySelector('#widthNumberPreview').value = document.querySelector('#width').value;
   generate()
}
function btnHeight() {
   btn.style.height = document.querySelector('#height').value + 'px';
   document.querySelector('#heightNumberPreview').value = document.querySelector('#height').value;
   generate()
}
function btnFontColour(){
   btn.style.color = document.querySelector('#fontColour').value;
   document.querySelector('#fontColourPreview').style.backgroundColor = document.querySelector('#fontColour').value;
   generate()
}
function btnColour(){
   btn.style.backgroundColor = document.querySelector('#buttonColour').value;
   document.querySelector('#buttonColourPreview').style.backgroundColor = document.querySelector('#buttonColour').value;
   generate()
}
function btnBorderWidth(){
   btn.style.borderWidth = document.querySelector('#borderWidth').value + 'px';
   document.querySelector('#borderWidthNumberPreview').value = document.querySelector('#borderWidth').value;
   generate()
}
function btnBorderRadius(){
   btn.style.borderRadius = document.querySelector('#borderRadius').value + 'px';
   document.querySelector('#borderRadiusNumberPreview').value = document.querySelector('#borderRadius').value;
   generate()
}
function btnBorderColour(){
   btn.style.borderColor = document.querySelector('#borderColour').value;
   document.querySelector('#borderColourPreview').style.backgroundColor = document.querySelector('#borderColour').value;
   generate()
}

// text shadow
let textShadowBlur = 0;
let textShadowColor = 'black';
let textShadowOffsetX = 0;
let textShadowOffsetY = 0;
function setTextShadowOffsetX(){
   textShadowOffsetX = document.querySelector('#textOffsetX').value;
   document.querySelector('#textShadowOffsetX_NumberPreview').value = document.querySelector('#textOffsetX').value;
   setTextShadow()
}
function setTextShadowOffsetY(){
   textShadowOffsetY = document.querySelector('#textOffsetY').value;
   document.querySelector('#textShadowOffsetY_NumberPreview').value = document.querySelector('#textOffsetY').value;
   setTextShadow()
}
function setTextShadowBlur(){
   textShadowBlur = document.querySelector('#textShadowBlur').value;
   document.querySelector('#textShadowBlur_numberPreview').value = document.querySelector('#textShadowBlur').value;
   setTextShadow()
}
function setTextShadowColour(){
   textShadowColor = document.querySelector('#textShadowColour').value.toString();
   document.querySelector('#textShadowColourPreview').style.backgroundColor = document.querySelector('#textShadowColour').value;
   setTextShadow()
}
function setTextShadow(){
   let shadow = textShadowOffsetX + 'px ' + textShadowOffsetY + 'px ' + textShadowBlur + 'px ' + textShadowColor;
   btn.style.textShadow = shadow.toString();
   generate()
}

// text shadow
let btnShadowBlur = 0;
let btnShadowSpread = 0;
let btnShadowColor = 'black';
let btnShadowOffsetX = 0;
let btnShadowOffsetY = 0;
function setBtnShadowOffsetX(){
   btnShadowOffsetX = document.querySelector('#btnOffsetX').value;
   document.querySelector('#btnShadowOffsetX_NumberPreview').value = document.querySelector('#btnOffsetX').value;
   setBtnShadow()
}
function setBtnShadowOffsetY(){
   btnShadowOffsetY = document.querySelector('#btnOffsetY').value;
   document.querySelector('#btnShadowOffsetY_NumberPreview').value = document.querySelector('#btnOffsetY').value;
   setBtnShadow()
}
function setBtnShadowBlur(){
   btnShadowBlur = document.querySelector('#btnShadowBlur').value;
   document.querySelector('#btnShadowBlur_NumberPreview').value = document.querySelector('#btnShadowBlur').value;
   setBtnShadow()
}
function setBtnShadowSpread(){
   btnShadowSpread = document.querySelector('#btnShadowSpread').value;
   document.querySelector('#btnShadowSpread_NumberPreview').value = document.querySelector('#btnShadowSpread').value;
   setBtnShadow()
}
function setBtnShadowColour(){
   btnShadowColor = document.querySelector('#boxShadowColour').value.toString();
   document.querySelector('#boxShadowColourPreview').style.backgroundColor = document.querySelector('#boxShadowColour').value;
   setBtnShadow()
}
function setBtnShadow(){
   let btnShadow = btnShadowOffsetX + 'px ' + btnShadowOffsetY + 'px ' + btnShadowBlur + 'px ' + btnShadowSpread + 'px ' + btnShadowColor;
   btn.style.boxShadow = btnShadow.toString();
   generate()
}
function setBtnTransformX(){
   btn.style.left = document.querySelector('#btnTransformX').value + 'px';
   document.querySelector('#btnTransformX_NumberPreview').value = document.querySelector('#btnTransformX').value
   generate()
}
function setBtnTransformY(){
   btn.style.top = document.querySelector('#btnTransformY').value + 'px';
   document.querySelector('#btnTransformY_NumberPreview').value = document.querySelector('#btnTransformY').value
   generate()
}
let rotateX = document.querySelector('#btnRotateX').value;
let rotateY = document.querySelector('#btnRotateY').value;
let rotateZ = document.querySelector('#btnRotateZ').value;
let perspective = document.querySelector('#btnPerspective').value;

function setBtnPerspective(){
   perspective = document.querySelector('#btnPerspective').value;
   document.querySelector('#btnPerspective_NumberPreview').value = perspective
   setBtnRotate()
}
function setBtnRotateX(){
   rotateX = document.querySelector('#btnRotateX').value;
   document.querySelector('#btnRotateX_NumberPreview').value = rotateX
   setBtnRotate()
}
function setBtnRotateY(){
   rotateY = document.querySelector('#btnRotateY').value;
   document.querySelector('#btnRotateY_NumberPreview').value = rotateY
   setBtnRotate()
}
function setBtnRotateZ(){
   rotateZ = document.querySelector('#btnRotateZ').value;
   document.querySelector('#btnRotateY_NumberPreview').value = rotateZ
   setBtnRotate()
}
function setBtnRotate(){
   perspective_rotate = 'perspective('+ perspective.toString() + 'px)' +  ' rotateX(' + rotateX.toString() + 'deg)' + ' rotateY(' + rotateY.toString() + 'deg)' + ' rotateZ(' + rotateZ.toString() + 'deg)'
   btn.style.transform = perspective_rotate;
   generate()
   
}

// fonts menu
let menu = document.querySelector('#fontsContainer');
let menu_open_icon = document.querySelector('#moreFonts');
let menu_close_icon = document.querySelector('#closeMoreFonts');

menu.style.display = 'none';
menu_close_icon.style.display = 'none';
let openClose = 'close';

function moreFontIconContainer(){
   if(openClose == 'close'){

      // if container is closed 
      // then open it

      menu.style.display = '';
      menu_close_icon.style.display = '';
      menu_open_icon.style.display = 'none'
      openClose = 'open'

   }else if(openClose == 'open'){
      
      // if container is opened 
      // then close it

      menu.style.display = 'none';
      menu_close_icon.style.display = 'none';
      menu_open_icon.style.display = '';
      openClose = 'close'
   }
}
let moreFontIconContainerBtn = document.querySelector('#moreFontIconContainer').addEventListener('click', moreFontIconContainer)



// font weight menu
let fontWeightMenu = document.querySelector('#fontsWeightContainer');
let fontWeightMenu_open_icon = document.querySelector('#moreFontsWeight');
let fontWeightMenu_close_icon = document.querySelector('#closeMoreFontsWeight');

fontWeightMenu.style.display = 'none';
fontWeightMenu_close_icon.style.display = 'none';
let fontWeightMenuOpenClose = 'close';

function moreFontWeightIconContainer(){
   if(fontWeightMenuOpenClose == 'close'){

      // if container is closed 
      // then open it

      fontWeightMenu.style.display = '';
      fontWeightMenu_close_icon.style.display = '';
      fontWeightMenu_open_icon.style.display = 'none'
      fontWeightMenuOpenClose = 'open'

   }else if(fontWeightMenuOpenClose == 'open'){
      
      // if container is opened 
      // then close it

      fontWeightMenu.style.display = 'none';
      fontWeightMenu_close_icon.style.display = 'none';
      fontWeightMenu_open_icon.style.display = '';
      fontWeightMenuOpenClose = 'close'
   }
}
let moreFontWeightIconContainerBtn = document.querySelector('#moreFontWeightIconContainer').addEventListener('click', moreFontWeightIconContainer)

function setTextFont(font){
   btn.style.fontFamily = font;
}
function setFontWeight(weight){
   btn.style.fontWeight = weight;
}

// fieldset legend switch disable and enable
function setFieldsetDisEna(of){
   // eg. = of is id of fieldset
   let element = document.querySelector('#'+of)
   if(element.hasAttribute('disabled')){
      // switch on
      element.disabled = false;

   }else{
      // switch off
      element.disabled = true;
   }
}

// number preview is a input number of range slider
function changeRangeOnNumberPreview(of, number){
   // of is range slider
   // number is value of range slider
   document.querySelector('#'+of).value = document.querySelector('#'+ number).value;
   if(of == 'width'){
      btnWidth()

   }else if(of == 'height'){
      btnHeight()

   }else if(of == 'borderWidth'){
      btnBorderWidth()

   }else if(of == 'btnBorderRadius'){
      btnBorderRadius()

   }else if(of == 'textOffsetX'){
      setTextShadowOffsetX()

   }else if(of == 'textOffsetY'){
      setTextShadowOffsetY()

   }else if(of == 'textShadowBlur'){
      setTextShadowBlur()

   }else if(of == 'btnOffsetX'){
      setBtnShadowOffsetX()

   }else if(of == 'btnOffsetY'){
      setBtnShadowOffsetY()

   }else if(of == 'btnShadowBlur'){
      setBtnShadowBlur()

   }else if(of == 'btnShadowSpread'){
      setBtnShadowSpread()

   }else if(of == 'btnTransformX'){
      setBtnTransformX()

   }else if(of == 'btnTransformY'){
      setBtnTransformY()

   }else if(of == 'btnPerspective'){
      setBtnPerspective()

   }else if(of == 'btnRotateX'){
      setBtnRotateX()

   }else if(of == 'btnRotateY'){
      setBtnRotateY()

   }else if(of == 'btnRotateZ'){
      setBtnRotateZ()

   }
}


// stop loading spinner
window.onload = function stopSpinner(){
   document.querySelector('#loadingPage').style.display = 'none';
};