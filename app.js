const btnTeam = document.getElementById('btn-Team');
const imgMain = document.querySelector('.container-img');
const titleBody = document.querySelector('h2');
const btnHidden = document.getElementById('btn-hidden');
const teamAll = document.querySelector('.card-Team');


btnTeam.addEventListener('click', showTeam);
btnHidden.addEventListener('click', hideTeam);

function showTeam() {
    imgMain.style.display = 'none';
    titleBody.textContent = "Área Tic";
    teamAll.style.display = 'grid';
    btnHidden.style.visibility = 'visible';
}

function hideTeam() {
    imgMain.style.display = 'flex';
    titleBody.textContent = "Servicion Nacional de Aprendizaje";
    teamAll.style.display = 'none';
    btnHidden.style.visibility = 'hidden';
}