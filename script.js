document.getElementById('options').addEventListener('change', function() {
    var selectedOption = this.value;

    if (selectedOption === 'option1') {
        document.body.style.backgroundImage = "url('bg 01.jpg')";
    } else if (selectedOption === 'option2') {
        document.body.style.backgroundImage = "url('bg 02.jpg')";
    } else if (selectedOption === 'option3') {
        document.body.style.backgroundImage = "url('bg 03.jpg')";
    } else {
        document.body.style.backgroundImage = "url('bg 00.jpg')";
    }
});
