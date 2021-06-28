function weather(){
    link='https://api.weatherapi.com/v1/current.json?key=7193a037355848eca6921203212806&q=Avanashi'
    
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
    
        document.getElementById("name").innerHTML = city +","+region;
        document.getElementById("1").innerHTML = "Temperature: "+temp_f+"°F  | " + temp_c + "°C " ;
        document.getElementById("2").innerHTML = "Condition: "+condition;
        document.getElementById("3").innerHTML = "Humidity : "+humidity +"%  | Wind : " + wind_kph +"kph" ;
        console.log(results)
        
    }
    result()
}