import Robot from "../assets/robot.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <img src={Robot} alt="" />
      <a href="/">Home</a>
    </header>
  );
};
