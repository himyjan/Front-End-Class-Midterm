/* eslint-disable jsx-a11y/alt-text */
import Props from '../types/styleComponentsType';

function Midterm({ className }: Props) {
  return (
    <div className={className}>
      <div className="midterm-menu-bar">
        <div className="midterm-menu-bar-title midterm-menu-bar-text font-weight700">
          DesignWorks
        </div>
        <div className="midterm-menu-bar-content midterm-menu-bar-text">
          Home
        </div>
        <div className="midterm-menu-bar-content midterm-menu-bar-text">
          Showcase
        </div>
        <div className="midterm-menu-bar-content midterm-menu-bar-text">
          Service
        </div>
        <div className="midterm-menu-bar-content midterm-menu-bar-text">
          Contact
        </div>
      </div>
      <div className="midterm-home">
        <div className="midterm-home-title-box">
          <div className="midterm-home-title font-weight700">
            Interior Design
          </div>
          <div className="midterm-home-sub-title">Showcase.</div>
        </div>
        <div className="midterm-home-image-box">
          <img
            className="midterm-home-image1 midterm-home-image"
            src="https://cdn.discordapp.com/attachments/1020201678621908995/1020201901612077056/bedroom_1.png"
          />
          <img
            className="midterm-home-image2 midterm-home-image"
            src="https://cdn.discordapp.com/attachments/1020201678621908995/1020201902186704906/diningroom_1.png"
          />
          <img
            className="midterm-home-image3 midterm-home-image"
            src="https://cdn.discordapp.com/attachments/1020201678621908995/1020201902656462868/livingroom_1.png"
          />
          <img
            className="midterm-home-image4 midterm-home-image"
            src="https://cdn.discordapp.com/attachments/1020201678621908995/1020201903218503690/livingroom2_1.png"
          />
        </div>
        <div className="">Service.</div>
        <div className="">
          We are a interior design service that focus on what's best for your
          home and what's best for you! Some text about our services - what we
          do and what we offer. We are lorem ipsum consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className="">Contract.</div>
        <div className="midterm-home-contract-box">
          <div className="midterm-home-contract-input-box">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="midterm-home-contract-input"
              required
            />
          </div>
          <div className="midterm-home-contract-input-box">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              id="Email"
              name="Email"
              className="midterm-home-contract-input"
              required
            />
          </div>
          <div className="midterm-home-contract-input-box">
            <label htmlFor="Message">Message</label>
            <input
              type="text"
              id="Message"
              name="Message"
              className="midterm-home-contract-input"
              required
            />
          </div>
        </div>
        <div className="midterm-home-btn-send-message">Send Message</div>
      </div>
    </div>
  );
}
export default Midterm;
