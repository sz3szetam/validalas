document.getElementById("Sending").addEventListener("click",(event) =>
{
    event.preventDefault();
    
    let nameInput = document.getElementById("name").value;
    let regex = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ\s-]+$/;

    if (!regex.test(nameInput)) {
        alert("A név csak betűket, kötőjelet és szóközt tartalmazhat!");
        return;
    }

    let nameParts = nameInput.split(" ");
    let firstName = nameParts[0];
    let lastName = nameParts[nameParts.length - 1];

    if (firstName.length < 3 || lastName.length < 2) {
        alert("A vezetéknév legalább 2, a keresztnév legalább 3 karakter hosszú kell legyen!");
        return;
    }

    alert("A név megfelelő!");
})