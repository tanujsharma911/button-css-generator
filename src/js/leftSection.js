let codeState = document.querySelector('#codeState');
codeState.addEventListener('click', checkStateChecked)
let presetsState = document.querySelector('#presetsState');
presetsState.addEventListener('click', checkStateChecked)

let codeStateSection = document.querySelector('#codeStateSection');
let  presetsStateSection = document.querySelector('#presetStateSection');

codeStateSection.style.display = 'none';

function checkStateChecked(){
   if(codeState.checked){
      codeStateSection.style.display = '';
      presetsStateSection.style.display = 'none';

   }else if(presetsState.checked){
      codeStateSection.style.display = 'none';
      presetsStateSection.style.display = '';
   }
}

// copy button
document.querySelector('#copy_btn').onclick = ()=>{
   let text = document.querySelector('#btn_main_css').textContent+document.querySelector('#btn_main_css_2').textContent
   navigator.clipboard.writeText(text);
}

var btn = document.querySelector('#editable-btn');
btn.style.textAlign = 'center'
btn.style.fontFamily = 'Arial'
btn.style.fontWeight = 'normal';
btn.style.width = '65px';
btn.style.height = '27px';
btn.style.color = 'black';
btn.style.backgroundColor = 'rgb(225,225,225)';
btn.style.borderWidth = '1px';
btn.style.borderColor = 'black';
btn.style.borderRadius = '2px';
btn.style.textShadow = 'none';
btn.style.boxShadow = 'none';
btn.style.top = '0px';
btn.style.left = '0px';
btn.style.transform = '';

// code generator
function generate(){
   document.querySelector('#font_size_code').textContent = document.querySelector('#fontSize').value + 'px'
   document.querySelector('#text_align_code').textContent = btn.style.textAlign;
   document.querySelector('#font_code').textContent = btn.style.fontFamily;
   document.querySelector('#font_weight_code').textContent = btn.style.fontWeight;
   document.querySelector('#width_code').textContent = btn.style.width;
   document.querySelector('#height_code').textContent = btn.style.height;
   document.querySelector('#font_color_code').textContent = btn.style.color;
   document.querySelector('#bg_color_code').textContent = btn.style.backgroundColor;
   document.querySelector('#border_weight_code').textContent = btn.style.borderWidth;
   document.querySelector('#border_color_code').textContent = btn.style.borderColor;
   document.querySelector('#border_radius_code').textContent = btn.style.borderRadius;
   document.querySelector('#textshadow_code').textContent = btn.style.textShadow;
   document.querySelector('#boxshadow_code').textContent = btn.style.boxShadow;
   document.querySelector('#left_code').textContent = btn.style.left;
   document.querySelector('#top_code').textContent = btn.style.top;
   document.querySelector('#transform_code').textContent = btn.style.transform;
}
generate()