//const vattrib = "?rel=0&amp;autoplay=1&mute=1&vq=small&showinfo=0&controls=1&fs=0&loop=1"
const vattrib = "&rel=0&autoplay=1&mute=1&vq=small&showinfo=0&controls=1&fs=0&modestbranding=1"

$( document ).ready(function() {
    loadSlot1()
    loadSlot2()
    loadSlot3()
    loadSlot4()
    loadSlot5()
    loadSlot6()
    loadSlot7()
    loadSlot8()
    loadSlot9()
})

function loadSlot1() {
    let embed1 = $('#tb1').val().replace('https://youtu.be/', 'https://www.youtube.com/embed/')
    var vid_id = $('#tb1').val().replace('https://youtu.be/', '')
    $('#iframe1').attr('src', embed1+'?playlist='+vid_id+'&loop=1'+vattrib).fadeIn('fast')

    console.log(iframe1)
}

function loadSlot2() {
    let embed2 = $('#tb2').val().replace('https://youtu.be/', 'https://www.youtube.com/embed/')
    var vid_id = $('#tb2').val().replace('https://youtu.be/', '')
    $('#iframe2').attr('src', embed2+'?playlist='+vid_id+'&loop=1'+vattrib).fadeIn('fast')
}

function loadSlot3() {
    let embed3 = $('#tb3').val().replace('https://youtu.be/', 'https://www.youtube.com/embed/')
    var vid_id = $('#tb3').val().replace('https://youtu.be/', '')
    $('#iframe3').attr('src', embed3+'?playlist='+vid_id+'&loop=1'+vattrib).fadeIn('fast')
}

function loadSlot4() {
    let embed4 = $('#tb4').val().replace('https://youtu.be/', 'https://www.youtube.com/embed/')
    var vid_id = $('#tb4').val().replace('https://youtu.be/', '')
    $('#iframe4').attr('src', embed4+'?playlist='+vid_id+'&loop=1'+vattrib).fadeIn('fast')
}

function loadSlot5() {
    let embed5 = $('#tb5').val().replace('https://youtu.be/', 'https://www.youtube.com/embed/')
    var vid_id = $('#tb5').val().replace('https://youtu.be/', '')
    $('#iframe5').attr('src', embed5+'?playlist='+vid_id+'&loop=1'+vattrib).fadeIn('fast')
}

function loadSlot6() {
    let embed6 = $('#tb6').val().replace('https://youtu.be/', 'https://www.youtube.com/embed/')
    var vid_id = $('#tb6').val().replace('https://youtu.be/', '')
    $('#iframe6').attr('src', embed6+'?playlist='+vid_id+'&loop=1'+vattrib).fadeIn('fast')
}

function loadSlot7() {
    let embed7 = $('#tb7').val().replace('https://youtu.be/', 'https://www.youtube.com/embed/')
    var vid_id = $('#tb7').val().replace('https://youtu.be/', '')
    $('#iframe7').attr('src', embed7+'?playlist='+vid_id+'&loop=1'+vattrib).fadeIn('fast')
}

function loadSlot8() {
    let embed8 = $('#tb8').val().replace('https://youtu.be/', 'https://www.youtube.com/embed/')
    var vid_id = $('#tb8').val().replace('https://youtu.be/', '')
    $('#iframe8').attr('src', embed8+'?playlist='+vid_id+'&loop=1'+vattrib).fadeIn('fast')
}

function loadSlot9() {
    let embed9 = $('#tb9').val().replace('https://youtu.be/', 'https://www.youtube.com/embed/')
    var vid_id = $('#tb9').val().replace('https://youtu.be/', '')
    $('#iframe9').attr('src', embed9+'?playlist='+vid_id+'&loop=1'+vattrib).fadeIn('fast')
}

