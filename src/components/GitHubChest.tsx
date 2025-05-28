import { useState } from "react";
import chestImg from "/public/chest.png";
import githubLogo from "/public/github-mark-white.png";

const GitHubChest = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://github.com/Anne-Lii"
      target="_blank"
      rel="noopener noreferrer"
      className={`github-chest ${hovered ? "open" : ""}`}
      aria-label="Öppna min GitHub-skatt"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={hovered ? githubLogo : chestImg} alt="GitHub-länk" />
      <span>GitHub-skatt</span>
    </a>
  );
};

export default GitHubChest;

