import React, { useState, useEffect } from "react";
import axios from "axios";

const CookieBanner = () => {
  const [accepted, setAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (cookieAccepted !== "true") {
      setTimeout(() => {
        setShowModal(true);
      }, 5000);
    }
  }, []);

  const handleAccept = async () => {
    setAccepted(true);
    localStorage.setItem("cookieAccepted", true);
    setShowModal(false);
    await axios.post("/api/accept-cookies");
  };

  const handleDecline = async () => {
    localStorage.setItem("cookieAccepted", false);
    setShowModal(false);
    await axios.post("/api/decline-cookies");
  };

  if (accepted || localStorage.getItem("cookieAccepted") === "true") {
    return null;
  }

  return (
    <>
      {showModal && (
        <div className="cookie-banner-modal">
          <p>
            Our website uses cookies to improve your experience. By using our
            site, you agree to our use of cookies.
          </p>
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleDecline}>Decline</button>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
