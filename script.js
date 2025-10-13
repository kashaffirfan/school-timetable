// ---------------- Globals ----------------
let selectedTeacherNow = "";
let selectedTeacherSchedule = "";
const allTeachers = [...new Set(timetableData.flatMap(c => c.schedule.map(s => s.teacher)).filter(t => t))];
const allClasses = timetableData.map(c => c.className);

// Helper function to get schedule for specific days
function getScheduleForDays(schedule, days) {
  return schedule.filter(s => days.includes(s.day));
}

// Helper function to check if class has Friday schedule
function hasFridaySchedule(className) {
  const classData = timetableData.find(c => c.className === className);
  if (!classData) return false;
  return classData.schedule.some(s => s.day === "Friday");
}

// ---------------- Render Table with Monday-Thursday and Friday ----------------
function renderTable(data, showClassName = false, isTeacherTimetable = false) {
  if (!data || data.length === 0) return "<p>No data found.</p>";

  let html = "";
  
  data.forEach(cls => {
    if (showClassName) {
      html += `<h3>${isTeacherTimetable ? 'Class: ' : ''}${cls.className}</h3>`;
    }
    
    // Get Monday-Thursday schedule
    const monThuSchedule = getScheduleForDays(cls.schedule, ["Monday", "Tuesday", "Wednesday", "Thursday"]);
    // Get Friday schedule
    const fridaySchedule = getScheduleForDays(cls.schedule, ["Friday"]);
    
    const hasFriday = fridaySchedule.length > 0;

    // Monday to Thursday Timetable
    if (monThuSchedule.length > 0) {
      html += `<div class="day-section">
        <h4 class="day-header">Monday to Thursday Timetable</h4>
        <div class="table-container">
          <table>
            <tr><th>Time</th><th>Subject</th><th>${isTeacherTimetable ? 'Class' : 'Teacher'}</th></tr>`;
      
      monThuSchedule.forEach(s => {
        html += `<tr>
          <td>${s.time}</td>
          <td>${s.subject}</td>
          <td>${isTeacherTimetable ? cls.className : s.teacher}</td>
        </tr>`;
      });
      
      html += `</table></div></div>`;
    }

    // Friday Timetable (if exists)
    if (hasFriday) {
      html += `<div class="day-section">
        <h4 class="day-header friday-header">Friday Timetable</h4>
        <div class="table-container">
          <table>
            <tr><th>Time</th><th>Subject</th><th>${isTeacherTimetable ? 'Class' : 'Teacher'}</th></tr>`;
      
      fridaySchedule.forEach(s => {
        html += `<tr>
          <td>${s.time}</td>
          <td>${s.subject}</td>
          <td>${isTeacherTimetable ? cls.className : s.teacher}</td>
        </tr>`;
      });
      
      html += `</table></div></div>`;
    }
    
    // Show note if no schedule found
    if (monThuSchedule.length === 0 && !hasFriday) {
      html += `<p class="no-schedule">No schedule available for this ${isTeacherTimetable ? 'class' : 'student'}</p>`;
    }
  });

  return html;
}

// ---------------- Get Class Timetable ----------------
function getClassTimetable(name) {
  const search = name.toLowerCase();
  const filteredClasses = timetableData.filter(c => 
    c.className.toLowerCase().includes(search)
  );
  
  return filteredClasses.map(cls => ({
    className: cls.className,
    schedule: cls.schedule
  }));
}

// ---------------- Get Teacher Timetable ----------------
function getTeacherTimetable(name) {
  const search = name.toLowerCase();
  const result = [];
  
  timetableData.forEach(cls => {
    const teacherSchedule = cls.schedule.filter(s => 
      s.teacher && s.teacher.toLowerCase().includes(search)
    );
    
    if (teacherSchedule.length > 0) {
      result.push({
        className: cls.className,
        schedule: teacherSchedule
      });
    }
  });
  
  return result;
}

