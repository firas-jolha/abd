(function () {
  const C = window.COURSE;
  if (!C) { document.body.innerHTML = "<p style='padding:40px'>course-data.js is missing or has a syntax error.</p>"; return; }

  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const isExternal = (u) => /^https?:\/\//.test(u);
  const link = (url, label, cls) =>
    url
      ? `<a class="${cls}" href="${esc(url)}"${isExternal(url) ? ' target="_blank" rel="noopener"' : ""}>${esc(label)}</a>`
      : `<span class="${cls} soon" title="Coming soon">${esc(label)}</span>`;
  const fmtDate = (d) => {
    const t = new Date(d + "T00:00:00");
    return isNaN(t) ? esc(d) : t.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
  };

  // Header
  document.title = `${C.code} · ${C.title}`;
  $("meta").textContent = [C.code, C.term, C.institution].filter(Boolean).join(" · ");
  $("title").textContent = C.title;
  $("summary").textContent = C.summary || "";
  $("quicklinks").innerHTML = (C.links || []).map((l) => link(l.url, l.label, "btn" + (l.url ? "" : " soon"))).join("");

  // Schedule
  const kinds = [["slides", "Slides"], ["lab", "Lab"], ["reading", "Reading"], ["recording", "Recording"]];
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const weeks = C.schedule || [];
  // current week = last week whose date is on or before today
  let currentIdx = -1;
  weeks.forEach((w, i) => { const d = new Date(w.date + "T00:00:00"); if (!isNaN(d) && d <= today) currentIdx = i; });
  if (currentIdx === weeks.length - 1 && today - new Date(weeks[currentIdx].date) > 7 * 864e5) currentIdx = -1;

  $("schedule-body").innerHTML = weeks.map((w, i) => {
    const mats = kinds.map(([k, label]) =>
      w[k] ? `<a class="chip" href="${esc(w[k])}"${isExternal(w[k]) ? ' target="_blank" rel="noopener"' : ""}>${label}</a>` : ""
    ).join("");
    const anyMat = kinds.some(([k]) => w[k]);
    return `<tr data-text="${esc((w.topic + " " + (w.notes || "")).toLowerCase())}"${i === currentIdx ? ' class="current"' : ""}>
      <td class="wk">${esc(w.week)}</td>
      <td class="dt">${w.date ? fmtDate(w.date) : ""}</td>
      <td>${esc(w.topic)}${w.notes ? `<span class="note">${esc(w.notes)}</span>` : ""}</td>
      <td><div class="mats">${anyMat ? mats : '<span class="chip">Coming soon</span>'}</div></td>
    </tr>`;
  }).join("");

  $("filter").addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    let shown = 0;
    document.querySelectorAll("#schedule-body tr").forEach((tr) => {
      const hit = !q || tr.dataset.text.includes(q);
      tr.hidden = !hit; if (hit) shown++;
    });
    $("no-match").hidden = shown > 0;
  });

  // Announcements
  const news = (C.announcements || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  $("news").innerHTML = news.length
    ? news.map((n) => `<li><time datetime="${esc(n.date)}">${fmtDate(n.date)}</time><span>${esc(n.text)}</span></li>`).join("")
    : '<li class="empty">Nothing yet.</li>';

  // Grading
  $("grades").innerHTML = (C.grading || []).map((g) =>
    `<div class="grade-row"><span>${esc(g.item)}</span><b>${esc(g.weight)}%</b><div class="bar"><i style="width:${Number(g.weight) || 0}%"></i></div></div>`
  ).join("");
  $("policies").innerHTML = (C.policies || []).map((p) => `<p>${esc(p)}</p>`).join("");

  // Resources
  $("res").innerHTML = (C.resources || []).map((g) =>
    `<div class="card"><h3>${esc(g.group)}</h3><ul>${g.items.map((it) =>
      `<li>${it.url ? link(it.url, it.label, "") : `<span class="soon-text">${esc(it.label)}</span>`}</li>`).join("")}</ul></div>`
  ).join("");

  // People
  const person = (p, role) => `<div class="card person"><h3>${esc(p.name)}</h3><p class="role">${esc(role)}</p>
    ${p.email ? `<p><a href="mailto:${esc(p.email)}">${esc(p.email)}</a></p>` : ""}${p.office ? `<p>${esc(p.office)}</p>` : ""}</div>`;
  $("people-list").innerHTML =
    (C.instructor ? person(C.instructor, C.instructor.role || "Instructor") : "") +
    (C.tas || []).map((t) => person(t, "Teaching assistant")).join("");

  $("foot").textContent = `${C.title} · ${C.term}. Materials are for students of this course.`;
})();
