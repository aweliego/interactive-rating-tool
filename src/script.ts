const scores = document.querySelectorAll(
  '.score'
) as NodeListOf<HTMLElement> | null;
const submitBtn = document.querySelector<HTMLButtonElement>('#submit-btn');

submitBtn?.addEventListener('click', () => {
  // set main to ''
  // create thank-you component (article element, append to main)
  // string interpolation using getScore()

});

const toggleColor = (score: any): void => {
  removeActiveClasses();
  score.classList.add('active');
};

const removeActiveClasses = () => {
  scores?.forEach((score) => score.classList.remove('active'));
};

const getScore = (score: any) => {
  const selectedScore = score.innerHTML;
  console.log(selectedScore);
  return selectedScore;
};


if (scores != null) {
  scores.forEach((score) => {
    score.addEventListener('click', () => {
      toggleColor(score);
      getScore(score);
    });
  });
}
