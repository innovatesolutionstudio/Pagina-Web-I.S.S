// Carga inicial del idioma (puedes cambiar el predeterminado)
let currentLanguage = "es";

// Función para cargar el idioma
async function loadLanguage(lang) {
    const response = await fetch('js/languages.json');
    const languages = await response.json();
    const translations = languages[lang];

    // Reemplazar los textos según el idioma seleccionado
    for (const key in translations) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[key];
        }
    }
}

// Event Listener para el cambio de idioma
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLanguage = e.target.closest('.dropdown-item').dataset.lang;
        currentLanguage = selectedLanguage;
        loadLanguage(currentLanguage);
    });
});

// Cargar el idioma inicial
loadLanguage(currentLanguage);
