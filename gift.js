const message = document.getElementById("greeting");
const prevBtn = document.getElementById("prevBtn");

const buttons = document.getElementById("buttons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const journeyMap = document.getElementById("journeyMap");


const messages = [
    "Hi, My Love! ❤️",

    "...aaamm...😳",

    "... I have something to tell you...",

    "I know you have a tight schedule and you are busy with your trip, but do you have 5 minutes for me please? I promise it won't take too much time... ❤️",

    "...a... see i am really sorryy... we will work and resolve thing between us... and i am genuinely sorry for making u feel bad... but it was unintentional and i will be more careful next time... because i love u ❤️❤️❤️ and i don't want to hurt u... ❤️, and i am missing u so much that's why ... but u have to understand too that thing i am feeling and the way i am handling situations is not same as u because u learned so many things and i didn't but i am learning... so don't get mad at me too often and too early plsss... it is not hurting me but it still is making that tiny creaks that we both don't want into our relationship... and i will also try to be more understanding and patient with u too... specially with my reactions but i need your support too❤️❤️❤️ and... i will pray 🙏📿 to god too that i will be a person that u will be proud of and i will try to be a better person for u and for us... ❤️❤️❤️",

    "...because...",

    "...I love you so much, and I want to be with you for the rest of my life. ❤️ I know you want to be with me too. 🫂🫂🫂",

    "...and I want to make you feel special and loved, and I will always try to do that. ❤️❤️❤️",

    "I love you so much, 💋💋💋 My Woo Boo. ❤️❤️❤️",

    "Wait... I still have something to tell you... actually, something to show you... 😳",

    "...Can I, my love? 😳"
];


const delays = [
    2000,
    2000,
    3000,
    7000,
    60000,
    2000,
    6000,
    3000,
    4000,
    3000,
    2000
];


let currentMessage = 0;
let messageTimer;


function showMessage() {

    clearTimeout(messageTimer);

    message.textContent = messages[currentMessage];
    message.style.display = "block";

    buttons.style.display = "none";
    journeyMap.style.display = "none";

    if (currentMessage > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }


    messageTimer = setTimeout(function () {

        if (currentMessage < messages.length - 1) {

            currentMessage++;
            showMessage();

        } else {

            buttons.style.display = "block";
        }

    }, delays[currentMessage]);
}


prevBtn.addEventListener("click", function () {

    clearTimeout(messageTimer);

    if (currentMessage > 0) {
        currentMessage--;
        showMessage();
    }
});


yesBtn.addEventListener("click", function () {

    clearTimeout(messageTimer);

    message.style.display = "none";
    buttons.style.display = "none";
    prevBtn.style.display = "none";

    journeyMap.style.display = "block";
});


noBtn.addEventListener("click", function () {

    noBtn.textContent = "Are you sure? 🥺";
    message.textContent = "Please give me just a little chance to show you... ❤️";
});

const memoryPoints = document.querySelectorAll(".memoryPoint");

const memoryPopup = document.getElementById("memoryPopup");
const memoryPhoto = document.getElementById("memoryPhoto");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");
const closePopup = document.getElementById("closePopup");

const memories = [
    {
        photo: "photo1.jpg",
        title: "Where it started ❤️",
        text: "I know i am not perfect..."
    },
    {
        photo: "photo2.jpg",
        title: "Remember this...?",
        text: "but i pray to god..."
    },
    {
        photo: "photo3.jpg",
        title: "A special moment",
        text: "to make me goood person for my wooo booo..."
    },
    {
        photo: "photo4.jpg",
        title: "One of my favourite photos.",
        text: "and this journey is proof that we'll be together..."
    },
    {
        photo: "photo5.jpg",
        title: "Where we are now ❤️",
        text: "no metter what cause... I Love U WOOOBOOO and u do tooo...❤️❤️❤️"
    }
];

memoryPoints.forEach(function (point, index) {
    point.addEventListener("click", function () {
        memoryPhoto.src = memories[index].photo;
        memoryTitle.textContent = memories[index].title;
        memoryText.textContent = memories[index].text;

        memoryPopup.style.display = "flex";
    });
});

closePopup.addEventListener("click", function () {
    memoryPopup.style.display = "none";
});

memoryPopup.addEventListener("click", function (event) {
    if (event.target === memoryPopup) {
        memoryPopup.style.display = "none";
    }
});


showMessage();