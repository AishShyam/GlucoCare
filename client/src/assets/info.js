export const MedicineJson = {
  "Oral Medications": [
    {
      Medication: "Metformin",
      Mechanism:
        "It is usually the first-line medication for type 2 diabetes. It reduces glucose production in the liver, improves insulin sensitivity in muscles, and may slow down glucose absorption from the intestines.",
      "Side Effects": ["Nausea", "Diarrhea", "Stomach upset"],
    },
    {
      Medication: "Sulfonylureas",
      Mechanism: "It stimulates the pancreas to produce more insulin.",
      "Side Effects": ["Hypoglycemia"],
    },
    {
      Medication: "Meglitinides",
      Mechanism:
        "It stimulates insulin secretion from the pancreas with a faster onset and shorter duration of action.",
      "Side Effects": ["Hypoglycemia"],
    },
    {
      Medication: "DPP-4 Inhibitors (Gliptins)",
      Mechanism:
        "Inhibits the enzyme DPP-4, which breaks down incretin hormones, resulting in better blood sugar control.",
      "Side Effects": ["Upper respiratory tract infections", "Headaches"],
    },
    {
      Medication: "GLP-1 Receptor Agonists (GLP-1 RAs)",
      Mechanism:
        "Mimics the action of incretin hormones to improve blood glucose control and promote weight loss.",
      "Side Effects": ["Nausea", "Vomiting", "Injection site reactions"],
    },
    {
      Medication: "SGLT-2 Inhibitors",
      Mechanism:
        "Blocks glucose reabsorption in the kidneys, leading to lower blood glucose levels.",
      "Side Effects": [
        "Increased risk of urinary tract infections",
        "Genital infections",
        "Dehydration",
      ],
    },
  ],
  Insulin: [
    {
      Type: "Basal Insulin",
      Mechanism:
        "Provides a slow, steady release of insulin throughout the day to maintain fasting blood glucose levels.",
      Dosage: "Usually taken once or twice daily.",
    },
    {
      Type: "Bolus Insulin",
      Mechanism:
        "Taken before meals to control the rise in blood glucose after eating.",
      Dosage:
        "Various options available, including rapid-acting, short-acting, and pre-mixed insulins.",
    },
  ],
  "Potential Side Effects of Insulin": [
    "Hypoglycemia: Insulin carries a risk of hypoglycemia, especially if doses are not appropriately adjusted based on blood glucose levels, activity, and dietary intake.",
    "Weight Gain: Some individuals may experience weight gain with insulin therapy.",
    "Injection Site Reactions: Redness, swelling, or irritation may occur at the injection site.",
  ],
};

export const BloodGlucoseJson = {
  "Importance of Blood Glucose Control": [
    {
      name: "Preventing Hyperglycemia",
      value:
        "Hyperglycemia refers to high blood glucose levels, which can cause various short-term symptoms and health risks. Maintaining blood glucose within target ranges helps avoid discomfort and potential complications.",
    },
    {
      name: "Minimizing Hypoglycemia",
      value:
        "Hypoglycemia, or low blood glucose levels, can lead to symptoms like shakiness and confusion. Proper blood glucose control reduces the risk of hypoglycemic episodes.",
    },
    {
      name: "Preventing Acute Complications",
      value:
        "Uncontrolled diabetes can lead to life-threatening acute complications like diabetic ketoacidosis (DKA) and hyperosmolar hyperglycemic state (HHS). Good blood glucose control helps prevent these emergencies.",
    },
    {
      name: "Reducing the Risk of Long-Term Complications",
      value:
        "Prolonged uncontrolled diabetes can cause long-term complications affecting the heart, nerves, kidneys, eyes, and feet. Maintaining blood glucose within target ranges helps reduce the risk of such complications.",
    },
    {
      name: "Improving Quality of Life",
      value:
        "Proper blood glucose control helps individuals with diabetes feel better, experience fewer symptoms, and have more energy for daily activities.",
    },
  ],
  "Target Ranges for Blood Glucose Control": [
    {
      name: "Fasting Blood Glucose (before meals)",
      value: "80-130 mg/dL (4.4-7.2 mmol/L)",
    },
    {
      name: "Postprandial Blood Glucose (1-2 hours after meals)",
      value: "Less than 180 mg/dL (10 mmol/L)",
    },
  ],
};

