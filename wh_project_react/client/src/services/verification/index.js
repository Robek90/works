export const getVerification = async (userInfo) => {
  try {
    let url = '/verification';

    const response =  await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          uid: userInfo.uid,
          first_name: userInfo.first_name,
        }
      )
    });

    let result = await response.json();

    return result
  } catch (e) {
    console.log(e);
  }
};