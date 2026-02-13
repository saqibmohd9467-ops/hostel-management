import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Simple parameter-based function
export const showToast = (
  msg,
  type = "info",
  position = "top-right",
  autoClose = 2000
) => {
  toast[type]?.(msg, {
    position,
    autoClose,
  });
};

const Toast = ({
  position = "top-right",
  autoClose = 2000,
}) => {
  return (
    <ToastContainer
      position={position}
      autoClose={autoClose}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="colored"
    />
  );
};

export default Toast;
