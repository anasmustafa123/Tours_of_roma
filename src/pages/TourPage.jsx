import React, { useEffect } from "react";
import { useParams } from "react-router";
import { tour_data } from "../assets/data";
import BookingWidget from "../components/BookingWidget";

const TourPage = () => {
  let icon_filtering = {
    smallgroup: (
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jhifpp"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="PeopleAltOutlinedIcon"
      >
        <path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z"></path>
      </svg>
    ),
    duration3hours: (
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-zreh0f"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="AccessAlarmOutlinedIcon"
      >
        <path d="m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
      </svg>
    ),
    skiptheline: (
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-zreh0f"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="FastForwardOutlinedIcon"
      >
        <path d="M15 9.86 18.03 12 15 14.14V9.86m-9 0L9.03 12 6 14.14V9.86M13 6v12l8.5-6L13 6zM4 6v12l8.5-6L4 6z"></path>
      </svg>
    ),
    smallgrouptour: (
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jhifpp"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="PeopleAltOutlinedIcon"
      >
        <path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z"></path>
      </svg>
    ),
    mobileticketing: (
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-zreh0f"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="MobileFriendlyOutlinedIcon"
      >
        <path d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27-5.91 5.93z"></path>
      </svg>
    ),
    freecancellation: (
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jhifpp"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="CancelOutlinedIcon"
      >
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path>
      </svg>
    ),
    livetourguide: (
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-zreh0f"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="RecordVoiceOverOutlinedIcon"
      >
        <path d="M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27l-1.68 1.69zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path>
      </svg>
    ),
    expressentrance: (
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jhifpp"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="BoltIcon"
      >
        <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"></path>
      </svg>
    ),
    instantconfirmation: (
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-zreh0f"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="CheckCircleOutlineOutlinedIcon"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"></path>
      </svg>
    ),
  };

  let { tourId } = useParams();
  useEffect(() => {
    // to insure that the page start from the top
    window.scrollTo(0, 0);

    // for the map view
    const map = L.map("map").setView([0, 0], 2); // Initial placeholder view

    // Fetch coordinates from Nominatim API
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${tour_data.internal_ui.meeting_point
        .split(",")[0]
        .replaceAll(" ", "+")}`
    )
      .then((response) => response.json())
      .then((data) => {
        const lat = data[0].lat;
        const lon = data[0].lon;

        // Set the map to the location
        map.setView([lat, lon], 12);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
        }).addTo(map);

        // Add marker
        L.marker([lat, lon])
          .addTo(map)
          .bindPopup(tour_data.internal_ui.meeting_point.split(",")[0])
          .openPopup();
      })
      .catch((error) => console.error("Error fetching location:", error));
  }, []);
  return (
    <div>
      <section className="tour_img_container">
        <img src={tour_data.internal_ui.main_image} alt="" />
        <div className="header_text">
          Experience Rome with
          <div className="header_text_inner">Tours of Rome</div>
        </div>
      </section>
      <section className="offers_container">
        {tour_data.internal_ui.offers.map((offer, id) => (
          <div className="offer">
            <div className="icon">
              {
                icon_filtering[
                  `${offer.title.replaceAll(" ", "").toLowerCase()}`
                ]
              }
            </div>
            <div className="heading">{offer.title}</div>
            <div className="content">{offer.info}</div>
          </div>
        ))}
      </section>
      <section className="main_tour_section">
        <section className="tour_img_view">
          <img src={tour_data.external_ui.main_image} alt="main image" />
          <div className="inner_content">
            <div className="heading">{tour_data.external_ui.title}</div>
            <p className="content">{tour_data.external_ui.introduction}</p>
            <div className="rating_section">
              <div className="stars">{tour_data.external_ui.stars}</div>
              <div className="rating">{tour_data.external_ui.rating}</div>
            </div>
          </div>
        </section>
        <div className="heading">Tour Details</div>
        <section className="tours_details">
          {tour_data.internal_ui.tour_details.map((tour_detials, id) => (
            <>
              <div key={id} className="tour_details">
                <div className="icon">
                  {
                    icon_filtering[
                      `${tour_detials.title.replaceAll(" ", "").toLowerCase()}`
                    ]
                  }
                </div>
                <div className="heading">{tour_detials.title}</div>
                <div className="content">{tour_detials.info}</div>
              </div>
            </>
          ))}
        </section>
        <div className="heading">Full Description</div>
        <section className="description"></section>
        <div className="heading">Things To Know</div>
        <section className="things_to_know">
          {tour_data.internal_ui.description.things_to_know.map((info, id) => (
            <p className="thing_to_know" key={id}>
              {info}
            </p>
          ))}
        </section>
        <div className="heading">Inclusions and Exclusions</div>
        <section className="inclusions_exclusions">
          {tour_data.internal_ui.inclusions.map((inclusion_data, id) => (
            <div key={id} className="inclusion_container">
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-colorSuccess MuiSvgIcon-fontSizeMedium css-nm8jzx"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CheckIcon"
              >
                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
              </svg>
              <div>{inclusion_data}</div>
            </div>
          ))}
          {tour_data.internal_ui.exclusions.map((exclusions_data, id) => (
            <div key={id} className="exclusions_container">
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-colorError MuiSvgIcon-fontSizeMedium css-dvceld"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CloseIcon"
              >
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
              <div>{exclusions_data}</div>
            </div>
          ))}
        </section>
        <div className="heading">Meeting Point</div>
        <section className="meeting_point">
          <p className="content">{tour_data.internal_ui.meeting_point}</p>
        </section>
      </section>
      <div id="map" className="meeting_point"></div>
      <BookingWidget widget_src={tour_data.bookeo_link}></BookingWidget>
    </div>
  );
};

export default TourPage;
