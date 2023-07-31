import Accordion from "react-bootstrap/Accordion";
import { faqJson } from "../assets/info";

function FAQ() {
  return (
    <>
      <br></br>
      <div className="static--component">
        <div className="container">
          <div className="title">Frequently Ask Questions</div>
          <Accordion defaultActiveKey="0" flush>
            {faqJson.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
}

export default FAQ;
