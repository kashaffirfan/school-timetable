const timetableData = [
  // Kareem Sultani
  {
    className: "Kareem Sultani",
    schedule: [
      { day: "Monday", time: "08:30 – 10:15", subject: "Urdu", teacher: "Ms. Gulshan" },
      { day: "Monday", time: "10:15 – 10:30", subject: "Break", teacher: "" },
      { day: "Monday", time: "10:30 – 12:00", subject: "Math", teacher: "Ms. Ayesha Maryam" },
      { day: "Monday", time: "12:00 – 12:30", subject: "Lunch Break", teacher: "" },
      { day: "Monday", time: "12:45 – 01:45", subject: "English", teacher: "Ms. Kiran Akhtar" },
    ]
  },

  // Khawaja Subhan
  {
    className: "Khawaja Subhan",
    schedule: [
      { day: "Monday", time: "08:30 – 10:15", subject: "Urdu", teacher: "Ms. Gulshan" },
      { day: "Monday", time: "10:15 – 10:30", subject: "Break", teacher: "" },
      { day: "Monday", time: "10:30 – 12:00", subject: "Math", teacher: "Ms. Ayesha Maryam" },
      { day: "Monday", time: "12:00 – 12:30", subject: "Lunch Break", teacher: "" },
      { day: "Monday", time: "12:45 – 01:45", subject: "English", teacher: "Ms. Kiran Akhtar" },
    ]
  },

  // Dilawar Junaid
  {
    className: "Dilawar Junaid",
    schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "Urdu", teacher: "Ms. Gulshan" },
      { day: "Monday", time: "09:00 – 10:00", subject: "English", teacher: "Ms. Kiran Akhtar" },
      { day: "Monday", time: "10:00 – 10:30", subject: "Break", teacher: "" },
      { day: "Monday", time: "10:30 – 12:00", subject: "Math", teacher: "Ms. Ayesha Maryam" },
      { day: "Monday", time: "12:00 – 12:30", subject: "Break", teacher: "" },
      { day: "Monday", time: "12:45 – 01:45", subject: "", teacher: "" },
      ]
  },

];
// Promoted Students
timetableData.push({
  className: "Promoted Students",
  schedule: [
    { day: "Monday", time: "08:00 – 09:15", subject: "English", teacher: "Ms. Zoya" },
    { day: "Monday", time: "09:15 – 09:30", subject: "Break", teacher: "" },
    { day: "Monday", time: "09:30 – 10:30", subject: "Math", teacher: "Ms. Zainab & Sir Bilal" },
    { day: "Monday", time: "10:40 – 11:10", subject: "Break", teacher: "" },
    { day: "Monday", time: "11:10 – 12:30", subject: "Urdu", teacher: "Ms. Palwasha" },
    { day: "Monday", time: "12:30 – 01:40", subject: "Science", teacher: "Ms. Sidra" }
    ]
});

// O Juniors A
timetableData.push({
  className: "O Juniors A",
  schedule: [
    { day: "Monday", time: "08:00 – 09:30", subject: "Math", teacher: "Ms. Zainab & Sir Bilal" },
    { day: "Monday", time: "09:30 – 10:30", subject: "Accounting/Biology", teacher: "Sir Tamhas" },
    { day: "Monday", time: "10:30 – 11:30", subject: "Break", teacher: "" },
    { day: "Monday", time: "11:30 – 12:45", subject: "Math", teacher: "Ms. Zainab & Sir Bilal" },
    { day: "Monday", time: "12:45 – 01:45", subject: "Computer", teacher: "Ms. Kashaf" },
    { day: "Monday", time: "12:45 – 01:45", subject: "Chemistry", teacher: "Ms. Areeba" },
    { day: "Monday", time: "12:45 – 01:45", subject: "Business", teacher: "Sir Tamhas" }
  ]
});

