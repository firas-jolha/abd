// =====================================================================
//  COURSE CONTENT — edit this file only. The pages read everything here.
//  Links are relative to the site root, so "materials/slides/w01.pdf"
//  points to the file you put in materials/slides/.
//  Leave a link as "" to show it as "coming soon".
// =====================================================================

window.COURSE = {
  code: "MLOps-F26",
  title: "Machine Learning Operations (MLOps)",
  term: "Fall 2026",
  institution: "Innopolis University",
  language: "English",
  summary:
    "How to take a model from a notebook to a service that other people can rely on. " +
    "We cover data and model versioning, reproducible pipelines, experiment tracking, " +
    "packaging and deployment, monitoring, and retraining. Every week has a lecture and a hands-on lab.",

  instructor: {
    name: "Firas [Surname]",
    role: "Senior Lecturer",
    email: "f.surname@example.edu",
    office: "Room 000, Office hours: Wednesday 14:00–15:30",
  },

  // Teaching assistants (optional; delete entries you don't need)
  tas: [
    { name: "TA Name", email: "ta@example.edu" },
  ],

  // Quick links shown as buttons at the top
  links: [
    { label: "Course repository", url: "https://gitverse.ru/" },
    { label: "Telegram channel", url: "" },
    { label: "Submission form", url: "" },
  ],

  // Newest first. date: YYYY-MM-DD
  announcements: [
    { date: "2026-11-20", text: "Lab 6 deadline moved to 29 November, 23:59." },
    { date: "2026-09-01", text: "Welcome to the course. Read the syllabus before the first lab." },
  ],

  // One entry per week
  schedule: [
    { week: 1, date: "2026-09-02", topic: "Course overview; the ML lifecycle",
      slides: "", lab: "materials/labs/lab01-setup.md",
      reading: "", recording: "", notes: "" },
    { week: 2, date: "2026-09-09", topic: "Data versioning with DVC",
      slides: "", lab: "", reading: "", recording: "", notes: "" },
    { week: 3, date: "2026-09-16", topic: "Experiment tracking (MLflow)",
      slides: "", lab: "", reading: "", recording: "", notes: "" },
    { week: 4, date: "2026-09-23", topic: "Reproducible pipelines",
      slides: "", lab: "", reading: "", recording: "", notes: "Project proposal due" },
    { week: 5, date: "2026-09-30", topic: "Packaging models: Docker",
      slides: "", lab: "", reading: "", recording: "", notes: "" },
    { week: 6, date: "2026-10-07", topic: "Serving models as APIs",
      slides: "", lab: "", reading: "", recording: "", notes: "" },
    { week: 7, date: "2026-10-14", topic: "CI/CD for ML",
      slides: "", lab: "", reading: "", recording: "", notes: "" },
    { week: 8, date: "2026-10-21", topic: "Midterm",
      slides: "", lab: "", reading: "", recording: "", notes: "No lab this week" },
    { week: 9, date: "2026-10-28", topic: "Monitoring and data drift",
      slides: "", lab: "", reading: "", recording: "", notes: "" },
    { week: 10, date: "2026-11-04", topic: "Retraining and feedback loops",
      slides: "", lab: "", reading: "", recording: "", notes: "" },
    { week: 11, date: "2026-11-11", topic: "Orchestration (Airflow)",
      slides: "", lab: "", reading: "", recording: "", notes: "" },
    { week: 12, date: "2026-11-18", topic: "Project presentations",
      slides: "", lab: "", reading: "", recording: "", notes: "Final report due" },
  ],

  // Assessment breakdown (weights should add up to 100)
  grading: [
    { item: "Weekly labs", weight: 30 },
    { item: "Midterm exam", weight: 20 },
    { item: "Course project", weight: 40 },
    { item: "Participation", weight: 10 },
  ],

  // Extra material grouped by heading
  resources: [
    { group: "Books", items: [
      { label: "Book title, Author (Year)", url: "" },
    ]},
    { group: "Tools", items: [
      { label: "DVC documentation", url: "https://dvc.org/doc" },
      { label: "MLflow documentation", url: "https://mlflow.org/docs/latest/" },
    ]},
  ],

  // Course policies, one paragraph each
  policies: [
    "Late work loses 10% per day, up to three days. After that it is not accepted unless you have an approved extension.",
    "You may discuss labs with classmates, but the code and report you submit must be your own. If you use an AI assistant, say how in your report.",
  ],
};
