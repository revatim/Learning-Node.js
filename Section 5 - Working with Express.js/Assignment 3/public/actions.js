$(document).ready(function(){
    function onLoad() {
        $.ajax( {
    //        url: "http://localhost:3000/"
            url: '/ajax/update',
            success: function(data){
                document.querySelector('#table').insertRow(-1).insertCell(-1).innerHTML = data.newEntry;
            }
        })
    }

    setInterval(onLoad, 5000);

});
