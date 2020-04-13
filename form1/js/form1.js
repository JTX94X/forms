/* Muti step form */
$(function(){
    $("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        labels: {
            next: "Next",
            previous: "Back",
            finish: "Create"
        }
    });
    $('.wizard > .steps li a').click(function(){
        $(this).parent().addClass('checked');
        $(this).parent().prevAll().addClass('checked');
        $(this).parent().nextAll().removeClass('checked');
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
        $("#wizard").steps('next');
    });
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    });
});

/* Searchable dropdown */
$(function () {
  $('#underlyings').each(function () {
    $(this).select2({
      theme: 'bootstrap4',
      width: 'style',
      placeholder: $(this).attr('placeholder'),
      allowClear: Boolean($(this).data('allow-clear')),
    });
  });
});

/* Review section */
const optionNotional = document.getElementById('optionNotional');
const numberOfOptions = document.getElementById('numberOfOptions');
const reviewNotionalPerOption = document.getElementById('reviewNotionalPerOption');
const reviewNumberofOptions = document.getElementById('reviewNumberofOptions');
const reviewNotionalTotal = document.getElementById('reviewNotionalTotal');

optionNotional.onchange = function() {
    reviewNotionalPerOption.innerHTML = optionNotional.value;
    reviewNotionalTotal.innerHTML = calcNotionalTotal();
};

numberOfOptions.onchange = function() {
    reviewNumberofOptions.innerHTML = numberOfOptions.value;
    reviewNotionalTotal.innerHTML = calcNotionalTotal();
};

function calcNotionalTotal() {
    if (optionNotional.value && numberOfOptions.value) {
        let notionalTotal = parseFloat(optionNotional.value) * parseFloat(numberOfOptions.value);
        return notionalTotal.toString()
    }
}