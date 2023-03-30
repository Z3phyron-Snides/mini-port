import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showPopup, hidePopup } from "../redux/confirmationPopupSlice";
import ConfirmationPopup from "./ConfirmationPopup";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.confirmationPopup.isOpen);
  const message = useSelector((state) => state.confirmationPopup.message);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(showPopup("Are you sure you want to save these changes?"));
  };

  const handleConfirm = () => {
    // Perform the action that the user confirmed (e.g. submit the form)
    dispatch(hidePopup());
  };

  const handleCancel = () => {
    dispatch(hidePopup());
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit">Save Changes</button>
      {isOpen && (
        <ConfirmationPopup
          message={message}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </form>
  );
};

export default ProfileForm;
