const timetableData = [
  // Kareem Sultani & Khawaja Subhan (Updated from Khawaja Subhan Timetable.pdf)
  {
    className: "Kareem Sultani",
    schedule: [
      { day: "Monday", time: "08:30 – 10:15", subject: "Urdu", teacher: "Ms. Gulshan" },
      { day: "Monday", time: "10:15 – 10:30", subject: "Break", teacher: "" },
      { day: "Monday", time: "10:30 – 12:00", subject: "Math", teacher: "Ms. Ayesha Maryam" },
      { day: "Monday", time: "12:00 – 12:30", subject: "Lunch Break", teacher: "" },
      { day: "Monday", time: "12:45 – 01:45", subject: "English", teacher: "Ms. Kiran Akhtar" },
      { day: "Friday", time: "08:30 – 09:45", subject: "Urdu", teacher: "Ms. Gulshan" },
      { day: "Friday", time: "09:45 – 10:00", subject: "Break", teacher: "" },
      { day: "Friday", time: "10:00 – 11:00", subject: "Math", teacher: "Ms. Ayesha Maryam" },
      { day: "Friday", time: "11:00 – 12:00", subject: "English", teacher: "Ms. Kiran Akhtar" }
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
      { day: "Friday", time: "08:30 – 09:45", subject: "Urdu", teacher: "Ms. Gulshan" },
      { day: "Friday", time: "09:45 – 10:00", subject: "Break", teacher: "" },
      { day: "Friday", time: "10:00 – 11:00", subject: "Math", teacher: "Ms. Ayesha Maryam" },
      { day: "Friday", time: "11:00 – 12:00", subject: "English", teacher: "Ms. Kiran Akhtar" }
    ]
  },

  // Dilawar Junaid (Updated from Dilawar's Timetable.pdf)
  {
    className: "Dilawar Junaid",
    schedule: [
      { day: "Monday", time: "08:00 – 09:30", subject: "Urdu", teacher: "Ms. Gulshan" },
      { day: "Monday", time: "09:30 – 10:00", subject: "Break", teacher: "" },
      { day: "Monday", time: "10:00 – 11:00", subject: "English", teacher: "Ms. Kiran Akhtar" },
      { day: "Monday", time: "11:00 – 12:30", subject: "Math", teacher: "Ms. Ayesha Maryam" },
      { day: "Monday", time: "12:30 – 01:00", subject: "Break", teacher: "" },
      { day: "Monday", time: "12:45 – 01:45", subject: "To Be Decided", teacher: "" },
    ]
  }
];

// Promoted Students (Updated from Promoted Students Timetable.pdf)
timetableData.push({
  className: "Promoted Students",
  schedule: [
    { day: "Monday", time: "08:00 – 09:15", subject: "English", teacher: "Ms. Zoya" },
    { day: "Monday", time: "09:15 – 10:30", subject: "Math", teacher: "Sir Bilal & Ms. Zainab" },
    { day: "Monday", time: "10:40 – 11:10", subject: "Break", teacher: "" },
    { day: "Monday", time: "11:10 – 12:30", subject: "Science", teacher: "Ms. Sidra" },
    { day: "Monday", time: "12:30 – 01:45", subject: "Urdu", teacher: "Ms. Palwasha" },
  ]
});

// Level O Juniors (Section A) - Updated from Senior Section Timetable
timetableData.push({
  className: "Level O Juniors (Section A)",
  schedule: [
    { day: "Monday", time: "08:00 – 09:00", subject: "Math", teacher: "" },
    { day: "Monday", time: "09:00 – 10:00", subject: "Business Studies / Chemistry", teacher: "Sir Tamhas/Ms. Areeba" },
    { day: "Monday", time: "10:00 – 12:15", subject: "Urdu, English", teacher: "with Sec B" },
    { day: "Monday", time: "11:15 – 12:15", subject: "Biology", teacher: "" },
    { day: "Monday", time: "12:15 – 01:45", subject: "Math (Syllabus Coverage)", teacher: "Sir Rashid Bashir & Team" }
  ]
});

