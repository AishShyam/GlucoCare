import Accordion from "react-bootstrap/Accordion";
import { CaregiverStressSignsJson } from "../assets/info";
import { caregiverStressTips } from "../assets/info";
import { stressManagementTechniquesJson } from "../assets/info";
import { ExerciseIdeaJson } from "../assets/info";

function SelfCare() {
  const caregiverStressSymptomsData =
    CaregiverStressSignsJson.caregiverStressSymptoms;
  const caregiverStressTipsData = caregiverStressTips.caregiverSelfCareTips;
  const stressManagementTechniquesData =
    stressManagementTechniquesJson.stressManagementTechniques;
  const exerciseIdeasForCaregiversData =
    ExerciseIdeaJson.exerciseIdeasForCaregivers;
  return (
    <>
      <br></br>
      <div className="static--component">
        <div className="container">
          <div className="title">Carer Self Care</div>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Caregiver Stress</Accordion.Header>
              <Accordion.Body>
                <div>
                  Caregiver Stress, also known as caregiver burnout, is a form
                  of physical, emotional, and mental exhaustion experienced by
                  individuals who provide care and support to another individual
                  who is ill, disabled, elderly, or has a chronic condition such
                  as type 2 diabetes. Caregiving can be rewarding, but it can
                  also be taxing and overwhelming, resulting in caregiver stress
                  when the responsibilities become burdensome.
                </div>
                <br></br>
                <div className="bold">Signs of Caregiver Stress:</div>
                <ul>
                  {caregiverStressSymptomsData.map((item) => (
                    <li>{item.symptom}</li>
                  ))}
                </ul>
                <div className="small-text">
                  Source:
                  https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/caregiver-stress/art-20044784
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Managing Caregiver Stress</Accordion.Header>
              <Accordion.Body>
                <div>To help manage cargiver stress:</div>
                <ul>
                  {caregiverStressTipsData.map((item) => (
                    <>
                      <li>
                        <b>{item.name}</b>: {item.value}
                      </li>
                      <br></br>
                    </>
                  ))}
                </ul>
                <div className="small-text">
                  Source:
                  https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/caregiver-stress/art-20044784
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Stress Management Techniques</Accordion.Header>
              <Accordion.Body>
                <div>
                  Here a some stress management techniques that might be useful:
                </div>
                <ul>
                  {stressManagementTechniquesData.map((item) => (
                    <>
                      <li>
                        <b>{item.technique}</b>: {item.description}
                      </li>
                      <br></br>
                    </>
                  ))}
                </ul>
                <div className="small-text">
                  Source:
                  https://dailycaring.com/15-quick-tips-for-managing-caregiver-stress/
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Physical Activity and Exercise Tips for Carers
              </Accordion.Header>
              <Accordion.Body>
                <div>Here a some exercise ideas that might be useful:</div>
                <ul>
                  {exerciseIdeasForCaregiversData.map((item) => (
                    <>
                      <li>
                        <b>{item.idea}</b>: {item.description}
                      </li>
                      <br></br>
                    </>
                  ))}
                </ul>
                <div className="small-text">
                  Source:
                  https://www.healthline.com/health/heart-disease/exercise-stress-relief#Check-with-Your-Doctor
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
}

export default SelfCare;
