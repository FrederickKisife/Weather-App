class Forcast{
    constructor(){
        this.key = "Xp9sUrWsROTILnrT2dPJb2FsJFyhTg6b";
        this.weatherURI = "http://dataservice.accuweather.com/currentconditions/v1/";
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
    
        return { cityDets, weather }
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
    
        const response = await fetch(this.cityURI+ query);
        const data = await response.json();
    
        return data[0]
    }
}


const key = "Xp9sUrWsROTILnrT2dPJb2FsJFyhTg6b";

// get weather information
const getWeather = async(id)=>{

const base = "http://dataservice.accuweather.com/currentconditions/v1/";
const query = `${id}?apikey=${key}`;

const response =  await fetch(base + query);
const data = await response.json();
return data[0];

}

// get city information
const getCity = async (city)=>{
   
};