// Level O Juniors (Section B) - Updated from Senior Section Timetable
timetableData.push({
  className: "Level O Juniors (Section B)",
  schedule: [
    { day: "Monday", time: "08:00 – 09:00", subject: "Math", teacher: "" },
    { day: "Monday", time: "09:00 – 10:00", subject: "Business Studies / Chemistry", teacher: "Sir Tamhas/Ms. Areeba" },
    { day: "Monday", time: "10:00 – 11:00", subject: "English", teacher: "Ms. Kiran Akhtar" },
    { day: "Monday", time: "11:00 – 11:15", subject: "Break", teacher: "" },
    { day: "Monday", time: "11:15 – 12:15", subject: "Urdu", teacher: "Ms. Gulshan" },
    { day: "Monday", time: "12:15 – 01:45", subject: "Math (Syllabus Coverage)", teacher: "Sir Rashid Bashir & Team" }
  ]
});

// Level Pre- O - Updated from Senior Section Timetable
timetableData.push({
  className: "Level Pre- O",
  schedule: [
    { day: "Monday", time: "08:00 – 09:15", subject: "Islamiat", teacher: "Ms. Humaira" },
    { day: "Monday", time: "09:15 – 10:30", subject: "Math", teacher: "Ms. Zainab & Sir Bilal" },
    { day: "Monday", time: "10:30 – 11:15", subject: "Business Studies", teacher: "Sir Tamhas" },
    { day: "Monday", time: "11:15 – 11:45", subject: "Break", teacher: "" },
    { day: "Monday", time: "11:45 – 12:45", subject: "English", teacher: "Ms. Kiran Akhtar" },
    { day: "Monday", time: "12:45 – 01:45", subject: "Urdu", teacher: "Ms. Humaira" }
  ]
});

// Junior Section Classes from Junior Section Timetable
// L4J
timetableData.push({
  className: "L4J",
  schedule: [
    { day: "Monday", time: "8:00-9:15", subject: "English", teacher: "Ms. Atma" },
    { day: "Monday", time: "9:15-10:10", subject: "Urdu", teacher: "Ms. Palwasha" },
    { day: "Monday", time: "10:10-10:30", subject: "Break", teacher: "" },
    { day: "Monday", time: "10:30-11:30", subject: "Math", teacher: "Ms. Ayesha Ms. Hifza" },
    { day: "Monday", time: "11:30-12:10", subject: "Quran Class", teacher: "" },
    { day: "Monday", time: "12:15-1:15", subject: "Science", teacher: "Ms. Sidra" },
    { day: "Monday", time: "1:15-1:45", subject: "Tongue training", teacher: "Ms. Zoya" }
  ]
});

// L4S
timetableData.push({
  className: "L4S",
  schedule: [
    { day: "Monday", time: "8:00-9:15", subject: "Science", teacher: "Ms. Sidra" },
    { day: "Monday", time: "9:15-10:30", subject: "English", teacher: "Ms. Zoya" },
    { day: "Monday", time: "10:30-11:00", subject: "Quran Pak class", teacher: "" },
    { day: "Monday", time: "11:00-11:25", subject: "Break", teacher: "" },
    { day: "Monday", time: "11:25-12:45", subject: "Mathematics", teacher: "Ms. Areeba Ms. Hifza" },
    { day: "Monday", time: "12:45-1:45", subject: "Urdu", teacher: "Ms. Palwasha" }
  ]
});

// L3SG3
timetableData.push({
  className: "L3SG3",
  schedule: [
    { day: "Monday", time: "8:00-9:15", subject: "Math", teacher: "Ms. Hifza" },
    { day: "Monday", time: "9:15-10:30", subject: "English", teacher: "Ms. Atma" },
    { day: "Monday", time: "10:30-11:00", subject: "Break", teacher: "" },
    { day: "Monday", time: "11:00-11:30", subject: "Quran class", teacher: "" },
    { day: "Monday", time: "11:30-12:45", subject: "Urdu", teacher: "Ms. Palwasha" },
    { day: "Monday", time: "12:45-1:45", subject: "Grammar", teacher: "Ms. Atma" }
  ]
});

// L3SG2
timetableData.push({
  className: "L3SG2",
  schedule: [
    { day: "Monday", time: "8:00-9:00", subject: "Urdu", teacher: "Ms. Nousheen" },
    { day: "Monday", time: "9:00-9:30", subject: "Presentations", teacher: "" },
    { day: "Monday", time: "9:30-10:30", subject: "Math", teacher: "Ms. Hifza Ms. Nousheen" },
    { day: "Monday", time: "10:30-11:00", subject: "Break", teacher: "" },
    { day: "Monday", time: "11:00-12:00", subject: "English", teacher: "Ms. Atma" },
    { day: "Monday", time: "12:10-12:35", subject: "Quran class", teacher: "" },
    { day: "Monday", time: "12:35-1:45", subject: "", teacher: "Ms. Nousheen" }
  ]
});

