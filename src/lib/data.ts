import type { Medication, Condition } from './types';

export const medications: Medication[] = [
  {
    id: 'paracetamol-500mg',
    name: 'Paracetamol 500mg',
    description: 'A common pain reliever and fever reducer.',
    imageUrl: 'https://picsum.photos/seed/201/400/300',
    imageHint: 'white pills',
    uses: ['Headache', 'Muscle ache', 'Fever', 'Toothache', 'Cold'],
    sideEffects: [
      'Nausea',
      'Stomach pain',
      'Loss of appetite',
      'Dark urine',
      'Jaundice (yellowing of skin or eyes)',
    ],
    interactions: [
      'Avoid drinking alcohol.',
      'Ask a doctor before use if you have liver disease.',
    ],
    price: 30.5,
    reviews: [
      {
        id: 1,
        author: 'Rohan S.',
        rating: 5,
        comment: 'Very effective for headaches. Works quickly!',
        date: '2023-10-15',
      },
      {
        id: 2,
        author: 'Priya K.',
        rating: 4,
        comment: 'Good for fever, but sometimes upsets my stomach.',
        date: '2023-09-22',
      },
    ],
  },
  {
    id: 'ibuprofen-200mg',
    name: 'Ibuprofen 200mg',
    description:
      'A nonsteroidal anti-inflammatory drug (NSAID) used for pain relief, fever reduction, and inflammation.',
    imageUrl: 'https://picsum.photos/seed/202/400/300',
    imageHint: 'orange pills',
    uses: ['Menstrual cramps', 'Arthritis', 'Migraine', 'Sprains'],
    sideEffects: [
      'Upset stomach',
      'Heartburn',
      'Diarrhea',
      'Dizziness',
      'High blood pressure',
    ],
    interactions: ['Avoid with aspirin', 'May interact with blood thinners.'],
    price: 55.0,
    reviews: [
      {
        id: 1,
        author: 'Amit V.',
        rating: 5,
        comment: 'The only thing that helps my migraines.',
        date: '2023-11-01',
      },
    ],
  },
  {
    id: 'cetirizine-10mg',
    name: 'Cetirizine 10mg',
    description: 'An antihistamine used to relieve allergy symptoms.',
    imageUrl: 'https://picsum.photos/seed/203/400/300',
    imageHint: 'small white pill',
    uses: ['Hay fever', 'Hives', 'Runny nose', 'Itchy eyes', 'Sneezing'],
    sideEffects: ['Drowsiness', 'Dry mouth', 'Tiredness', 'Stomach pain'],
    interactions: ['Avoid alcohol and other sedatives.'],
    price: 72.75,
    reviews: [],
  },
  {
    id: 'omeprazole-20mg',
    name: 'Omeprazole 20mg',
    description:
      'A proton pump inhibitor (PPI) that reduces stomach acid.',
    imageUrl: 'https://picsum.photos/seed/204/400/300',
    imageHint: 'capsule pill',
    uses: ['Heartburn', 'Acid reflux (GERD)', 'Stomach ulcers'],
    sideEffects: ['Headache', 'Diarrhea or constipation', 'Gas', 'Nausea'],
    interactions: ['May affect the absorption of certain drugs.'],
    price: 98.2,
    reviews: [
      {
        id: 1,
        author: 'Sunita M.',
        rating: 5,
        comment: 'Life-changing for my acid reflux!',
        date: '2023-08-10',
      },
    ],
  },
];

export const conditions: Condition[] = [
  {
    id: 'common-cold',
    name: 'Common Cold',
    description:
      'A viral infectious disease of the upper respiratory tract that primarily affects the nose.',
    imageUrl: 'https://picsum.photos/seed/301/80/80',
    imageHint: 'person sneezing',
    symptoms: ['Runny or stuffy nose', 'Sore throat', 'Cough', 'Sneezing', 'Mild headache'],
    treatments: ['Rest', 'Hydration', 'Over-the-counter pain relievers and decongestants'],
  },
  {
    id: 'headache',
    name: 'Headache',
    description: 'Pain in any region of the head. Headaches may occur on one or both sides of the head, be isolated to a certain location, radiate across the head from one point, or have a viselike quality.',
    imageUrl: 'https://picsum.photos/seed/302/80/80',
    imageHint: 'person head',
    symptoms: ['Dull ache', 'Throbbing pain', 'Pressure', 'Pain behind the eyes'],
    treatments: ['Pain relievers like Paracetamol or Ibuprofen', 'Rest', 'Applying a cold compress'],
  },
  {
    id: 'allergies',
    name: 'Allergies',
    description: "A condition in which the immune system reacts abnormally to a foreign substance.",
    imageUrl: 'https://picsum.photos/seed/303/80/80',
    imageHint: 'pollen flower',
    symptoms: ['Sneezing', 'Itchy, watery eyes', 'Runny nose', 'Skin rash'],
    treatments: ['Antihistamines like Cetirizine', 'Decongestants', 'Nasal sprays'],
  },
  {
    id: 'acid-reflux',
    name: 'Acid Reflux',
    description: 'A digestive disease in which stomach acid or bile irritates the food pipe lining.',
    imageUrl: 'https://picsum.photos/seed/304/80/80',
    imageHint: 'stomach anatomy',
    symptoms: ['Heartburn', 'Regurgitation', 'Difficulty swallowing', 'Chronic cough'],
    treatments: ['Antacids', 'Proton pump inhibitors (PPIs) like Omeprazole', 'Lifestyle changes'],
  },
];
