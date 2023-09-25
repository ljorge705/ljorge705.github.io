// URL de la página web externa que deseas mostrar
const externalPageUrl = "https://lolm.qq.com/act/a20220818raider/index.html";

// Función para cargar la página web externa en el contenedor
function loadExternalPage() {
    const container = document.getElementById("externalPageContainer");
    container.innerHTML = `<iframe src="${externalPageUrl}" frameborder="0" width="100%" height="100%"></iframe>`;
}

// Cargar la página web externa al cargar la extensión
window.onload = loadExternalPage;