// ---------------- Find Teacher Now ----------------
function findTeacherNow(name) {
  const search = name.toLowerCase();
  const now = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = days[now.getDay()];
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  // Check if it's Friday
  if (currentDay === "Friday") {
    for (const cls of timetableData) {
      const fridaySchedule = cls.schedule.filter(s => s.day === "Friday");
      for (const s of fridaySchedule) {
        if (s.teacher && s.teacher.toLowerCase().includes(search)) {
          const [start, end] = s.time.split("–").map(t => {
            const [h, m] = t.trim().split(":").map(Number);
            return h * 60 + m;
          });
          if (nowMinutes >= start && nowMinutes <= end) {
            return `${s.teacher} is teaching ${s.subject} in class ${cls.className} right now. (Friday Schedule)`;
          }
        }
      }
    }
  } else {
    // Check Monday-Thursday schedule
    for (const cls of timetableData) {
      const weekdaySchedule = cls.schedule.filter(s => 
        ["Monday", "Tuesday", "Wednesday", "Thursday"].includes(s.day)
      );
      
      for (const s of weekdaySchedule) {
        if (s.teacher && s.teacher.toLowerCase().includes(search)) {
          const [start, end] = s.time.split("–").map(t => {
            const [h, m] = t.trim().split(":").map(Number);
            return h * 60 + m;
          });
          if (nowMinutes >= start && nowMinutes <= end) {
            return `${s.teacher} is teaching ${s.subject} in class ${cls.className} right now. (Monday-Thursday Schedule)`;
          }
        }
      }
    }
  }

  return `${name} is free right now.`;
}

// ---------------- Autocomplete Suggestions ----------------
function showSuggestions(inputId, ulId, items, selectionVarName, actionFuncName) {
  const input = document.getElementById(inputId);
  const ul = document.getElementById(ulId);
  ul.innerHTML = "";
  if (selectionVarName) window[selectionVarName] = ""; // reset selection
  if (!input.value) return;

  const query = input.value.toLowerCase();
  const matches = items.filter(i => i && i.toLowerCase().includes(query));

  // match suggestion width to input
  ul.style.width = input.offsetWidth + "px";

  if (matches.length === 0) {
    const li = document.createElement("li");
    li.textContent = inputId.includes("teacher") ? "Teacher not found" : "No match found";
    li.classList.add("no-match");
    ul.appendChild(li);
    return;
  }

  matches.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    li.onclick = () => {
      input.value = name;
      if (selectionVarName) window[selectionVarName] = name;
      ul.innerHTML = "";
      // Trigger the associated action immediately
      if (typeof window[actionFuncName] === "function") {
        window[actionFuncName]();
      }
    };
    ul.appendChild(li);
  });
}

