import React from 'react';
import './login.css';
import axios from "axios";
function Login() {
  const [name, setName] = React.useState('');
  const [password, setPwd] = React.useState('');


  const [title, setTitle] = React.useState('');
  const [genre, setGenre] = React.useState('');
  const [year, setYear] = React.useState('');

  var bodyFormData = new FormData();
  bodyFormData.append("username", name);

  bodyFormData.append("password", password);


  var bodyFormData2 = new FormData();
  bodyFormData2.append("title", title);
  bodyFormData2.append("genre", genre);
  bodyFormData2.append("year", year);

  const handleSubmit2 = async(e) => {
    
    e.preventDefault();

    console.log(document.cookie.split("; ")
    .find((row) => row.startsWith("auth_token="))
    ?.split("=")[1])   
    await axios({
      method: "post",
      url: "https://backend123-be3a2ceefa80.herokuapp.com/api/v1/movies/",
      data: bodyFormData2,
      withCredentials: false,
      headers: { 
      "Content-Type": "multipart/form-data" , 'Authorization': 'Bearer '+
      document.cookie.split("; ").find((row) => row.startsWith("auth_token="))?.split("=")[1]},
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
   
  }
  const handleSubmit = async(e) => {
    
    e.preventDefault();

    console.log(`Form submitted, ${name}`);    
    await axios({
      method: "post",
      url: "https://backend123-be3a2ceefa80.herokuapp.com/api/v1/auth/token/",
      data: bodyFormData,
      withCredentials: false,
      headers: { 
      "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        document.cookie = "auth_token="+response.data.access;
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
   
  }
  return (
    <>
      <form >
        <label htmlFor="name-field">
          Name:
        </label>
        <input
          id="name-field"
          value={name}
          onChange={event => {
            setName(event.target.value);
          }}
        />

        <label htmlFor="pwd-field">
          Pwd:
        </label>
        <input
          id="pwd-field"
          value={password}
          onChange={event => {
            setPwd(event.target.value);
          }}
        />
      </form>
      <button onClick={handleSubmit} type="submit">Do the thing</button>



      <form action='\' >
        <label htmlFor="name-field2">
          Title:
        </label>
        <input
          id="title-field"
          value={title}
          onChange={event => {
            setTitle(event.target.value);
          }}
        />

        <label htmlFor="genre-field">
          Genre:
        </label>
        <input
          id="genre-field"
          value={genre}
          onChange={event => {
            setGenre(event.target.value);
          }}
        />
        <label htmlFor="year-field">
          Year:
        </label>
        <input
          id="year-field"
          value={year}
          onChange={event => {
            setYear(event.target.value);
          }}
        />
      </form>
      <button onClick={handleSubmit2} type="submit">Do the thing2</button>
      <p>
        <strong>Current value:</strong>
        {name || '(empty)'}
      </p>
    </>
  );
}

export default Login;