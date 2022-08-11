const scores = document.querySelectorAll(
  '.score'
) as NodeListOf<HTMLElement> | null;

const submitBtn = document.querySelector<HTMLButtonElement>('#submit-btn');

const main = document.getElementById('main');

let selectedScore: string;

if (scores != null) {
  scores.forEach((score) => {
    score.addEventListener('click', () => {
      selectedScore = score.innerHTML;
    });
  });
}

submitBtn?.addEventListener('click', () => {
  if (main != null) {
    main.innerHTML = '';
    const article = document.createElement('article');
    article.classList.add('thank-you');
    article.innerHTML = `<header>
    <img src="../images/illustration-thank-you.svg" alt="" /> <br />
    <p class="given-score">You selected ${selectedScore} out of 5</p>

    <h2>Thank you!</h2>
  </header>
  <section>
    <p class="thank-you-text">
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </p>
  </section>`;

    main.append(article);
  }
});

const toggleColor = (score: any): void => {
  removeActiveClasses();
  score.classList.add('active', 'no-hover');
};

const removeActiveClasses = () => {
  scores?.forEach((score) => score.classList.remove('active', 'no-hover'));
};

if (scores != null) {
  scores.forEach((score) => {
    score.addEventListener('click', () => {
      toggleColor(score);
    });
  });
}
