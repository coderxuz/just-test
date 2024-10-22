import "../scss/style.scss";
import axios from "axios";

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      "http://192.168.1.8:8005/login", // Backend API manzilingizni kiriting
      {
        username: 'test',
        password: 'test'
      },
      {
        withCredentials: true,
      }
    );
    console.log(response.data); // Javobni ko'rsatish
  } catch (error) {
    console.error('Xato:', error); // Xatolikni ko'rsatish
  }
});
