function getClassTimetable(className) {
  return timetableData[className] || [];
}

function renderTable(data, type) {
  if (!data.length) return "<p>No data found</p>";

  let html = "";
  data.forEach(dayItem => {
    html += `<h3>${dayItem.day}</h3>`;
    html += `<table border="1" style="border-collapse: collapse; margin-bottom: 10px; width: 100%;">`;
    html += `<tr><th>Time</th><th>Subject</th><th>Teacher</th></tr>`;
    dayItem.schedule.forEach(item => {
      html += `<tr>
        <td>${item.time}</td>
        <td>${item.subject}</td>
        <td>${item.teacher}</td>
      </tr>`;
    });
    html += `</table>`;
  });
  return html;
}

// Example: Find teacher timetable
function getTeacherTimetable(teacherName) {
  const result = [];
  for (const cls in timetableData) {
    timetableData[cls].forEach(dayItem => {
      const schedule = dayItem.schedule.filter(item => item.teacher.includes(teacherName));
      if (schedule.length) {
        result.push({
          day: dayItem.day + " (" + cls + ")",
          schedule: schedule
        });
      }
    });
  }
  return result;
}

// Example: Find where a teacher is right now
function findTeacherNow(teacherName) {
  const now = new Date();
  const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const today = dayNames[now.getDay()];
  const hour = now.getHours();
  const minute = now.getMinutes();

  // naive approach: just find today schedule and match approximate hour
  for (const cls in timetableData) {
    const dayItem = timetableData[cls].find(d => d.day === today);
    if (!dayItem) continue;
    for (const item of dayItem.schedule) {
      if (item.teacher.includes(teacherName)) {
        // You can improve by parsing time ranges
        return `Teacher ${teacherName} is teaching ${item.subject} in class ${cls}`;
      }
    }
  }
  return `Teacher ${teacherName} is not teaching right now.`;
}