export const DiabetesComplicationSignsJson = {
  diabetesComplications: [
    {
      name: "Cardiovascular Complications",
      signs: [
        "Chest pain or discomfort (angina)",
        "Shortness of breath",
        "Rapid or irregular heartbeat",
        "Swelling in the ankles, feet, or legs (edema)",
        "Fatigue or weakness",
      ],
    },
    {
      name: "Neuropathy (Nerve Damage)",
      signs: [
        "Tingling, burning, or numbness in the hands, feet, or legs",
        "Sensation changes or loss",
        "Muscle weakness",
        "Difficulty walking or coordination problems",
        "Digestive issues, such as constipation or diarrhea",
        "Sexual dysfunction",
      ],
    },
    {
      name: "Nephropathy (Kidney Damage)",
      signs: [
        "Swelling of the ankles, feet, or hands",
        "Fatigue or weakness",
        "Changes in urine output or frequency",
        "Foamy or bubbly urine",
        "Increased protein in the urine",
        "High blood pressure",
      ],
    },
    {
      name: "Retinopathy (Eye Complications)",
      signs: [
        "Blurred or distorted vision",
        "Dark spots or floaters in the field of vision",
        "Gradual vision loss",
        "Difficulty seeing at night",
        "Impaired color perception",
      ],
    },
    {
      name: "Peripheral Arterial Disease (PAD)",
      signs: [
        "Pain, numbness, or tingling in the legs or feet",
        "Cold or pale skin in the legs and feet",
        "Weak pulses in the legs and feet",
        "Poor wound healing on the legs or feet",
        "Leg pain or cramping during exercise (intermittent claudication)",
      ],
    },
    {
      name: "Skin Complications",
      signs: [
        "Dry, itchy skin",
        "Dark patches on the skin (acanthosis nigricans)",
        "Slow-healing wounds or sores",
        "Skin infections",
      ],
    },
    {
      name: "Gastroparesis",
      signs: [
        "Nausea or vomiting",
        "Feeling full quickly after eating",
        "Abdominal bloating or distension",
        "Heartburn or acid reflux",
        "Unintended weight loss",
      ],
    },
    {
      name: "Hypoglycemia (Low Blood Sugar)",
      signs: [
        "Feeling shaky or trembling",
        "Sweating, clamminess, or feeling cold",
        "Rapid heartbeat or palpitations",
        "Dizziness or lightheadedness",
        "Confusion or difficulty concentrating",
        "Hunger or intense cravings for sweets",
      ],
    },
    {
      name: "Hyperglycemia (High Blood Sugar)",
      signs: [
        "Increased thirst (polydipsia)",
        "Frequent urination (polyuria)",
        "Fatigue or weakness",
        "Blurred vision",
        "Headache",
        "Difficulty concentrating",
      ],
    },
  ],
};

export const mythJson = {
  type2DiabetesMyths: [
    {
      myth: "Diabetes is caused by eating too much sugar.",
      fact: "While excessive sugar consumption can contribute to weight gain, which is a risk factor for type 2 diabetes, the condition is caused by a combination of genetic, lifestyle, and environmental factors.",
    },
    {
      myth: "People with diabetes can't eat any carbohydrates.",
      fact: "Carbohydrates raise blood sugar levels, but it's essential to manage their intake, not eliminate them entirely. Carbohydrates should be consumed in moderation and balanced with other nutrients.",
    },
    {
      myth: "Type 2 diabetes is a mild form of diabetes.",
      fact: "Type 2 diabetes is a serious condition that can lead to severe complications if not properly managed. It requires lifelong management and can have a significant impact on health and quality of life.",
    },
    {
      myth: "Only overweight or obese individuals get type 2 diabetes.",
      fact: "While being overweight is a risk factor, people of all body types can develop type 2 diabetes. Other factors such as family history, age, and physical inactivity also play a role.",
    },
    {
      myth: "Insulin should be used as a last resort for diabetes treatment.",
      fact: "Insulin is a crucial treatment option for many people with type 2 diabetes. It may be prescribed at any stage of the condition, depending on the individual's needs and response to other treatments.",
    },
    {
      myth: "People with diabetes can't participate in physical activities.",
      fact: "Regular physical activity is highly beneficial for people with diabetes. It helps improve blood sugar control, reduces the risk of complications, and promotes overall well-being.",
    },
    {
      myth: "Diabetes is contagious.",
      fact: "Diabetes is not contagious; it cannot be transmitted from one person to another through contact or other means.",
    },
    {
      myth: "If you have diabetes, you will need to inject insulin daily.",
      fact: "While some people with diabetes may require insulin injections, others can manage their condition with oral medications, lifestyle changes, and diet.",
    },
    {
      myth: "Type 2 diabetes can be cured with herbal supplements or alternative therapies.",
      fact: "There is no cure for type 2 diabetes. While some alternative therapies may help with symptom management, they should not replace medical treatment or lifestyle changes.",
    },
  ],
};

