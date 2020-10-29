const portfolioEntries = [
    {
        title: "CityScoop",
        imgURL: "./Assets/logo-black-accent.png",
        github: "CityScoop",
        desc: "A one-stop shop for all the information you need when moving to a new city."
    },
    {
        title: "Legends of Javascript",
        imgURL: "./Assets/legends-of-javascript-thumbnail.png",
        github: "legends-of-javascript",
        desc: "Want to test your javascript skills against the inevitable robot takeover?  Try this quiz game!"
    },
    {
        title: "Cryptoforge",
        imgURL: "./Assets/cryptoforge-thumbnail.png",
        github: "cryptoforge",
        desc: "It's a really metal-looking password generator, not a bitcoin miner.  Sorry to get your hopes up."
    },
    {
        title: "Command Center",
        imgURL: "./Assets/command-center-thumbnail.png",
        github: "command-center",
        desc: "A customizable homepage replacement site to give easy access to your favorite sites."
    },
    {
        title: "Pocket Butler",
        imgURL: "./Assets/pocket-butler-thumbnail.png",
        github: "pocket-butler",
        desc: "The classiest organizational app you'll ever use.  Pocket Butler was optimized for people with executive dysfunction (e.g. ADHD) to succeed where other apps fail."
    }
];

const portfolio = $(".entries-go-here");

// Populate portfolio
for (let i = 0; i < portfolioEntries.length; i++) {

    let entry = portfolioEntries[i];

    // Make new entry and attach to portfolio
    const newEntry = $("<div>").addClass("card portfolio-box");
    portfolio.append(newEntry);

    // Header section
    const cardHeader = $("<h2>").text(entry.title);
    cardHeader.addClass("card-header");
    newEntry.append(cardHeader);

    // Image link
    const imgLink = $("<a>").attr("href", `https://github.com/nvanbaak/${entry.github}`);

    const cardImg = $("<img>").addClass("card-img-top .img-thumbnail");
    cardImg.attr("src", entry.imgURL);
    cardImg.attr("alt", entry.title);

    imgLink.append(cardImg);
    newEntry.append(imgLink);

    // Description
    const description = $("<p>")

});