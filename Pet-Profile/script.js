document.addEventListener("DOMContentLoaded", function () {

const animalSelect = document.getElementById("pet");
const breedselect = document.getElementById("breed");
const petForm = document.getElementById("petForm")

const breedOptions = {
    dog:["Poodle Puppy", "Dutch", "Beagle", "Australian Terrier"],
    cat:["Persian", "Sleek Cat"],
    bird:["Conure"]
};

const validPages = {
    dog:{
        "Poodle Puppy": "poodlePuppy.html",
        "Dutch": "dutch.html",
        "Beagle": "beagle.html"
    },
    cat:{
        "Persian": "persian.html",
        "Sleek Cat": "sleekCat.html"
    },
    bird:{
        "Conure": "conure.html",
    }
};

//Update breeds option when an animal of users choice is selected

    animalSelect.addEventListener("change", function() {
    const selectedAnimal = this.value;
    breedselect.innerHTML = '<option value="">-- Select Breed --</option>';
    if (breedOptions[selectedAnimal]) {
        breedOptions[selectedAnimal].forEach(function(breed) {
            const option = document.createElement("option")
            option.value = breed;
            option.textContent = breed;
            breedselect.appendChild(option);
        });
    }
});

    petForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const animal = animalSelect.value;
    const breed = breedselect.value

    if(validPages[animal] && validPages[animal][breed]) {
        const animalDetails = validPages[animal][breed];
        window.location.href = "animalDetails/" + animalDetails;
    }else{
        alert("No profile page found for that selection");
    }

})

})