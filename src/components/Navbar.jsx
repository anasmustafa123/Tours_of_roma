import React from "react";

const Navbar = () => {
  return (
    <div className="bottom_navbar">
      <div className="navbar_item">
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-[16px] css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="TourOutlinedIcon"
        >
          <path d="M21 4H7V2H5v20h2v-8h14l-2-5 2-5zm-3.86 5.74.9 2.26H7V6h11.05l-.9 2.26-.3.74.29.74zM14 9c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"></path>
        </svg>
        <div className="navbar_item_text">All Tours</div>
      </div>
      <div className="navbar_item">
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-[16px] css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ChurchOutlinedIcon"
        >
          <path d="M18 12.22V9l-5-2.5V5h2V3h-2V1h-2v2H9v2h2v1.5L6 9v3.22L2 14v8h9v-4c0-.55.45-1 1-1s1 .45 1 1v4h9v-8l-4-1.78zM20 20h-5v-2.04c0-1.69-1.35-3.06-3-3.06s-3 1.37-3 3.06V20H4v-4.79l4-1.81v-3.35L12 8l4 2.04v3.35l4 1.81V20z"></path>
          <circle cx="12" cy="12" r="1.5"></circle>
        </svg>
        <div className="navbar_item_text">Vatican</div>
      </div>
      <div className="navbar_item">
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-[16px] css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="BusinessOutlinedIcon"
        >
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
        </svg>
        <div className="navbar_item_text">Colosseum</div>
      </div>
      <div className="navbar_item">
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-[16px] css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="DirectionsWalkOutlinedIcon"
        >
          <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.56-.89-1.68-1.25-2.65-.84L6 8.3V13h2V9.6l1.8-.7"></path>
        </svg>
        <div className="navbar_item_text">Walking</div>
      </div>
      <div className="navbar_item">
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-[16px] css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="AccessibleOutlinedIcon"
        >
          <circle cx="12" cy="4" r="2"></circle>
          <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-9 7c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07c-.41 1.16-1.52 2-2.83 2z"></path>
        </svg>
        <div className="navbar_item_text">Accessible</div>
      </div>
    </div>
  );
};

export default Navbar;