export const CaregiverStressSignsJson = {
  caregiverStressSymptoms: [
    {
      symptom: "Feeling overwhelmed or constantly worried",
    },
    {
      symptom: "Feeling tired often",
    },
    {
      symptom: "Getting too much sleep or not enough sleep",
    },
    {
      symptom: "Gaining or losing weight",
    },
    {
      symptom: "Becoming easily irritated or angry",
    },
    {
      symptom: "Losing interest in activities you used to enjoy",
    },
    {
      symptom: "Feeling sad",
    },
    {
      symptom:
        "Having frequent headaches, bodily pain or other physical problems",
    },
    {
      symptom: "Abusing alcohol or drugs, including prescription medications",
    },
  ],
};

export const caregiverStressTips = {
  caregiverSelfCareTips: [
    {
      name: "Accept Help",
      value:
        "Be prepared with a list of ways that others can help you, and let the helper choose what he or she would like to do. For instance, a friend may offer to take the person you care for on a walk a couple of times a week. Or a friend or family member may be able to run an errand, pick up your groceries or cook for you.",
    },
    {
      name: "Focus on What You Are Able to Provide",
      value:
        "It's normal to feel guilty sometimes, but understand that no one is a 'perfect' caregiver. Believe that you are doing the best you can and making the best decisions you can at any given time.",
    },
    {
      name: "Set Realistic Goals",
      value:
        "Break large tasks into smaller steps that you can do one at a time. Prioritize, make lists and establish a daily routine. Begin to say no to requests that are draining, such as hosting holiday meals.",
    },
    {
      name: "Get Connected",
      value:
        "Find out about caregiving resources in your community. Many communities have classes specifically about the disease your loved one is facing. Caregiving services such as transportation, meal delivery or housekeeping may be available.",
    },
    {
      name: "Join a Support Group",
      value:
        "A support group can provide validation and encouragement, as well as problem-solving strategies for difficult situations. People in support groups understand what you may be going through. A support group can also be a good place to create meaningful friendships.",
    },
    {
      name: "Seek Social Support",
      value:
        "Make an effort to stay well-connected with family and friends who can offer nonjudgmental emotional support. Set aside time each week for connecting, even if it's just a walk with a friend.",
    },
    {
      name: "Set Personal Health Goals",
      value:
        "Set goals to establish a good sleep routine, find time to be physically active on most days of the week, eat a healthy diet, and drink plenty of water.",
    },
    {
      name: "Trouble Sleeping",
      value:
        "Many caregivers have issues with sleeping. Not getting quality sleep over a long period of time can cause health issues. If you have trouble getting a good night's sleep, talk to your doctor.",
    },
    {
      name: "See Your Doctor",
      value:
        "Get recommended vaccinations and screenings. Make sure to tell your doctor that you're a caregiver. Don't hesitate to mention any concerns or symptoms you have.",
    },
  ],
};

