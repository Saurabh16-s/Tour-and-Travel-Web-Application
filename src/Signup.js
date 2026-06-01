import API from "../api";

const handleSignup = async () => {
  try {
    await API.post("/auth/register", {
      name,
      email,
      password
    });

    alert("Signup successful");
  } catch (err) {
    console.log(err.response.data);
  }
};