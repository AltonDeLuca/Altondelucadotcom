import "./MailTo.css";
import EmailIcon from "@mui/icons-material/Email";

function Mailto({ email, subject = "", body = "", children }) {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return (
    <a target="_top" href={`mailto:${email}${params}`}>
      <EmailIcon fontSize="large" color="primary"></EmailIcon>
      {children}
    </a>
  );
}
export default Mailto;
