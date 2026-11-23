<<<<<<< HEAD
# abd
=======
# Course site for GitVerse Pages

A static site for sharing course materials: schedule with slides, labs, readings and recordings per week, announcements, grading, resources and contacts. No build step, no dependencies.

## Files

```
index.html          page layout (you rarely need to touch it)
course-data.js      ALL course content: edit this file
assets/style.css    styles (light and dark mode)
assets/app.js       renders the page from course-data.js
materials/slides/   put lecture PDFs here
materials/labs/     lab handouts
materials/readings/ papers, notes
404.html            custom "not found" page
.nojekyll           tells the builder to skip Jekyll processing, where supported
```

## Adding material

1. Copy the file into the right folder, e.g. `materials/slides/w02-dvc.pdf`.
2. In `course-data.js`, set the link for that week: `slides: "materials/slides/w02-dvc.pdf"`.
3. Commit and push. The site rebuilds on every commit to the publishing branch.

Empty links show as "Coming soon", so you can publish the full schedule on day one and fill it in week by week. The row for the current week is highlighted automatically from the dates.

Links can also point outside the repo (Google Drive, YouTube, a recording on Rutube): use the full `https://` address.

Keep paths relative (no leading `/`). A project site lives at `https://<owner>.gitverse.site/<repo-name>/`, so a link starting with `/` would point to the wrong place.

Avoid folder or file names that start with `_` or `.`. When GitVerse builds from a branch it runs Jekyll by default, and Jekyll skips those.

## Publishing on GitVerse

1. Create a **public** repository on gitverse.ru, e.g. `mlops-course`.
2. Push these files to the root of the `master`/`main` branch (or to a separate `pages` branch if you want to keep the site apart from course code):

   ```bash
   git init
   git add .
   git commit -m "Course site"
   git remote add origin https://gitverse.ru/<owner>/mlops-course.git
   git push -u origin master
   ```

3. In the repository, open **Settings → Pages**, choose source **Branch**, pick the branch and the root folder `/`, and save. The first build starts automatically.
4. When the build finishes, the site is at `https://<owner>.gitverse.site/mlops-course/`.

A repository named after your account gives a personal site at `https://<owner>.gitverse.site/` instead.

## Preview locally

Open `index.html` in a browser; it works from disk. Or run `python3 -m http.server` in this folder and go to http://localhost:8000.

## Several courses

Use one repository per course (each gets its own URL), or put each course in a subfolder (`mlops/`, `se/`) with its own copy of `index.html`, `course-data.js` and `materials/`, sharing `assets/` via `../assets/...` paths.
>>>>>>> 8122336 (add first commit)
