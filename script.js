
function ironTier () {
    var iron = document.getElementById("ironHiddenText");
    if (iron.style.display === "block") {
        iron.style.display = "none";
    } else {
        iron.style.display = "block";
    }
}

function goldTier () {
    var gold = document.getElementById("goldHiddenText");
    if (gold.style.display === "block") {
        gold.style.display = "none";
    } else {
        gold.style.display = "block";
    }
}

function diamondTier() {
    var diamond = document.getElementById("diamondHiddenText");
    if (diamond.style.display === "block") {
        diamond.style.display = "none";
    } else {
        diamond.style.display = "block";
    }
}

/*
Updating the form and tables
 */
function updateTotal() {
    var serviceCost = 0;
    var discountRate = 0;

    function checkServices () {
        if (document.getElementById('service01').checked) {
            serviceCost += 75;
        }
        if (document.getElementById('service02').checked) {
            serviceCost += 35;
        }
        if (document.getElementById('service03').checked) {
            serviceCost += 100;
        }
        if (document.getElementById('service04').checked) {
            serviceCost += 150;
        }
        if (document.getElementById('service05').checked) {
            serviceCost += 55;
        }
        if (document.getElementById('service06').checked) {
            serviceCost += 25;
        }
        if (document.getElementById('service07').checked) {
            serviceCost += 69;
        }
        if (document.getElementById('service08').checked) {
            serviceCost += 45;
        }
        if (document.getElementById('service09').checked) {
            serviceCost += 160;
        }
        if (document.getElementById('service10').checked) {
            serviceCost += 98;
        }
        if (document.getElementById('service11').checked) {
            serviceCost += 300;
        }
    }

    function checkRepairs () {
        if (document.getElementById('repairs01').checked) {
            serviceCost += 800;
        }
        if (document.getElementById('repairs02').checked) {
            serviceCost += 600;
        }
        if (document.getElementById('repairs03').checked) {
            serviceCost += 500;
        }
        if (document.getElementById('repairs04').checked) {
            serviceCost += 300;
        }
        if (document.getElementById('repairs05').checked) {
            serviceCost += 367;
        }
    }
    function checkdiscount () {
        if(document.getElementById('warrantyTier').value = 'tierIron') {
            discountRate -= 10;
        }
        if (document.getElementById('warrantyTier').value = 'tierGold') {
            discountRate -= 20;
        }
        if (document.getElementById('warrantyTier').value = 'tierDiamond') {
            discountRate -= 30;
        }
    }
    checkRepairs();
    checkServices();
    checkdiscount();

    var totalPrice = serviceCost + discountRate;
    document.getElementById('serviceCost').innerHTML = "$ " + serviceCost;
    document.getElementById('discountRate').innerHTML = "$ " + discountRate;
    document.getElementById('totalCost').innerHTML = "$ " + totalPrice;

}