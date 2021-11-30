import classes from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <ul className={classes.container}>
      <li className={classes.link}>
        <a href="./">HOME</a>
      </li>
      <li className={classes.link}>
        <a href="./pee">pee</a>
      </li>
      <li className={classes.link}>
        <a href="./poo">poo</a>
      </li>
    </ul>
  );
}

export default NavigationBar;
