const features = [
    {
        title: "Dancing",
        description: "Dancing description",
        image: "https://gifdb.com/images/file/cute-thank-you-bee-di7mwrl9fwfr7qtv.gif"
    },
    {
        title: "Falling",
        description: "Failing description",
        image: "https://media.giphy.com/media/N8wR1WZobKXaE/giphy.gif",
    },
    {
        title: "Music",
        description: "Music description",
        image: "https://media.giphy.com/media/iLsDDqQYZJWpy/giphy.gif",
    }
]

let currentFeature = 0

const updateFeature = (index) => {
    document.getElementById('feature-title').innerText = features[index].title;
    document.getElementById('feature-image').src = features[index].image;
    document.getElementById('feature-description').innerText = features[index].description;
}

// init feature content
updateFeature(currentFeature);

// add button event listeners

document.getElementById('left').onclick = (e) => {
    currentFeature = currentFeature === 0 ? features.length - 1 : currentFeature - 1;
    updateFeature(currentFeature);
}

document.getElementById('right').onclick = (e) => {
    currentFeature = currentFeature === features.length - 1 ? 0 : currentFeature + 1;
    updateFeature(currentFeature);
}