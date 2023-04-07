document.addEventListener("keyup", (e) => {
    if (e.target.matches("#buscador")) {
        if (e.key === "Escape") e.target.value = "";

        document.querySelectorAll(".card h2").forEach((title) => {
            title.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? title.parentNode.classList.remove("filtro")
                : title.parentNode.classList.add("filtro");
        });
    }
});
