export const apiUrl = "https://dogsapi.origamid.dev/json";

export function tokenPost(username, password) {
  return {
    url: apiUrl + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    },
  };
}

export function userGet(token) {
  return {
    url: apiUrl + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, //Colocar palavras chaves juntos do token
      },
    },
  };
}

export function tokenValidatePost(token) {
  return {
    url: apiUrl + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function userPost(body) {
  return {
    url: apiUrl + "/api/user/",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function photoPost(formdata, token) {
  return {
    url: apiUrl + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formdata,
    },
  };
}

export function photosGet({ page, total, user }) {
  return {
    url: `${apiUrl}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      caches: "no-store",
    },
  };
}

export function photoGet(photoID) {
  return {
    url: `${apiUrl}/api/photo/${photoID}`,
    options: {
      method: "GET",
      caches: "no-store",
    },
  };
}

export function commentPost(id, comment) {
  return {
    url: `${apiUrl}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        caches: "no-store",
        Authorization: "Bearer " + localStorage.getItem('token'),
      },
      body: JSON.stringify(comment),
    },
  };
}
