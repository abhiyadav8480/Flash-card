const API = "http://localhost:5000/api/cards";

async function fetchCards() {
    const res = await fetch(API);
    const data = await res.json();

    const container = document.getElementById("card-container");
    container.innerHTML = "";

    data.forEach(card => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerText = card.question;

        div.onclick = () => {
            div.innerText = div.innerText === card.question
                ? card.answer
                : card.question;
        };

        container.appendChild(div);
    });
}

async function addCard() {
    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, answer }),
    });

    fetchCards();
}

fetchCards();