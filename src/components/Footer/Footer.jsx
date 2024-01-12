import "./Footer.scss";
import React from "react";

import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur beatae, possimus vero officiis quisquam aliquam
            reprehenderit, sint iusto nihil a deserunt cumque quasi fugit
            ratione fuga inventore? Repellendus nam perferendis voluptatem
            mollitia dignissimos consequuntur vel maiores ullam autem quibusdam
            voluptatibus exercitationem eaque iusto eum, quia rerum quas fugiat
            placeat odio!
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-items">
            <FaLocationArrow />
            <div className="text">15,Yemen Road. Yemen, 4206969</div>
          </div>
          <div className="c-items">
            <FaMobileAlt />
            <div className="text">Phone: 0123 456 789</div>
          </div>
          <div className="c-items">
            <FaEnvelope />
            <div className="text">Email: joeytribbiani@friends.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speaker</div>
          <div className="text">Wireless Earbuds</div>
          <div className="text">Home Theaters</div>
          <div className="text">Projectors</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Returns</div>
          <div className="text">Terms & Conditions</div>
          <div className="text">Contact Us </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">JOEYZON 2024 CREATED BY AKASH GAUTAM</div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