export const stressManagementTechniquesJson = {
  stressManagementTechniques: [
    {
      technique: "Meditation",
      description:
        "Meditation is a practice that involves focusing your mind and eliminating distractions. It can be done through various techniques, such as mindfulness meditation or guided meditation. Meditation can help reduce stress, increase self-awareness, and promote a sense of calm and relaxation.",
    },
    {
      technique: "Deep Breathing Exercises",
      description:
        "Deep breathing exercises, also known as diaphragmatic breathing or belly breathing, involve taking slow, deep breaths, expanding your diaphragm fully. This technique can activate the body's relaxation response and help reduce anxiety and stress. Practicing deep breathing regularly can promote better oxygenation and relaxation.",
    },
    {
      technique: "Progressive Muscle Relaxation",
      description:
        "Progressive Muscle Relaxation (PMR) is a technique that involves tensing and relaxing different muscle groups in the body. By systematically tensing and releasing muscle tension, PMR helps release physical tension and promotes relaxation. This technique can be particularly helpful for reducing muscle stiffness and relieving stress.",
    },
    {
      technique: "Journaling",
      description:
        "Write down your thoughts, feelings, and experiences in a journal to process emotions and gain insights into your stressors.",
    },
    {
      technique: "Social Support",
      description:
        "Connect with family and friends, or join support groups to share your experiences and receive emotional support. There is a built in community forum feature with this app.",
    },
  ],
};

export const ExerciseIdeaJson = {
  exerciseIdeasForCaregivers: [
    {
      idea: "Walking",
      description:
        "Take short walks whenever possible, such as during breaks or while waiting for appointments. Walking is a simple and effective way to stay active and can be done almost anywhere.",
    },
    {
      idea: "Stretching",
      description:
        "Incorporate stretching exercises into your daily routine. Stretching helps improve flexibility, reduces muscle tension, and can be done in just a few minutes.",
    },
    {
      idea: "Stair Climbing",
      description:
        "If you have stairs at home or at work, use them as a form of exercise. Climbing stairs is an excellent way to strengthen leg muscles and get your heart rate up.",
    },
    {
      idea: "Dancing",
      description:
        "Put on your favorite music and dance around the house. Dancing is not only fun but also a great cardiovascular workout.",
    },
    {
      idea: "Chair Exercises",
      description:
        "Perform seated exercises while assisting the person you care for. Simple exercises like leg lifts, arm circles, and seated marches can be done while seated.",
    },
    {
      idea: "Yoga",
      description:
        "Practice yoga to improve flexibility, balance, and relaxation. Many online resources offer short and beginner-friendly yoga sessions.",
    },
    {
      idea: "Household Chores",
      description:
        "Engage in household chores that involve physical activity, such as vacuuming, mopping, gardening, or washing windows.",
    },
    {
      idea: "Mini Workouts",
      description:
        "Break your exercise routine into short, mini workouts throughout the day. Ten minutes of exercise multiple times a day can be just as effective as one longer session.",
    },
  ],
};

export const emergencyPlanJson = [
  {
    name: "Medical Information",
    tip: "Compile all relevant medical information of the person you are caring for, including their full name, date of birth, blood type, allergies, current medications, and any medical conditions. This app includes a feature that lets you store this information for future reference.",
  },
  {
    name: "Emergency Contacts",
    tip: "Identify and list multiple emergency contacts.",
  },
  {
    name: "Emergency Supplies",
    tip: "Prepare an emergency kit that includes essential diabetes-related supplies, such as glucose monitoring devices, insulin, medication, syringes, glucose tablets, and glucagon (if prescribed). Keep the emergency kit in an easily accessible and clearly labeled location.",
  },
  {
    name: "Training and Education",
    tip: "Familiarize yourself with diabetes-related emergency procedures, such as recognizing and treating hypoglycemia and hyperglycemia.",
  },
];

