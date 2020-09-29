function catchErrors(error, displayError) {
  let errorMsg;
  if (error.response) {
    //the request was made and the server responded with status code that is not in range of 2XX
    errorMsg = error.response.data;
    console.error('Error response', errorMsg);

    //For Cloudinary image uploads
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    //The request was made, but no response was received
    errorMsg = error.request;
    console.error('Error request', errorMsg);
  } else {
    //Something else happened in making the request that triggered an error
    errorMsg = error.message;
    console.error('error message', errorMsg);
  }
  displayError(errorMsg);
}

export default catchErrors;
