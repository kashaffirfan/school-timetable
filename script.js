// ---------------- Globals ----------------
let selectedTeacherNow = "";
let selectedTeacherSchedule = "";
const allTeachers = [...new Set(timetableData.flatMap(c => c.schedule.map(s => s.teacher)))];
const allClasses = timetableData.map(c => c.className);

// ---------------- Render Table ----------------
// ---------------- Render Table ----------------
function renderTable(data) {
  if (!data || data.length === 0) return "<p>No data found.</p>";

  let html = "";
  data.forEach(cls => {
    //html += `<h3>${cls.className}</h3>`;
    html += `<p><em>Same timetable from Monday to Friday</em></p>`;
    html += `<div class="table-container"><table>`;
    html += "<tr><th>Time</th><th>Subject</th><th>Teacher</th></tr>";

    cls.schedule.forEach(s => {
      html += `<tr>
        <td>${s.time}</td>
        <td>${s.subject}</td>
        <td>${s.teacher}</td>
      </tr>`;
    });

    html += "</table></div>";
  });

  return html;
}


// ---------------- Get Class Timetable ----------------
function getClassTimetable(name) {
  const search = name.toLowerCase();
  return timetableData.filter(c => c.className.toLowerCase().includes(search));
}

// ---------------- Get Teacher Timetable ----------------
function getTeacherTimetable(name) {
  const search = name.toLowerCase();
  return timetableData
    .map(c => {
      const filteredSchedule = c.schedule.filter(s =>
        s.teacher.toLowerCase().includes(search)
      );
      if (filteredSchedule.length) {
        return { className: c.className, schedule: filteredSchedule };
      }
      return null;
    })
    .filter(Boolean);
}

// ---------------- Find Teacher Now ----------------
function findTeacherNow(name) {
  const search = name.toLowerCase();
  const now = new Date();
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const currentDay = days[now.getDay()];
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  for (const cls of timetableData) {
    for (const s of cls.schedule) {
      if (s.teacher.toLowerCase().includes(search)) {
        const [start, end] = s.time.split("–").map(t => {
          const [h, m] = t.trim().split(":").map(Number);
          return h * 60 + m;
        });
        if (nowMinutes >= start && nowMinutes <= end) {
          return `${s.teacher} is teaching ${s.subject} in class ${cls.className} right now. (Same timetable from Monday to Friday)`;
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
  window[selectionVarName] = ""; // reset selection
  if (!input.value) return;

  const query = input.value.toLowerCase();
  const matches = items.filter(i => i.toLowerCase().includes(query));

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
      window[selectionVarName] = name;
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

function downloadPDF(elementId, filename, title = "") {
  const element = document.getElementById(elementId);
  if (!element || element.innerHTML.trim() === "") {
    alert("No timetable to download!");
    return;
  }

  const clone = document.createElement("div");

  // Add logo at the top
  const logo = document.createElement("img");
  logo.src = "logo.jpeg"; // your logo path
  logo.style.width = "120px";
  logo.style.display = "block";
  logo.style.margin = "0 auto 15px";
  clone.appendChild(logo);

  // Add title (Teacher/Class)
  if (title) {
    const titleEl = document.createElement("h2");
    titleEl.textContent = title; // teacher name shown here
    titleEl.style.textAlign = "center";
    titleEl.style.color = "#003366";
    titleEl.style.marginBottom = "15px";
    clone.appendChild(titleEl);
  }

  // Append table/content
  const tableClone = element.cloneNode(true);
  clone.appendChild(tableClone);

  // Styles for PDF
  clone.querySelectorAll("*").forEach(el => {
    el.style.border = "none";
    el.style.boxShadow = "none";
    el.style.background = "transparent";
  });

  clone.querySelectorAll("table").forEach(table => {
    table.style.margin = "0 auto";
    table.style.width = "auto";
    table.style.borderCollapse = "collapse";
    table.style.border = "1px solid black";

    table.querySelectorAll("th").forEach(th => {
      th.style.border = "1px solid black";
      th.style.padding = "5px 8px";
      th.style.background = "#2563eb";
      th.style.color = "white";
      th.style.fontWeight = "bold";
      th.style.textAlign = "center";
    });

    table.querySelectorAll("td").forEach(td => {
      td.style.border = "1px solid black";
      td.style.padding = "5px 8px";
      td.style.textAlign = "center";
    });
  });

  const wrapper = document.createElement("div");
  wrapper.style.padding = "20px";
  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);

  html2pdf().set({
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: `${filename}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 3, useCORS: true, scrollY: -window.scrollY, windowWidth: document.body.scrollWidth },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  }).from(wrapper).save().then(() => {
    document.body.removeChild(wrapper);
  });
}


// ---------------- Actions ----------------// ---------------- Actions ----------------
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

  // Render table normally
  document.getElementById("teacherOutput").innerHTML = renderTable(data);

  // Show download button if data exists
  document.getElementById("downloadTeacherBtn").classList.toggle("hidden", data.length === 0);

  // Set teacher heading for PDF
  document.getElementById("downloadTeacherBtn").onclick = () => {
    // Only teacher name in title
    downloadPDF("teacherOutput", `Teacher_Timetable_${name}`, `Teacher: ${name}`);
  };
};



window.showClassTable = () => {
  const className = document.getElementById("classInput").value;
  const data = getClassTimetable(className);
  document.getElementById("classOutput").innerHTML = renderTable(data);
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
  downloadPDF("classOutput", `Class_Timetable_${className}`, `Class: ${className}`);
});
  document.getElementById("downloadTeacherBtn").addEventListener("click", () => {
  const teacherName = document.getElementById("teacherScheduleInput").value.trim();
  downloadPDF("teacherOutput", `Teacher_Timetable_${teacherName}`, `Teacher: ${teacherName}`);
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
