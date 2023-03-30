import React from "react";
import { useDispatch } from "react-redux";
import { showPopup } from "../redux/confirmationPopupSlice";

const ProfileForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(showPopup("Are you sure you want to save these changes?"));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default ProfileForm;
