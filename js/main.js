function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function extLink(href, label) {
  if (!href) return "";
  return '<a href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(label) + "</a>";
}

const root = document.getElementById("project-list");

if (!projects || !projects.length) {
  const note = document.createElement("p");
  note.className = "empty";
  note.textContent = "nothing here yet.";
  root.appendChild(note);
} else {
  root.innerHTML = projects.map(function (p) {
    const links = [extLink(p.repo, "repo"), extLink(p.demo, "demo")].filter(Boolean);
    const bits = [];
    if (p.stack) bits.push(esc(p.stack));
    if (links.length) bits.push(links.join(" · "));

    return (
      '<article class="project">' +
        '<div class="meta">' +
          "<h3>" + esc(p.title || "untitled") + "</h3>" +
          "<span>" + esc(p.year || "") + "</span>" +
        "</div>" +
        "<p>" + esc(p.text || "") + "</p>" +
        '<p class="stack">' + bits.join(" · ") + "</p>" +
      "</article>"
    );
  }).join("");
}
