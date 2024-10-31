let resourceCount = 0;
let productionMultiplier = 1;
let prodCost = 10;
let autoCost = 100;
let galacticPoints = 0;
let automatedHarvesters = 0;

// Harvesting function
document.getElementById('harvestBtn').addEventListener('click', () => {
    resourceCount += productionMultiplier;
    updateResourceDisplay();
});

// Production upgrade function
document.getElementById('prodUpgradeBtn').addEventListener('click', () => {
    if (resourceCount >= prodCost) {
        resourceCount -= prodCost;
        productionMultiplier++;
        prodCost = Math.floor(prodCost * 1.5);
        updateResourceDisplay();
        updateUpgradeCosts();
    }
});

// Automated harvester function
document.getElementById('autoUpgradeBtn').addEventListener('click', () => {
    if (resourceCount >= autoCost) {
        resourceCount -= autoCost;
        automatedHarvesters++;
        autoCost = Math.floor(autoCost * 2);
        updateResourceDisplay();
        updateUpgradeCosts();
    }
});

// Prestige function
document.getElementById('prestigeBtn').addEventListener('click', () => {
    if (resourceCount > 0) {
        galacticPoints += Math.floor(resourceCount / 100);
        resourceCount = 0;
        productionMultiplier = 1;
        prodCost = 10;
        autoCost = 100;
        automatedHarvesters = 0;
        updateResourceDisplay();
        updateUpgradeCosts();
        updateGalacticPoints();
    }
});

// Function to update resource display
function updateResourceDisplay() {
    document.getElementById('resourceCount').innerText = resourceCount;
}

// Function to update upgrade costs
function updateUpgradeCosts() {
    document.getElementById('prodCost').innerText = prodCost;
    document.getElementById('autoCost').innerText = autoCost;
}

// Function to update galactic points display
function updateGalacticPoints() {
    document.getElementById('galacticPoints').innerText = galacticPoints;
}

// Automated resource generation
setInterval(() => {
    resourceCount += automatedHarvesters;
    updateResourceDisplay();
}, 1000);
