import rock from "../assets/rock.svg";
import scissor from "../assets/scissor.svg";
import paper from "../assets/paper.svg";

const rcpArr = {
  rock,
  scissor,
  paper,
};

function HandIcon({ value = "rock" }) {
  return (
    <>
      <img src={rcpArr[value]} alt={value} />
    </>
  );
}

export default HandIcon;
