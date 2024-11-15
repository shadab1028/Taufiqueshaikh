document.getElementById('submitVote').addEventListener('click', function () {
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    if (selectedCandidate) {
        alert(`Thank you for voting! You selected: ${selectedCandidate.value}`);
        const beepSound = document.getElementById('beepSound');
        beepSound.play();
    } else {
        alert('Please select a candidate before submitting your vote.');
    }
});
