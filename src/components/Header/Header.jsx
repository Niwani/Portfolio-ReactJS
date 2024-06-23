import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css"

export default function Header() {
    const reactDescriptions = ['Professional', 'Competent', 'Skilled'];

    function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
    }

  const description = reactDescriptions[genRandomInt(2)];
  return(
  <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>Eniola Victoria Adio</h1>
    <p>
      {description} Web Developer and certified Human Resource Manager and Recruiter!
    </p>
    <p>Email: eniolaadio60@gmail.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Phone Number: +2347032161577</p>
    <p><a href="https://www.linkedin.com/in/eniola-adio-09823527a/">LinkedIn</a> <a href="https://github.com/Niwani">Github</a></p>
  </header>
  );
}