// ---------------- Keyboard Navigation ----------------
function enableKeyboardNavigation(inputId, ulId, actionFuncName, selectionVarName) {
  const input = document.getElementById(inputId);
  const ul = document.getElementById(ulId);
  let currentIndex = -1;

  input.addEventListener("keydown", (e) => {
    const items = ul.querySelectorAll("li:not(.no-match)");
    if (!items.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % items.length;
      highlight(items, currentIndex);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      highlight(items, currentIndex);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (currentIndex >= 0 && currentIndex < items.length) {
        const selected = items[currentIndex].textContent;
        input.value = selected;
        if (selectionVarName) window[selectionVarName] = selected;
        ul.innerHTML = "";
        currentIndex = -1;
        // Trigger the action immediately after selecting
        if (typeof window[actionFuncName] === "function") {
          window[actionFuncName]();
        }
      } else if (input.value.trim()) {
        // Trigger action even if nothing is highlighted but input has value
        if (typeof window[actionFuncName] === "function") {
          window[actionFuncName]();
        }
      }
    }
  });

  function highlight(items, index) {
    items.forEach((li, i) => li.style.backgroundColor = i === index ? "#e0f2fe" : "");
    if (index >= 0 && items[index]) {
      items[index].scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }
}

// ---------------- Enhanced PDF Download ----------------
function downloadPDF(elementId, filename, teacherName = "") {
  const element = document.getElementById(elementId);
  if (!element || element.innerHTML.trim() === "") {
    alert("No timetable to download!");
    return;
  }

  // Wrapper for centering content
  const wrapper = document.createElement("div");
  wrapper.style.textAlign = "center"; // center all content

  // Teacher name heading
  if (teacherName) {
    const heading = document.createElement("h2");
    heading.textContent = teacherName;
    heading.style.marginBottom = "15px";
    wrapper.appendChild(heading);
  }

  // Table wrapper to center table
  const tableWrapper = document.createElement("div");
  tableWrapper.style.display = "inline-block"; // important to center table
  tableWrapper.appendChild(element.cloneNode(true));

  wrapper.appendChild(tableWrapper);
  document.body.appendChild(wrapper);

  html2pdf()
    .set({
      margin: 0.5,
      filename: `${filename}.pdf`,
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
      pagebreak: { mode: ['css', 'legacy'] }
    })
    .from(wrapper)
    .save()
    .then(() => {
      document.body.removeChild(wrapper);
    });
}


// ---------------- Actions ----------------
window.checkTeacherNow = () => {
  const input = document.getElementById("teacherInput").value.trim();
  const name = selectedTeacherNow || input;
  if (!name) {
    document.getElementById("result").textContent = "Please enter a teacher name.";
    return;
  }
  document.getElementById("result").textContent = findTeacherNow(name);
};

window.showTeacherSchedule = () => {
  const input = document.getElementById("teacherScheduleInput").value.trim();
  const name = selectedTeacherSchedule || input;
  if (!name) {
    document.getElementById("teacherOutput").innerHTML = "<p>Please enter a teacher name.</p>";
    return;
  }
  const data = getTeacherTimetable(name);
  document.getElementById("teacherOutput").innerHTML = renderTable(data, true, true);
  document.getElementById("downloadTeacherBtn").classList.toggle("hidden", data.length === 0);
};

window.showClassTable = () => {
  const className = document.getElementById("classInput").value.trim();
  if (!className) {
    document.getElementById("classOutput").innerHTML = "<p>Please enter a class name.</p>";
    return;
  }
  const data = getClassTimetable(className);
  document.getElementById("classOutput").innerHTML = renderTable(data, true, false);
  document.getElementById("downloadClassBtn").classList.toggle("hidden", data.length === 0);
};

// ---------------- Event Listeners ----------------
document.addEventListener("DOMContentLoaded", () => {
  // Buttons
  document.getElementById("checkTeacherBtn").addEventListener("click", checkTeacherNow);
  document.getElementById("showTeacherBtn").addEventListener("click", showTeacherSchedule);
  document.getElementById("showClassBtn").addEventListener("click", showClassTable);
  
  document.getElementById("downloadClassBtn").addEventListener("click", () => {
    const className = document.getElementById("classInput").value.trim();
    const title = `Class Timetable: ${className}`;
    downloadPDF("classOutput", `Class_Timetable_${className.replace(/\s+/g, '_')}`, title, false);
  });
  
  document.getElementById("downloadTeacherBtn").addEventListener("click", () => {
    const teacherName = document.getElementById("teacherScheduleInput").value.trim();
    const title = `Teacher Timetable: ${teacherName}`;
    downloadPDF("teacherOutput", `Teacher_Timetable_${teacherName.replace(/\s+/g, '_')}`, title, true);
  });

  // Autocomplete + Keyboard navigation
  document.getElementById("teacherInput").addEventListener("input", e => 
    showSuggestions("teacherInput", "teacherSuggestions", allTeachers, "selectedTeacherNow", "checkTeacherNow")
  );
  document.getElementById("teacherScheduleInput").addEventListener("input", e => 
    showSuggestions("teacherScheduleInput", "teacherSuggestions2", allTeachers, "selectedTeacherSchedule", "showTeacherSchedule")
  );
  document.getElementById("classInput").addEventListener("input", e => 
    showSuggestions("classInput", "classSuggestions", allClasses, "", "showClassTable")
  );

  enableKeyboardNavigation("teacherInput", "teacherSuggestions", "checkTeacherNow", "selectedTeacherNow");
  enableKeyboardNavigation("teacherScheduleInput", "teacherSuggestions2", "showTeacherSchedule", "selectedTeacherSchedule");
  enableKeyboardNavigation("classInput", "classSuggestions", "showClassTable", "");
});