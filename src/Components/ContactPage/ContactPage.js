import Mailto from "../MailTo";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div>
      <h1>ALTON DELUCA</h1>
      <div>
        <span className="row">
          My LinkedIn Page:
          <a href="https://www.linkedin.com/in/alton-deluca">
            <LinkedInIcon />
          </a>
        </span>
        <span className="row">
          Send Me an Email:
          <Mailto
            email="altdeluca@gmail.com"
            subject="Hello"
            body="Hello World"
          ></Mailto>
        </span>
        <span className="row">
          Check out my github to see my past projects:
          <a href="https://github.com/AltonDeLuca">
            <GitHubIcon fontSize="large" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default ContactPage;
