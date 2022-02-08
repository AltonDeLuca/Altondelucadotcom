import Mailto from "../MailTo";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div>
      <h1 className="">ALTON DELUCA</h1>
      <img src="" alt=""></img>
      <div className=" text row">
        My LinkedIn Page:
        <a href="https://www.linkedin.com/in/alton-deluca">
          <LinkedInIcon />
        </a>
      </div>
      <div className="text row">
        Send Me an Email:
        <Mailto
          email="altdeluca@gmail.com"
          subject="Hello"
          body="Hello World"
        ></Mailto>
      </div>
      <div className="text row">
        Check out my github to see my past projects:
        <a href="https://github.com/AltonDeLuca">
          <GitHubIcon fontSize="large" />
        </a>
      </div>
      <span className="text row">Or contact me at: 774 - 218 - 5745</span>
      <span className="text row">Altdeluca@gmail.com</span>
    </div>
  );
}

export default ContactPage;
