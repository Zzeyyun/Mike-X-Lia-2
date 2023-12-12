function playProjection() {
    const tape = document.getElementById('tape');
    tape.style.animation = 'tapeInsert 2s forwards';

    setTimeout(() => {
        const message = document.getElementById('message');
        message.classList.remove('hidden');
        const flowerAnimation = document.getElementById('flowerAnimation');
        flowerAnimation.style.animation = 'flowerAnimation 5s forwards';
    }, 2000);

    setTimeout(() => {
        const mickeyFilm = document.getElementById('mickeyFilm');
        mickeyFilm.classList.remove('hidden');
        mickeyFilm.style.animation = 'mickeyFilmAnimation 10s forwards';
    }, 7000);
}
