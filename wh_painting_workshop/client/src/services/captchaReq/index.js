export const getCaptchaRequest = async (token) => {
  try {
    const url = "/smartcaptcha";

    const response =  await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          token:token
        }
      )
    });

    let result = await response.json();

    return result
  } catch (e) {
    console.log(e);
  }
};