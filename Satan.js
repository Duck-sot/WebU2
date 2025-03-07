function dayAndNight() {
    // hämta html-taggen 
    let html = document.getElementsByTagName("html")[0]
    html.classList.toggle("theme-light")
    html.classList.toggle("theme-dark")
}