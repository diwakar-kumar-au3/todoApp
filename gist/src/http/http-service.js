export const makeGetRequest = async (
  url,
  attachToken = false,
  params = null
) => {
  let queryString = "";
  //   if (params) {
  //     queryString = structureQueryParams(params);
  //   }
  //   let headers = {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   };
  //   if (attachToken) {
  //     try {
  //       const authToken = await getToken();
  //       if (authToken) {
  //         console.log(authToken);
  //         headers["Authorization"] = "Bearer " + authToken;
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  return new Promise((resolve, reject) => {
    try {
      fetch(url + queryString, {
        method: "GET",
        // headers: headers,
      })
        .then((res) => res.json())
        .then((jsonResponse) => {
          //   console.log(jsonResponse);
          //   if (jsonResponse.error === false) {
          resolve(jsonResponse);
          //   } else {
          console.log(jsonResponse);
          // reject(jsonResponse);
          //   }
        })
        .catch((e) => {
          console.log("XHR GET Error: ", e);
          reject(e);
        });
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};
