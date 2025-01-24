function APA7Format(details) {
  const { author, title, yearPublished } = details;
  let results = `${author} ${yearPublished} ${title} ${details.publisher} ${details.publisherAddress} ${details.link}`;
  return results;
}

function FormatDetails(details) {
  let { author, title, yearPublished, publisherAddress, publisher, link } =
    details;

  if (publisher && publisherAddress) {
    publisher = `${publisher},`;
    publisherAddress = link ? `${publisherAddress},` : publisherAddress;
  }

  if (link) link = `Retrieved from ${link}`;

  return {
    author,
    title,
    yearPublished: `(${yearPublished})`,
    publisher,
    publisherAddress,
    link
  };
}

console.log(res);

const answerForm = document.getElementById('answerForm');
const inputs = document.getElementsByTagName('input');
const results = document.getElementById('res');

answerForm.addEventListener('reset', (e) => {
  e.preventDefault();
  inputs.forEach((input) => input.value === '');
});

const getById = (...args) => document.getElementById(...args).value || '';

answerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = getById('title');
  const author = getById('author');
  const yearPublished = getById('yearPublished');
  const publisher = getById('publisher');
  const publisherAddress = getById('publisherAddress');
  const link = getById('link');

  if (!author && !yearPublished && !title) {
    alert('Author, Year Published, and Title are required!');
    return;
  }

  const formattedDetails = FormatDetails({
    title,
    author,
    yearPublished,
    publisher,
    publisherAddress,
    link,
  });

  const APAResults = APA7Format(formattedDetails);
  results.innerHTML = `<b>${APAResults}</b>`;
});
