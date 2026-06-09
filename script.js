
const titulo = document.getElementById("titulo");
const link = document.getElementById("link");
const listaNaoOrdenada = document.getElementById("lista-nao-ordenada");
const listaOrdenada = document.getElementById("lista-ordenada");


titulo.innerText = "Trabalho de JavaScript";
link.innerText = "Proz Educação";


listaNaoOrdenada.innerHTML = `
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
`;


listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com" target="_blank">Google</a></li>
    <li><a href="https://www.github.com" target="_blank">GitHub</a></li>
    <li><a href="https://www.youtube.com" target="_blank">YouTube</a></li>
`;