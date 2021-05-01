import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [userData, setUserData] = useState([]);

  async function getUser() {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?nat=BR");
      setUserData(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {userData.map((item) => (
        <div className="Card" key={item.login.uuid}>
          <div className="Image Flex-item">
            <img src={item.picture.large} alt="foto de perfil" />
          </div>

          <div className="Flex-item">
            <h2>Nome</h2>
            <p>{`${item.name.first} ${item.name.last}`}</p>
          </div>

          <div className="Flex-item">
            <h2>Localização</h2>
            <p>{`${item.location.city} - ${item.location.state}, ${item.location.country}`}</p>
          </div>

          <div className="Flex-item">
            <h2>Idade</h2>
            <p>{item.dob.age} Anos</p>
          </div>

          <div className="Flex-item">
            <h2>E-mail</h2>
            <p> {item.email}</p>
          </div>

          <div className="Flex-item">
            <h2>Gênero</h2>
            <p>{item.gender === "female" ? "Female" : "Male"}</p>
          </div>

          <div className="Button Flex-item">
            <button onClick={getUser}>Gerar Nova Pessoa</button>
          </div>

          <div className="Flex-item">
            <h2>Telefone</h2>
            <p>{item.cell}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Main;
