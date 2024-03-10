let fullName = prompt("Lütfen adınızı giriniz: ");   //tanımlarken yazılışlara dikkat et
document.getElementById('myName').innerHTML = fullName;

function tarihSaat() {
  var date = new Date().toLocaleString('tr-TR');
  document.getElementById("myClock").innerHTML = date;
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000); 
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }