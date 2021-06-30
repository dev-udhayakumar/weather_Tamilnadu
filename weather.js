function places(){
    var input = document.getElementById("place").value
    var areas = [
    ['Alandur','Ambattur','Egmore','Guindy','Mambalam','Purasavakkam','Perambur','Tondiarpet'],
    ['Annur','Anamalai','Mettupalayam','Irugur','Pollachi','Peelamedu','Karumattampatti','Singanallur','Somanur','Sulur'],
    ['Erode','Perundurai','Chennimalai','Siruvaliur','Kavundapadi','Sittodu','Kunnattur','Gobichettipalyam','Attani','Kurumandur','Bhavani','Andiyur','Nambiyur','Punjai Puliyampatti'],
    ['Selam','Omalur','Yercaud','Mallur'],
    ['Tiruppur','Perumanallur','Avanashi','Mangalam','Sevur','Kurumandur','Uttukkuli','Dharapuram','Kangayam','Padiyur','Vellakkovil','Muttur','Udumalaippettai','Madattukkulam','Gudimangalam'],
    ['Ooty','Coonoor','Kotagiri','Wellington Town','Aravankadu']
    ]
    document.getElementById('area').remove();
    var select = document.createElement("select");
    select.setAttribute('class','form');
    select.setAttribute('style','width: 300px;height: 45px;margin-top: 20px;background-color: rgb(255, 255, 255);border-color: rgb(228, 228, 228);font-weight: bolder;font-size: 16px;transition-duration: 0.4s;border-radius: 6px;');
    select.setAttribute('id','area');
    document.getElementById('set').appendChild(select);
    var option1 = document.createElement("option");
        option1.setAttribute('id',"opt01")
        option1.setAttribute("selected","");
        document.getElementById("area").appendChild(option1);
        document.getElementById("opt01").innerHTML = "Select Area";
    for (i=0;i < areas[input].length; i++){
        var option = document.createElement("option");
        option.setAttribute('id',"opt"+i)
        option.setAttribute('value',areas[input][i]);
        document.getElementById("area").appendChild(option);
        document.getElementById("opt"+i).innerHTML = areas[input][i];   
    }
}
function weather(){
    var place =  document.getElementById("area").value
    console.log(place)
    link='https://api.weatherapi.com/v1/current.json?key=7193a037355848eca6921203212806&q='+place
    async function result(){
        var pr = await fetch(link)
        var results = await pr.json()
        var city =  results.location.name;
        var region = results.location.region
        var temp_f = results.current.temp_f
        var temp_c = results.current.temp_c
        var condition = results.current.condition.text
        var humidity = results.current.humidity
        var wind_kph = results.current.wind_kph
        var last_updated = results.current.last_updated
        document.getElementById("name").innerHTML = city +","+region;
        document.getElementById("1").innerHTML = "Temperature :   "+temp_c+"°C  |   " + temp_f + "°F " ;
        document.getElementById("2").innerHTML = "Condition: "+condition;
        document.getElementById("3").innerHTML = "Humidity : "+humidity +"%     |     Wind : " + wind_kph +"kph" ;
        document.getElementById("uptime").innerHTML = "last updated on "+last_updated;   
    }
    result()
}