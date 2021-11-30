import classes from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <ul className={classes.container}>
      <li className={classes.link}>
        <a href="./">HOME</a>
      </li>
      <li className={classes.link}>
        <a href="./first">FIRST</a>
      </li>
      <li className={classes.link}>
        <a href="./second">SECOND</a>
      </li>
    </ul>
  );
}

export default NavigationBar;
