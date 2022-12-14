const ratingTool = document.querySelector('.rating-tool') as HTMLElement | null;
const thankYou = document.querySelector('.thank-you') as HTMLElement | null;

const scores = document.querySelectorAll(
  '.score'
) as NodeListOf<HTMLElement> | null;

const submitBtn = document.querySelector<HTMLButtonElement>('#submit-btn');

const main = document.getElementById('main');

let selectedScore: string = '0';

if (scores != null) {
  scores.forEach((score) => {
    score.addEventListener('click', () => {
      selectedScore = score.innerHTML;
      if (submitBtn != null && selectedScore !== '0') {
        submitBtn.disabled = false;
      }
    });
  });
}

submitBtn?.addEventListener('click', () => {
  if (ratingTool != null && thankYou != null) {
    ratingTool.classList.add('hide');
    thankYou.classList.add('show');

    const thankYouHeader = thankYou.querySelector('header');
    const scorePar = document.createElement('p');
    scorePar.classList.add('given-score');
    scorePar.innerHTML = `You selected ${selectedScore} out of 5`;
    thankYouHeader?.append(scorePar);
  }
});

const toggleColor = (score: any): void => {
  removeActiveClasses();
  score.classList.add('active');
};

const removeActiveClasses = () => {
  scores?.forEach((score) => score.classList.remove('active'));
};

if (scores != null) {
  scores.forEach((score) => {
    score.addEventListener('click', () => {
      toggleColor(score);
    });
  });
}
