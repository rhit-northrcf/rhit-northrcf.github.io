const header = document.querySelector("#link-header")
const footer = document.querySelector("#link-footer")

if (header) {
    fetch("header.html")
    .then(response => response.text())
    .then(headerHtml => {
        header.innerHTML = headerHtml;
    });
}
if (footer) {
    fetch("footer.html")
    .then(response => response.text())
    .then(footerHtml => {
        footer.innerHTML = footerHtml;
    });
}

document.querySelectorAll(".accordion-toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", !open);
        document.getElementById(toggle.getAttribute("aria-controls"))
            .classList.toggle("is-open", !open);
    });
});