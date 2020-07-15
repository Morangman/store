import swal from 'sweetalert';

// todo: translations
const swalConfig = (data) => {
  return {
    title: data.title || 'Are you sure?',
    text: data.text || 'You will not be able to recover this',
    icon: data.type ||'warning',
    buttons: [
        data.cancelButtonText || 'Cancel',
        data.confirmButtonText || 'Yes, proceed!'
    ],
  };
};
const confirmation = {};

confirmation.delete = (
  success,
  data = {}
) => {
  if (!data.confirmButtonText) {
    data.confirmButtonText = 'Yes, delete it!';
  }

  swal(swalConfig(data)).then((result) => {
      if (result) {
          success();
      }
  });
};

confirmation.warning = (
  success,
  data = {}
) => {
    swal(swalConfig(data)).then((result) => {
        if (result) {
            success();
        }
    });
};

window.confirmation = confirmation;