// O Seniors - Updated from Senior Section Timetable
const oSeniors = [
  { className: "Irtaza Waqas (O Seniors)", schedule: [
      { day: "Monday", time: "10:00 – 11:00", subject: "Pakistan Studies", teacher: "Ms. Humaira" },
      { day: "Monday", time: "11:15 – 12:15", subject: "Accounting", teacher: "Sir Tamhas" }
  ] },
  { className: "Mahrosh Rizwan (O Seniors)", schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "Mathematics", teacher: "Ms. Zainab & Sir Bilal" },
      { day: "Monday", time: "10:00 – 11:00", subject: "English", teacher: "Ms. Kiran Akhtar" },
      { day: "Monday", time: "12:15 – 01:45", subject: "Mathematics", teacher: "Ms. Zainab & Sir Bilal" }
  ] },
  { className: "Abdul Rehman Usama (O Seniors)", schedule: [
      { day: "Monday", time: "09:00 – 10:00", subject: "Business Studies", teacher: "Sir Tamhas" },
      { day: "Monday", time: "10:00 – 11:00", subject: "Pakistan Studies", teacher: "Ms. Humaira" }
  ] },
  { className: "Sumama Qasim (O Seniors)", schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "Mathematics", teacher: "Ms. Zainab & Sir Bilal" },
      { day: "Monday", time: "10:00 – 11:00", subject: "Pakistan Studies", teacher: "Sir Tamhas" },
      { day: "Monday", time: "11:15 – 12:15", subject: "Accounting", teacher: "Sir Tamhas" },
      { day: "Monday", time: "12:15 – 01:45", subject: "Mathematics", teacher: "Ms. Zainab & Sir Bilal" }
  ] },
  { className: "Mutti Ur Rasool (O Seniors)", schedule: [
      { day: "Monday", time: "10:00 – 11:00", subject: "Pakistan Studies", teacher: "Ms. Humaira" },
      { day: "Monday", time: "11:15 – 12:15", subject: "Chemistry", teacher: "Ms. Areeba" },
      { day: "Monday", time: "12:45 – 01:45", subject: "English", teacher: "Ms. Kiran Akhtar" }
  ] },
  { className: "Ahmad Asif (O Seniors)", schedule: [
      { day: "Monday", time: "10:00 – 11:00", subject: "Pakistan Studies", teacher: "Ms. Humaira" },
      { day: "Monday", time: "11:15 – 12:15", subject: "Chemistry", teacher: "Ms. Areeba" }
  ] },
  { className: "Muawaz Tariq (O Seniors)", schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "Mathematics", teacher: "Ms. Zainab & Sir Bilal" },
      { day: "Monday", time: "10:00 – 11:00", subject: "Pakistan Studies", teacher: "Ms. Humaira" },
      { day: "Monday", time: "11:15 – 12:15", subject: "Chemistry", teacher: "Ms. Areeba" },
      { day: "Monday", time: "12:15 – 01:45", subject: "Mathematics", teacher: "Ms. Zainab & Sir Bilal" }
  ] },
  { className: "Abeeha Khurram (O Seniors)", schedule: [
      { day: "Monday", time: "10:00 – 11:00", subject: "Pakistan Studies", teacher: "Ms. Humaira" },
      { day: "Monday", time: "11:15 – 12:15", subject: "Chemistry", teacher: "Ms. Areeba" }
  ] },
  { className: "Zuha Ali (O Seniors)", schedule: [
      { day: "Monday", time: "10:00 – 11:00", subject: "Pakistan Studies", teacher: "Ms. Humaira" },
      { day: "Monday", time: "11:15 – 12:15", subject: "Chemistry", teacher: "Ms. Areeba" }
  ] },
  { className: "Taha Zeeshan (O Seniors)", schedule: [
      { day: "Monday", time: "08:00 – 09:00", subject: "Mathematics", teacher: "Ms. Zainab & Sir Bilal" },
      { day: "Monday", time: "11:15 – 12:15", subject: "Chemistry", teacher: "Ms. Areeba" },
      { day: "Monday", time: "12:15 – 01:45", subject: "Mathematics", teacher: "Ms. Zainab & Sir Bilal" }
  ] }
];

// Add each O Senior separately
oSeniors.forEach(c => timetableData.push(c));