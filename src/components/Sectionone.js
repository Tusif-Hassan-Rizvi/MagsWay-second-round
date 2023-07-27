import React from 'react';
import '../style/Sectionone.css';

function Sectionone() {
  return (
    <div className="section-one-container">
      <div className="heading-text">
        Experience the power of{' '}
        <div className="heading-text-bold">professional UI kits</div>
      </div>
      <p className="section-one-paragraph">
        Choose from a wide range of styles and themes to find the perfect fit
        for your project
      </p>

      {/* button box  */}
      <div>
        <button className="button-box">
          <div className="text">Discover</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* unlimited box  */}
      <div className="unlimited-box">
        {/* icon box  */}
        <div className="unlimited-icon-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M15 2.5L2.5 8.75L15 15L27.5 8.75L15 2.5Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M2.5 21.25L15 27.5L27.5 21.25"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M2.5 15L15 21.25L27.5 15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {/* info text  */}
        <div className="unlimited-info-box">
          <div className="unlimited-info-heading">Unlimited Blocks</div>
          <div className="unlimited-info-paragraph">
            Having access to unlimited blocks means that users can create a wide
            range of designs without running out of elements to work with.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectionone;
