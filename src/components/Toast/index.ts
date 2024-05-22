import {POSITION, useToast} from "vue-toastification";

const toast = useToast();


export function errorToast(message: string) {
  toast.error(message, {
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    closeButton: "button",
    icon: "fa-solid fa-circle-xmark",
    rtl: false
  });
}

export function successToast(message: string) {
  toast.success(message, {
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    closeButton: "button",
    icon: "fa-solid fa-circle-check",
    rtl: false
  });
}

export function warningToast(message: string) {
  toast.warning(message, {
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    closeButton: "button",
    icon: "fa-solid fa-triangle-exclamation",
    rtl: false
  });
}

export function infoToast(message: string) {
  toast.info(message, {
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    closeButton: "button",
    icon: "fa-solid fa-circle-info",
    rtl: false
  });
}