// O Juniors B
timetableData.push({
  className: "O Juniors B",
  schedule: [
    { day: "Monday", time: "08:00 – 09:00", subject: "Math", teacher: "Ms. Zainab & Sir Bilal" },
    { day: "Monday", time: "09:00 – 10:00", subject: "English", teacher: "Ms. Zoya" },
    { day: "Monday", time: "10:00 – 11:00", subject: "Urdu", teacher: "Ms. Gulshan" },
    { day: "Monday", time: "11:00 – 11:30", subject: "Break", teacher: "" },
    { day: "Monday", time: "11:30 – 12:45", subject: "Math", teacher: "Ms. Zainab & Sir Bilal" },
    { day: "Monday", time: "12:45 – 01:45", subject: "Chemistry", teacher: "Ms. Areeba" },
    { day: "Monday", time: "12:45 – 01:45", subject: "Business", teacher: "Sir Tamhas" },
    { day: "Monday", time: "12:45 – 01:45", subject: "Computer", teacher: "Ms. Kashaf" }
  ]
});

// Pre O
timetableData.push({
  className: "Pre O",
  schedule: [
    { day: "Monday", time: "08:00 – 09:30", subject: "Islamiat", teacher: "Ms. Humaira" },
    { day: "Monday", time: "09:30 – 10:30", subject: "Math", teacher: "Ms. Zainab & Sir Bilal" },
    { day: "Monday", time: "10:30 – 11:00", subject: "Break", teacher: "" },
    { day: "Monday", time: "11:00 – 11:45", subject: "Business Studies", teacher: "Sir Tamhas" },
    { day: "Monday", time: "11:45 – 12:45", subject: "English", teacher: "Ms. Kiran Akhtar" },
    { day: "Monday", time: "12:45 – 01:45", subject: "Urdu", teacher: "Ms. Gulshan" }
  ]
});

