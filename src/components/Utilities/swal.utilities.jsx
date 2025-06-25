import Swal from "sweetalert2";

export const successSwal = (message) => {
  return Swal.fire({
    title: "Success",
    text: message,
    icon: "success",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};

export const errorSwal = (message) => {
  return Swal.fire({
    title: "Error",
    text: message,
    icon: "error",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};
