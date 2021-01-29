import { useSnackbar } from "notistack";

const useHandleResponse = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleError = (err, inPlace = true) => {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      try {
        try {
          let response;
          typeof err.response.data == "object"
            ? (response = err.response.data)
            : (response = JSON.parse(err.response.data));
        } catch (e) {
          // notify any service like Airbrake, Sentry or Rollbar
        }

        switch (err.response.status) {
          case 401:
            enqueueSnackbar("You are not logged in, Please login first", {
              variant: "error",
            });
            // should route the user to the login page
            break;
          case 403:
            enqueueSnackbar(
              "You are not allowed to access this resource. If you think this is a mistake, please contact our support team!",
              { variant: "error" }
            );
            break;
          case 400:
            enqueueSnackbar("Something went wrong and the problem has been reported to our support team!", {
              variant: "error",
            });
            // notify any service like Airbrake, Sentry or Rollbar, as this issue almost bug from the code           
            break;
          case 404:
            enqueueSnackbar("The page you are requesting is not available!", {
              variant: "error",
            });
            // notify any service like Airbrake, Sentry or Rollbar,
            break;
          default:
            enqueueSnackbar("Something went wrong and the problem has been reported to our support team!", {
              variant: "error",
            });
        }
      } catch (e) {
        enqueueSnackbar("Something went wrong and the problem has been reported to our support team!", {
          variant: "error",
        });
      }
    } else if (err.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // console.log(err.request);
      enqueueSnackbar("Something went wrong and the problem has been reported to our support team!", {
        variant: "error",
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      enqueueSnackbar("Something went wrong and the problem has been reported to our support team!", {
        variant: "error",
      });
      // console.log('Error', err.message);
    }
  };

  return { handleError };
};

export default useHandleResponse;