export const faqJson = [
  {
    question:
      "What is type 2 diabetes, and how is it different from type 1 diabetes?",
    answer:
      "Type 2 diabetes is a chronic condition where the body becomes resistant to insulin or does not produce enough insulin. It is different from type 1 diabetes, which is an autoimmune disorder where the body's immune system attacks and destroys insulin-producing cells in the pancreas.",
  },
  {
    question:
      "What are the symptoms of type 2 diabetes, and how can I recognise them in the person I am caring for?",
    answer:
      "Symptoms of the condition can be found in the Symptoms and Risk Factors section of the Type 2 Diabetes page of GlucoCare",
  },
  {
    question:
      "How can I assist the person with type 2 diabetes in managing their blood sugar levels?",
    answer:
      "You can help by encouraging them to monitor their blood sugar regularly, promoting a healthy diet with balanced meals, encouraging physical activity, and reminding them to take prescribed medications as directed. More information can be found on the Management and Treatment section of Type 2 Diabetes page of GlucoCare.",
  },
  {
    question:
      "What lifestyle changes should the person with type 2 diabetes make, and how can I support them in making these changes?",
    answer:
      "Lifestyle changes may include adopting a healthier diet, engaging in regular physical activity, managing stress, and getting enough sleep. You can support them by being a positive role model and offering encouragement and motivation. More information can be found on the Management and Treatment section of Type 2 Diabetes page of GlucoCare.",
  },
  {
    question:
      "What are the common medications used to treat type 2 diabetes, and what do I need to know about them?",
    answer:
      "Common medications for type 2 diabetes include metformin, sulfonylureas, meglitinides, and insulin. It's essential to understand the purpose of each medication, how to administer them correctly, and any potential side effects. More information can be found on the Medications section of Type 2 Diabetes page of GlucoCare.",
  },
  {
    question:
      "What should I do in case of a diabetes-related emergency, such as hypoglycemia or hyperglycemia?",
    answer:
      "In case of hypoglycemia (low blood sugar), offer a source of glucose like juice or glucose tablets. In case of hyperglycemia (high blood sugar), encourage them to drink water and seek medical attention if needed.",
  },
  {
    question:
      "How can I create a safe environment for the person with type 2 diabetes at home?",
    answer:
      "Ensure diabetes supplies are organized and easily accessible and keep medications properly stored.",
  },
  {
    question:
      "Are there specific dietary restrictions or meal planning considerations for type 2 diabetes?",
    answer:
      "Yes, meal planning should focus on balanced meals with controlled portions of carbohydrates. More information can be found on the Management and Treatment section of Type 2 Diabetes page of GlucoCare.",
  },
  {
    question:
      "How can I help the person I am caring for cope with the emotional challenges of living with type 2 diabetes?",
    answer:
      "Offering emotional support, being a good listener, and encouraging positive coping strategies can help them manage emotional challenges effectively.",
  },
  {
    question:
      "What are the potential complications of uncontrolled type 2 diabetes, and how can they be prevented?",
    answer:
      "Uncontrolled diabetes can lead to complications such as heart disease, kidney problems, nerve damage, and vision issues. Proper blood sugar management, regular check-ups, and a healthy lifestyle can help prevent complications. More information can be found on the Complications section of Type 2 Diabetes page of GlucoCare.",
  },
  {
    question:
      "How often should the person with type 2 diabetes visit their healthcare provider, and what should I do to prepare for appointments?",
    answer:
      "This varies from case to case, check with your healthcare provider. Prepare a list of questions and concerns before the appointment and bring their blood sugar records if applicable.",
  },
  {
    question:
      "What support services are available for carers of individuals with type 2 diabetes?",
    answer:
      "Support groups, respite care options, and community resources can provide valuable assistance for carers in their caregiving journey.",
  },
];

export const exerciseIdeasJson = [
  {
    name: "Brisk Walking",
    description:
      "Walking at a faster pace than usual, which is an excellent low-impact aerobic exercise for cardiovascular health.",
  },
  {
    name: "Cycling",
    description:
      "Riding a bicycle, either stationary or outdoors, to improve cardiovascular health and lower body strength.",
  },
  {
    name: "Swimming",
    description:
      "Engaging in a full-body workout by swimming, which is easy on the joints and can improve cardiovascular health and muscle strength.",
  },
  {
    name: "Dancing",
    description:
      "Participating in dance routines or dancing freely to music, providing a fun and enjoyable way to get moving.",
  },
  {
    name: "Yoga",
    description:
      "Combining physical postures, breathing exercises, and meditation to promote relaxation, flexibility, and body awareness.",
  },
  {
    name: "Chair Exercises",
    description:
      "Performing exercises while seated to work on strength, flexibility, and range of motion, ideal for those with limited mobility.",
  },
  {
    name: "Hiking",
    description:
      "Taking nature walks on trails or uneven terrains to enjoy the outdoors while getting moderate-intensity exercise.",
  },
  {
    name: "Stretching",
    description:
      "Incorporating regular stretching exercises to improve flexibility, reduce the risk of injury, and enhance range of motion.",
  },
  {
    name: "Home Workouts",
    description:
      "Using online exercise videos or apps for guided workouts that can be tailored to various fitness levels and preferences.",
  },
];
