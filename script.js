function showFeeling(feeling) {

    let response = document.getElementById("response");

    if (feeling === "anxious") {

        response.innerHTML = `
            <h2>🌿 Okay. Let's slow things down.</h2>
            <p>You don't have to solve everything at once.</p>
            <p>What would help right now?</p>

            <button onclick="calmDown()">🧘 Help me calm down</button>
            <button onclick="writeThoughts()">📝 Get my thoughts out</button>
            <button onclick="talkToSomeone()">🫂 Talk to someone</button>
        `;

    } else if (feeling === "sad") {

        response.innerHTML = `
            <h2>🫂 I'm glad you told me.</h2>
            <p>You don't have to pretend you're okay.</p>
            <p>What do you need right now?</p>

            <button onclick="gentleActivity()">🌱 Something gentle</button>
            <button onclick="writeThoughts()">📝 Write it out</button>
            <button onclick="talkToSomeone()">🫂 Talk to someone</button>
        `;

    } else if (feeling === "tired") {

        response.innerHTML = `
            <h2>😴 Sounds like you need a pause.</h2>
            <p>You don't have to be productive every second.</p>
            <p>What sounds manageable?</p>

            <button onclick="gentleActivity()">🌱 Take a little break</button>
            <button onclick="tinyTask()">✨ Do one tiny task</button>
        `;

    } else if (feeling === "angry") {

        response.innerHTML = `
            <h2>😤 Something clearly got to you.</h2>
            <p>You don't have to react immediately.</p>

            <button onclick="calmDown()">🌿 Give me a moment</button>
            <button onclick="writeThoughts()">📝 Let me write it out</button>
            <button onclick="talkToSomeone()">🫂 Talk it through</button>
        `;

    } else if (feeling === "overwhelmed") {

        response.innerHTML = `
            <h2>🫠 One thing at a time.</h2>
            <p>You don't need to solve your entire life today.</p>
            <p>What would help?</p>

            <button onclick="tinyTask()">🌱 Give me one tiny task</button>
            <button onclick="writeThoughts()">📝 Help me sort my thoughts</button>
            <button onclick="calmDown()">🧘 Help me slow down</button>
        `;

    } else if (feeling === "happy") {

        response.innerHTML = `
            <h2>☀️ I LOVE THAT FOR YOU.</h2>
            <p>Don't rush past a good moment.</p>
            <p>What do you want to do with this feeling?</p>

            <button onclick="saveWin()">🌟 Save this little win</button>
            <button onclick="gentleActivity()">🎨 Do something fun</button>
        `;

    } else if (feeling === "confused") {

        response.innerHTML = `
            <h2>🤔 You don't need all the answers immediately.</h2>
            <p>Let's make things a little clearer.</p>

            <button onclick="writeThoughts()">📝 Put my thoughts into words</button>
            <button onclick="talkToSomeone()">🫂 Talk to someone</button>
        `;

    } else {

        response.innerHTML = `
            <h2>😶 That's okay.</h2>
            <p>You don't always need a perfect word for how you feel.</p>

            <button onclick="calmDown()">🌿 Take a moment</button>
            <button onclick="writeThoughts()">📝 Try writing something</button>
        `;
    }
}


function calmDown() {

    let response = document.getElementById("response");

    response.innerHTML = `
        <h2>🌿 Let's take a tiny pause.</h2>

        <p>Put your feet somewhere comfortable.</p>
        <p>Look around you.</p>
        <p>Take one slow breath.</p>

        <p><b>You don't have to fix everything right now.</b></p>

        <button onclick="showFeeling('anxious')">
            ← Go back
        </button>
    `;
}


function writeThoughts() {

    let response = document.getElementById("response");

    response.innerHTML = `
        <h2>📝 Let's get it out of your head.</h2>

        <p>Write whatever is on your mind.</p>

        <textarea id="thoughtBox"
        placeholder="You can write anything here..."
        rows="6"></textarea>

        <br><br>

        <button onclick="saveThought()">Save this thought</button>
    `;
}


function saveThought() {

    let thought = document.getElementById("thoughtBox").value;

    if (thought.trim() === "") {
        alert("Write something first 🌱");
        return;
    }

    localStorage.setItem("savedThought", thought);

    document.getElementById("response").innerHTML = `
        <h2>🌱 You got it out.</h2>
        <p>You don't have to solve it right now.</p>
        <p>Your thought has been saved on this device.</p>
    `;
}


function talkToSomeone() {

    document.getElementById("response").innerHTML = `
        <h2>🫂 You don't have to handle everything alone.</h2>

        <p>
        Is there someone you trust enough to talk to?
        A friend, parent, sibling, teacher, counsellor or another trusted adult?
        </p>

        <p><b>You don't need the perfect words.</b></p>

        <p>
        You can simply start with:
        <br><br>
        "I've been having a difficult time lately and I'd like to talk."
        </p>
    `;
}


function gentleActivity() {

    document.getElementById("response").innerHTML = `
        <h2>🌱 Pick something tiny.</h2>

        <p>🎧 Listen to one song.</p>
        <p>🌳 Step outside for a few minutes.</p>
        <p>🎨 Draw something random.</p>
        <p>📖 Read a few pages.</p>
        <p>🥤 Get yourself some water.</p>

        <p><b>It doesn't have to be productive. Just gentle.</b></p>
    `;
}


function tinyTask() {

    document.getElementById("response").innerHTML = `
        <h2>✨ ONE tiny thing.</h2>

        <p>Choose the smallest useful thing you can do right now.</p>

        <p>📚 Open your book.</p>
        <p>📝 Write one sentence.</p>
        <p>🎒 Put one thing away.</p>
        <p>💧 Drink some water.</p>

        <p><b>That's enough for now.</b></p>
    `;
}


function saveWin() {

    let win = prompt("What made you happy today? ☀️");

    if (win) {
        localStorage.setItem("littleWin", win);

        document.getElementById("response").innerHTML = `
            <h2>🌟 Little win saved!</h2>

            <p>"${win}"</p>

            <p>
            Future-you might be really glad you wrote this down.
            </p>
        `;
    }
}
function addWin() {

    let input = document.getElementById("winInput");
    let win = input.value.trim();

    if (win === "") {
        alert("Write something first 🌱");
        return;
    }

    let wins = JSON.parse(localStorage.getItem("wins")) || [];

    wins.push(win);

    localStorage.setItem("wins", JSON.stringify(wins));

    input.value = "";

    displayWins();
}


function displayWins() {

    let winList = document.getElementById("winList");

    if (!winList) {
        return;
    }

    let wins = JSON.parse(localStorage.getItem("wins")) || [];

    winList.innerHTML = "";

    wins.forEach(function(win) {

        let item = document.createElement("div");

        item.innerHTML = `
            <div class="win-card">
                🌟 ${win}
            </div>
        `;

        winList.appendChild(item);

    });
}


displayWins();