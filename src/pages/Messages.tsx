/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios';
import { useState } from 'react';
import Props from '../types/styleComponentsType';

function Messages({ className }: Props) {
  const [post, setPost] = useState(null);

  const baseURL = 'http://localhost:3004/messages';

  axios.get(`${baseURL}/1`).then((response) => {
    setPost(response.data);
    console.log(response.data);
  });

  return (
    <div className={className}>
      <div className="container">
        <div className="title-bar">
          <div className="btn btn-primary">Get Lists</div>
          <div className="" />
        </div>
        <br />
        {/* {cartItems.map((item, index) => (

        ))} */}
      </div>
    </div>
  );
}
export default Messages;
