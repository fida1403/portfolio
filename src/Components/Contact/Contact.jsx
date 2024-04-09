import React from 'react'
import './Contact.css'


function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d7236433-ab5a-4a21-a5dd-d9d6962a7878");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact container'>
      <div className='contact-col'>
        <h3>Send me a message <i class="fa-solid fa-envelope"></i></h3>
        <ul>
          <li><i class="fa-solid fa-phone"></i>9605974613</li>
          <li><i class="fa-solid fa-paper-plane"></i>fidu1403@gmail.com</li>
        </ul>
        <div className='icons'>
          <ul>
            <li><a href='https://www.facebook.com/fida.fathima.5030'><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href='https://www.instagram.com/.fid_a_?igsh=NjdiNWk4YnRla3Ew'><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href='https://www.linkedin.com/in/fida-fathima-b52633202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium-android_app'><i class="fa-brands fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
            <input type='tel' name='name' placeholder='Enter your Phone Number' required/>
          <label>Message</label>
            <textarea name='message' placeholder='Enter your message' rows={8} required/>
          <button className='btn dark-btn' type='submit'>Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
