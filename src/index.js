const learnMoreClaim = document.getElementById('claimMore');
const removeGifsBtn = document.getElementById('removeGifs');
const lagText = document.getElementById('lagText');

function learnMore(id) {
    let selected = document.getElementById(`learnMore${id}`);
    selected.classList.add('show');
}

function hideMore() {
    document.querySelectorAll('.learnMore').forEach(function(div) {div.classList.remove('show')});
}

function removeGifs() {
    lagText.parentElement.removeChild(lagText);
    document.querySelectorAll('.icon').forEach(function(icon) {icon.parentElement.removeChild(icon)});
    removeGifsBtn.parentElement.removeChild(removeGifsBtn);
    alert('Removed all animations. Reload the page to get them back');
}

removeGifsBtn.addEventListener('click', removeGifs);

learnMoreClaim.addEventListener('click', function() {learnMore('Claim')});
document.querySelectorAll('.learnMoreClose').forEach(function(more) {more.addEventListener('click', hideMore)});