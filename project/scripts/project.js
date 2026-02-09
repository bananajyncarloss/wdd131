const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");

  if (nav.classList.contains("show")) {
    menuBtn.textContent = "✖";
  } else {
    menuBtn.textContent = "☰";
  }
});

const verses = [
  {
    reference: "1 Nephi 3:7",
    text: "7 And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them."
  },
  {
    reference: "Mosiah 2:41",
    text: "“And moreover, I would desire that ye should consider on the blessed and happy state of those that keep the commandments of God. For behold, they are blessed in all things, both temporal and spiritual; and if they hold out faithful to the end they are received into heaven, that thereby they may dwell with God in a state of never-ending happiness. O remember, remember that these things are true; for the Lord God hath spoken it.”"
  },
  {
    reference: "Jacob 6:12",
    text: "O be wise; what can I say more?"
  },
  
  {
    reference: "Doctrine and Covenants 103:36",
    text: "All victory and glory is brought to pass unto you through your diligence, faithfulness, and prayers of faith."
  }
];

const versesGrid = document.getElementById("versesGrid");

function displayVerses(list) {
  versesGrid.innerHTML = ""; 

  if (list.length === 0) {
    versesGrid.innerHTML = "<p>No verses found. Try loading saved verses!</p>";
    return;
  }

  list.forEach(verse => {
    const card = document.createElement("div");
    card.classList.add("verse-card");

    card.innerHTML = `
      <h3>${verse.reference}</h3>
      <p>${verse.text}</p>
    `;

    versesGrid.appendChild(card);
  });
}

displayVerses(verses);

const saveBtn = document.getElementById("saveVersesBtn");
const loadBtn = document.getElementById("loadVersesBtn");

saveBtn.addEventListener("click", () => {
  localStorage.setItem("favoriteVerses", JSON.stringify(verses));
  alert("✅ Favorite verses have been saved!");
});

loadBtn.addEventListener("click", () => {
  const saved = JSON.parse(localStorage.getItem("favoriteVerses")) || [];
  displayVerses(saved);
  alert("📖 Loaded saved verses!");
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});