// O Seniors
const oSeniors = [
  { className: "Irtaza Waqas (O Seniors)", schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "", teacher: "" },
      { day: "Monday", time: "09:30 – 10:30", subject: "Accounting", teacher: "Sir Tamhas" },
      { day: "Monday", time: "10:30 – 11:30", subject: "Pakistan Studies", teacher: "Sir Tamhas" },
      { day: "Monday", time: "11:30 – 12:45", subject: "", teacher: "" },
      { day: "Monday", time: "12:45 – 01:45", subject: "", teacher: "" }
  ] },
  { className: "Mahrosh Rizwan (O Seniors)", schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "Mathematics (O Juniors)", teacher: "Ms. Zainab & Sir Bilal" },
      { day: "Monday", time: "09:30 – 10:30", subject: "English", teacher: "Ms. Kiran Akhtar" },
      { day: "Monday", time: "10:30 – 11:30", subject: "", teacher: "" },
      { day: "Monday", time: "11:30 – 12:45", subject: "Mathematics (O Juniors)", teacher: "Ms. Zainab & Sir Bilal" },
      { day: "Monday", time: "12:45 – 01:45", subject: "", teacher: "" }
  ] },
  { className: "Abdul Rehman Usama  (O Seniors)", schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "", teacher: "" },
      { day: "Monday", time: "09:30 – 10:30", subject: "", teacher: "" },
      { day: "Monday", time: "10:30 – 11:30", subject: "Pakistan Studies", teacher: "Ms. Humaira" },
      { day: "Monday", time: "11:30 – 12:45", subject: "Business Studies (O Juniors)", teacher: "Sir Tamhas" },
      { day: "Monday", time: "12:45 – 01:45", subject: "", teacher: "" }
  ] },
  { className: "Sumama Qasim (O Seniors)", schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "Mathematics (O Juniors)", teacher: "Ms. Zainab & Sir Bilal" },
      { day: "Monday", time: "09:30 – 10:30", subject: "Accounting", teacher: "Sir Tamhas" },
      { day: "Monday", time: "10:30 – 11:30", subject: "Pakistan Studies", teacher: "Ms. Humaira" },
      { day: "Monday", time: "11:30 – 12:45", subject: "Mathematics (O Juniors)", teacher: "Ms. Zainab & Sir Bilal" },
      { day: "Monday", time: "12:45 – 01:45", subject: "", teacher: "" }
  ] },
  { className: "Mutti Ur Rasool (O Seniors)", schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "", teacher: "" },
      { day: "Monday", time: "09:30 – 10:30", subject: "Chemistry", teacher: "Ms. Areeba" },
      { day: "Monday", time: "10:30 – 11:30", subject: "Pakistan Studies", teacher: "Ms. Humaira" },
      { day: "Monday", time: "11:30 – 12:45", subject: "Mathematics (O Juniors)", teacher: "Ms. Zainab & Sir Bilal" },
      { day: "Monday", time: "12:45 – 01:45", subject: "English(Separate Class)", teacher: "Ms. Kiran Akhtar" }
  ] },
  { className: "Ahmad Asif (O Seniors)", schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "", teacher: "" },
      { day: "Monday", time: "09:30 – 10:30", subject: "Chemistry", teacher: "Ms. Areeba" },
      { day: "Monday", time: "10:30 – 11:30", subject: "Pakistan Studies", teacher: "Ms. Humaira" },
      { day: "Monday", time: "11:30 – 12:45", subject: "Mathematics (O Juniors)", teacher: "Ms. Zainab & Sir Bilal" },
      { day: "Monday", time: "12:45 – 01:45", subject: "English(Separate Class)", teacher: "Ms. Kiran Akhtar" }
  ] },
  { className: "Muawaz Tariq (O Seniors)", schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "Mathematics (O Juniors)", teacher: "Ms. Zainab & Sir Bilal" },
      { day: "Monday", time: "09:30 – 10:30", subject: "Chemistry", teacher: "Ms. Areeba" },
      { day: "Monday", time: "10:30 – 11:30", subject: "Pakistan Studies", teacher: "Ms. Humaira" },
      { day: "Monday", time: "11:30 – 12:45", subject: "Mathematics (O Juniors)", teacher: "Ms. Zainab & Sir Bilal" },
      { day: "Monday", time: "12:45 – 01:45", subject: "", teacher: "" }
  ] },
  { className: "Abeeha Khurram (O Seniors)", schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "", teacher: "" },
      { day: "Monday", time: "09:30 – 10:30", subject: "Chemistry", teacher: "Ms. Areeba" },
      { day: "Monday", time: "10:30 – 11:30", subject: "Pakistan Studies", teacher: "" },
      { day: "Monday", time: "11:30 – 12:45", subject: "", teacher: "" },
      { day: "Monday", time: "12:45 – 01:45", subject: "", teacher: "" }
  ] },
  { className: "Zuha Ali (O Seniors)", schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "", teacher: "" },
      { day: "Monday", time: "09:30 – 10:30", subject: "Chemistry", teacher: "Ms. Areeba" },
      { day: "Monday", time: "10:30 – 11:30", subject: "Pakistan Studies", teacher: "Ms. Humaira" },
      { day: "Monday", time: "11:30 – 12:45", subject: "", teacher: "" },
      { day: "Monday", time: "12:45 – 01:45", subject: "", teacher: "" }
  ] },
  { className: "Taha Zeeshan (O Seniors)", schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "Mathematics (O Juniors)", teacher: "Ms. Zainab & Sir Bilal" },
      { day: "Monday", time: "09:30 – 10:30", subject: "Chemistry", teacher: "Ms. Areeba" },
      { day: "Monday", time: "10:30 – 11:30", subject: "", teacher: "" },
      { day: "Monday", time: "11:30 – 12:45", subject: "Mathematics (O Juniors)", teacher: "Ms. Zainab & Sir Bilal" },
      { day: "Monday", time: "12:45 – 01:45", subject: "", teacher: "" }
  ] }
];

// Add each O Senior separately
oSeniors.forEach(c => timetableData.push(c));
