import Accordion from "react-bootstrap/Accordion";
import { MedicineJson, exerciseIdeasJson } from "../assets/info";
import { BloodGlucoseJson } from "../assets/info";
import { DiabetesComplicationSignsJson } from "../assets/info";
import { mythJson } from "../assets/info";
import { emergencyPlanJson } from "../assets/info";


function T2DMInfo() {
  const oralData = MedicineJson["Oral Medications"];
  const insulinData = MedicineJson.Insulin;
  const bloodGlucoseImportanceData =
    BloodGlucoseJson["Importance of Blood Glucose Control"];
  const targetRangeData =
    BloodGlucoseJson["Target Ranges for Blood Glucose Control"];
  const diabetesComplicationsData =
    DiabetesComplicationSignsJson.diabetesComplications;
  const mythData = mythJson.type2DiabetesMyths;
  return (
    <>
      <br></br>
      <div className="static--component">
      <div className="container">
      <div className="title">Type 2 Diabetes</div>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Type 2 Diabetes?</Accordion.Header>
            <Accordion.Body>
              Type 2 diabetes is a chronic metabolic disorder characterized by
              elevated blood glucose levels. It is the most common form of
              diabetes and typically affects adults, though children and
              adolescents can also develop it. In type 2 diabetes, the body
              either produces insufficient insulin or is unable to use insulin
              effectively (insulin resistance).
              <br></br>
              <br></br>
              It is a lifelong disorder that significantly impacts daily life.
              Individuals diagnosed with this condition often face the need to
              make substantial changes to their lifestyle, including alterations
              to their diet, adherence to prescribed medications, and regular
              medical examinations.
              <br></br>
              <br></br>
              <div className="small-text">
                Source: https://www.nhs.uk/conditions/type-2-diabetes/
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Symptoms and Risk Factors</Accordion.Header>
            <Accordion.Body>
              <Accordion.Item className="bold">Symptoms</Accordion.Item>
              <ul>
                <li>increased thirst and urination</li>
                <li>increased hunger</li>
                <li>fatigue</li>
                <li>blurred vision</li>
                <li>numbness or tingling in the feet or hands</li>
                <li>sores that do not heal</li>
                <li>unexplained weight loss</li>
              </ul>
              <Accordion.Item className="bold">Risks</Accordion.Item>
              <ul>
                <li>obesity and overweight</li>
                <li>family history of diabetes</li>
                <li>
                  lack of regular physical activity and a sedentary lifestyle
                </li>
                <li>unhealthy diet</li>
                <li>
                  age - (35 and older) risk of type 2 diabetes increases as a
                  person gets older.
                </li>
                <li>
                  history of gestational diabetes, which is a type of diabetes
                  that develops during pregnancy
                </li>
                <li>
                  ethnicity - certain ethnic groups, including African
                  Americans, Hispanics, Native Americans, and Asian Americans,
                  have a higher predisposition to type 2 diabetes
                </li>
                <li>high blood pressure</li>
              </ul>
              <br></br>
              <div className="small-text">
                Source:
                https://www.niddk.nih.gov/health-information/diabetes/overview/risk-factors-type-2-diabetes
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Complications</Accordion.Header>
            <Accordion.Body>
              <ul>
                <Accordion.Item className="bold">
                  Cardiovascular Disease
                </Accordion.Item>
                <Accordion.Body>
                  Individuals with type 2 diabetes have a higher risk of
                  developing heart-related problems, including heart attacks,
                  stroke, and coronary artery disease because high blood sugar
                  for a period of time can damage your blood vessels.{" "}
                </Accordion.Body>
                <Accordion.Item className="bold">Neuropathy</Accordion.Item>
                <Accordion.Body>
                  High blood glucose levels can damage the nerves, leading to
                  diabetic neuropathy. This condition may result in tingling,
                  numbness, pain, or weakness, usually in the hands and feet.
                  Severe neuropathy can lead to foot ulcers and other
                  complications.{" "}
                </Accordion.Body>
                <Accordion.Item className="bold">
                  Nephropathy (Kidney Damage)
                </Accordion.Item>
                <Accordion.Body>
                  Diabetes can affect the kidneys' filtering ability, leading to
                  diabetic nephropathy. This condition can progress to chronic
                  kidney disease and may require dialysis or kidney transplant.{" "}
                </Accordion.Body>
                <Accordion.Item className="bold">
                  Retinopathy (Eye Damage)
                </Accordion.Item>
                <Accordion.Body>
                  Prolonged high blood glucose levels can damage the blood
                  vessels in the retina, leading to diabetic retinopathy. If
                  left untreated, it can cause vision loss and even blindness.{" "}
                </Accordion.Body>
                <Accordion.Item className="bold">
                  Foot Complications
                </Accordion.Item>
                <Accordion.Body>
                  Diabetes can impair blood flow and nerve function in the feet,
                  making individuals more prone to foot infections, ulcers, and
                  even amputations if severe infections occur.
                </Accordion.Body>
                <Accordion.Item className="bold">
                  Gum Disease and other mouth problems
                </Accordion.Item>
                <Accordion.Body>
                  Too much sugar in the blood can lead to more sugar in saliva.
                  This brings bacteria which produces acid which attacks tooth
                  enamel and damages gums. The blood vessels in the gums can
                  also become damaged, making gums more likely to get infected.
                </Accordion.Body>
                <Accordion.Item className="bold">
                  Skin and Wound Infections
                </Accordion.Item>
                <Accordion.Body>
                  High blood glucose levels can weaken the immune system, making
                  individuals with diabetes more susceptible to skin infections
                  and delayed wound healing.
                </Accordion.Body>
                <Accordion.Item className="bold">Gastroparesis</Accordion.Item>
                <Accordion.Body>
                  Diabetes can affect the nerves that control the digestive
                  system, leading to gastroparesis. This condition slows down
                  the movement of food through the stomach, causing symptoms
                  like nausea, vomiting, and bloating.
                </Accordion.Body>
                <Accordion.Item className="bold">
                  Sexual Dysfunction
                </Accordion.Item>
                <Accordion.Body>
                  Diabetes can contribute to sexual problems in both men and
                  women, such as erectile dysfunction in men and decreased
                  sexual arousal in women.
                </Accordion.Body>
                <Accordion.Item className="bold">
                  Depression and Anxiety
                </Accordion.Item>
                <Accordion.Body>
                  The chronic nature of diabetes and the burden of managing the
                  condition can lead to emotional and psychological challenges,
                  including depression and anxiety.
                </Accordion.Body>
                <Accordion.Item className="bold">
                  Hypoglycemia (Low Blood Sugar)
                </Accordion.Item>
                <Accordion.Body>
                  Although not a long-term complication, the use of certain
                  diabetes medications, insulin, or lifestyle factors can lead
                  to low blood sugar episodes, which can be dangerous if not
                  promptly treated.
                </Accordion.Body>
                <div className="small-text">
                  Source:
                  https://www.diabetes.org.uk/guide-to-diabetes/complications
                </div>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Management and Treatment</Accordion.Header>
            <Accordion.Body>
              <ul>
                <Accordion.Item className="bold">
                  Lifestyle Changes
                </Accordion.Item>
                <Accordion.Body>
                  <ul>
                    <li>
                      Weight Management: Achieving and maintaining a healthy
                      weight through a balanced diet and regular physical
                      activity can enhance insulin sensitivity and improve blood
                      sugar levels.
                    </li>
                    <li>
                      Regular Physical Activity: Engaging in regular exercise,
                      such as brisk walking, cycling, swimming, or other aerobic
                      activities, helps lower blood glucose levels, improve
                      cardiovascular health, and manage weight.
                    </li>
                    <li>
                      Quitting Smoking: Smoking can worsen complications and
                      increase the risk of cardiovascular disease. Quitting
                      smoking is beneficial for overall health and diabetes
                      management.
                    </li>
                    <li>
                      Stress Management: High levels of stress can impact blood
                      sugar levels. Managing stress through relaxation
                      techniques, mindfulness, or hobbies can be beneficial.
                    </li>
                  </ul>
                </Accordion.Body>
                <Accordion.Item className="bold">Diet</Accordion.Item>
                <Accordion.Body>
                  <ul>
                    <li>
                      Carbohydrate Control: Monitoring carbohydrate intake,
                      especially from refined and sugary sources, is essential
                      in managing blood glucose levels.
                    </li>
                    <li>
                      Portion Control: Eating appropriate portion sizes helps
                      regulate blood sugar and assists in weight management.
                    </li>
                    <li>
                      Healthy Fats: Choosing healthy fats, such as those found
                      in nuts, seeds, avocados, and olive oil, is beneficial for
                      heart health.
                    </li>
                    <li>
                      Lean Proteins: Including lean protein sources, like fish,
                      poultry, beans, and legumes, can help stabilize blood
                      glucose levels and promote satiety.
                    </li>
                  </ul>
                </Accordion.Body>
                <Accordion.Item className="bold">Exercise</Accordion.Item>
                <Accordion.Body>
                  Regular physical activity is vital for managing type 2
                  diabetes. Exercise improves insulin sensitivity, helps lower
                  blood sugar levels, and supports weight management.
                </Accordion.Body>
                <Accordion.Item className="bold">
                  Blood Glucose Monitoring
                </Accordion.Item>
                <Accordion.Body>
                  Regular monitoring of blood glucose levels provides valuable
                  insights into diabetes management. Monitoring helps
                  individuals understand how their lifestyle choices and
                  medications affect blood sugar levels and allows for timely
                  adjustments in treatment plans.{" "}
                </Accordion.Body>
                <Accordion.Item className="bold">Medications</Accordion.Item>
                <Accordion.Body>
                  In some cases, lifestyle changes may not be sufficient to
                  control blood glucose levels, and medications may be
                  prescribed by healthcare professionals. Common medications
                  include oral medication and insulin therapy.
                </Accordion.Body>
                <Accordion.Item className="bold">
                  Regular Medical Check-ups
                </Accordion.Item>
                <Accordion.Body>
                  Regular visits to healthcare providers are essential to
                  monitor blood sugar levels, review treatment plans, and assess
                  for any potential complications
                </Accordion.Body>
                <Accordion.Item className="bold">
                  Foot Care
                </Accordion.Item>
                <Accordion.Body>
                  <ul>
                    <li>Check feet every day</li>
                    <li>Watch out cutting nails</li>
                    <li>Make sure footwear fits</li>
                    <li>Use moisturising cream every day</li>
                    <li>Do not use blades or corn plasters</li>
                  </ul>
                </Accordion.Body>
              </ul>
              <div className="small-text">
                Source:
                https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/diagnosis-treatment/drc-20351199
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Medications</Accordion.Header>
            <Accordion.Body>
              <Accordion.Item className="bold">Oral Medication</Accordion.Item>
              <ul>
                {oralData.map((item) => (
                  <>
                    <li>
                      {item.Medication}: {item.Mechanism}
                    </li>
                    <br></br>
                  </>
                ))}
              </ul>
              <Accordion.Item className="bold">Insulin</Accordion.Item>
              <ul>
                {insulinData.map((item) => (
                  <>
                    <li>
                      {item.Type}: {item.Mechanism}
                    </li>
                    <br></br>
                  </>
                ))}
              </ul>
              <div className="small-text">
                Source:
                https://www.diabetes.org.uk/diabetes-the-basics/types-of-diabetes/type-2/treatments/medicine
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Blood Glucose Control</Accordion.Header>
            <Accordion.Body>
              <Accordion.Item className="bold">
                Importance of Blood Glucose Control
              </Accordion.Item>
              <ul>
                {bloodGlucoseImportanceData.map((item) => (
                  <>
                    <li>
                      {item.name}: {item.value}
                    </li>
                    <br></br>
                  </>
                ))}
              </ul>
              <Accordion.Item className="bold">
                Target Ranges for Blood Glucose Control
              </Accordion.Item>
              <ul>
                {targetRangeData.map((item) => (
                  <>
                    <li>
                      {item.name}: {item.value}
                    </li>
                    <br></br>
                  </>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Recognising Signs</Accordion.Header>
            <Accordion.Body>
              <div>
                Recognising the signs of diabetes-related complications is
                essential for early detection and prompt management.
              </div>
              <br></br>
              <ul>
                {diabetesComplicationsData.map((item) => (
                  <>
                    <div>{item.name}</div>
                    <ul>
                      {item.signs.map((sign, signIndex) => (
                        <li key={signIndex}>{`${sign}`}</li>
                      ))}
                    </ul>
                    <br></br>
                  </>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Myths</Accordion.Header>
            <Accordion.Body>
              <ul>
                {mythData.map((item) => (
                  <>
                    <div className="bold">Myth: {item.myth}</div>
                    <div>Fact: {item.fact}</div>
                    <br></br>
                  </>
                ))}
              </ul>
              <div className="small-text">
                Source:
                https://www.diabetes.org.uk/diabetes-the-basics/myths-and-faqs
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Meal Planning</Accordion.Header>
            <Accordion.Body>
              <Accordion.Item className="bold">
                Understanding Carbohydrates
              </Accordion.Item>
              <ul>
                <li>
                  Carbohydrate counting is a method used by people with type 2
                  diabetes, to manage their blood sugar levels by monitoring and
                  controlling their carbohydrate intake.{" "}
                </li>
                <li>
                  Carbohydrates are the main macronutrient in food that
                  significantly affect blood glucose levels. When carbohydrates
                  are consumed, they are broken down into glucose (sugar), which
                  is then absorbed into the bloodstream, causing blood sugar
                  levels to rise.
                </li>
                <li>
                  Keeping a food journal can be useful for monitoring
                  carbohydrate consumption and determining how different foods
                  influence blood sugar levels. GlucoCare has a built in food
                  tracking feature.
                </li>
              </ul>
              <div className="small-text">
                Source:
                https://www.diabetes.org.uk/guide-to-diabetes/enjoy-food/carbohydrates-and-diabetes/nuts-and-bolts-of-carb-counting
              </div>
              <Accordion.Item className="bold">Portion Control</Accordion.Item>
              <ul>
                <li>
                  Portion control plays a critical role in managing blood sugar
                  levels and maintaining a healthy weight for people with type 2
                  diabetes. Consistently consuming appropriate portion sizes
                  helps regulate blood glucose levels, as well as promotes
                  weight management, which are both essential aspects of
                  diabetes care.
                </li>
                <li>
                  Plate Method: The plate method is a method of dividing your
                  plate in order to determine the appropriate portion
                  proportions for various foods. It is recommended to divide
                  your place into 2 quarters made up of non-starchy vegetables,
                  1 quarter of starchy foods and 1 quarter of protein based
                  foods.
                </li>
                <li>
                  Keeping a food journal can be useful for monitoring
                  carbohydrate consumption and determining how different foods
                  influence blood sugar levels. GlucoCare has a built in food
                  tracking feature.
                </li>
              </ul>
              <div className="small-text">
                Source: https://www.diabetes.co.uk/portion-control.html
              </div>
              <Accordion.Item className="bold">Recipe Ideas</Accordion.Item>
              <ul>
                <li>
                  Grilled Lemon Herb Chicken: Marinate chicken in lemon juice,
                  olive oil, garlic, and herbs, then grill and serve with
                  roasted vegetables.
                </li>
                <li>
                  Zucchini Noodles with Pesto: Spiralize zucchini, sauté, toss
                  with homemade pesto, and add halved cherry tomatoes.
                </li>
                <li>
                  Egg and Vegetable Frittata: Whisk eggs with vegetables, bake
                  in a pie dish until set.
                </li>
                <li>
                  Moong Dal Khichdi: A simple and light one-pot dish made with
                  split mung beans (moong dal) and rice, cooked with minimal oil
                  and spiced with turmeric, cumin, and ginger.
                </li>
                <li>
                  Spinach and Lentil Soup (Dal Palak): A comforting soup made
                  with split lentils, spinach, and Indian spices, served with a
                  squeeze of lemon.
                </li>
              </ul>
              <div className="small-text">
                Source: https://www.diabetes.org.uk/guide-to-diabetes/recipes
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>Exercise Ideas</Accordion.Header>
            <Accordion.Body>
              <div>
                Here are some Exercise Ideas for People with Type 2 Diabetes:
              </div>
              <ul>
                {exerciseIdeasJson.map((item) => (
                  <>
                    <li>
                      <b>{item.name}</b>: {item.description}
                    </li>{" "}
                    <br></br>
                  </>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>Resourceful Videos</Accordion.Header>
            <Accordion.Body>
              <div className="videos">
                <div>
                  <div className="bold">What is Type 2 Diabetes</div>
                  <iframe
                    width="250"
                    height="125"
                    src="https://www.youtube.com/embed/4SZGM_E5cLI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div>
                  <div className="bold">Diabetic Meal Ideas</div>
                  <iframe
                    width="250"
                    height="125"
                    src="https://www.youtube.com/embed/Krd3gfHryMQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div>
                  <div className="bold">How to Check Blood Glucose Level</div>
                  <iframe
                    width="250"
                    height="125"
                    src="https://www.youtube.com/embed/jg5cl2P3RRA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
              <Accordion.Header>
                Crisis and Emergency Preparedness
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  Creating an emergency plan for diabetes-related emergencies is
                  crucial to ensure the safety and well-being of the person you
                  are caring for. Here are some guidelines to help you develop
                  an effective emergency plan:
                </div>
                <ul>
                  {emergencyPlanJson.map((item) => (
                    <>
                      <li>
                        <b>{item.name}</b>: {item.tip}
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
        <br></br>
      </div>
      </div>
    </>
  );
}

export default T2DMInfo;
