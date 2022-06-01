

function setText(of, value){
   let element = document.querySelector('#'+of).value = value
}
function openFeedback() {
   document.querySelector('#feedback').show();
}
function closeFeedback() {
   document.querySelector('#feedback').close();
}
function closeVersion() {
   document.querySelector('#versionHistoryBg').style.display = 'none';
}
function showVersion() {
   document.querySelector('#versionHistoryBg').style.display = 'flex';
}

// display message 
function display_message(message_title, message_description, background_color){
   // background_color = error / successfully

   let ele_message = document.getElementById("message").style.display = 'flex'; // show message
   if(background_color == 'successfully'){
      let ele_img = document.querySelector("#error_status_img").src = "src/img/success.png";
   }
   let ele_message_title = document.getElementById("message_tilte").innerHTML = [message_title]; // set message title
   let ele_message_description = document.getElementById("message_description").innerHTML = [message_description]; // set message description
   let message_bg_color = document.getElementById("message_card").classList.add(background_color) // set message error or successful
}

var form = document.getElementById("form");

async function handleSubmit(event) {
   event.preventDefault();
   var data = new FormData(event.target);
   fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
         'Accept': 'application/json'
      }
   }).then(response => {
      if (response.ok) {
         //  form sended
         display_message("Form Submit Successfully", "Hurry! Your submition was sended to ower successfully.", "successfully");
         form.reset()
         setText('submit_button', 'Submit')
      } else {
         response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
               // status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
               display_message("Form Submitting message", "Oops! There was a problem submitting the form.", "error");
            } else {
               // status.innerHTML = "Oops! There was a problem submitting your form"
               display_message("Form Submitting message", "Oops! There was a problem submitting the form.", "error");
            }
         })
      }
   }).catch(error => {
      // status.innerHTML = "Oops! There was a problem submitting your form"
      display_message("Form Submitting message", "Oops! There was a problem submitting the form.", "error");
   });
}
form.addEventListener("submit", handleSubmit)

// message was seen
function hide_message(){
   let message = document.getElementById("message");
   message.style.display = "none";
}