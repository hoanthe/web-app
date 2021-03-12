import { React } from "react";
import photo from "../image/hg4.jpg";

export default function Header() {
  return (
    <div>
      <div>
        <a href="google.com">
          <img alt="" src={photo}></img>
        </a>
      </div>

      <div>
        <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>

      <div>
          <input type='text'></input>
          <button>Search</button>
      </div>
    </div>
  );
}
