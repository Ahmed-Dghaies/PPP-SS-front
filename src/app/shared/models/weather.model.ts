export class Weather {

    public coord: {
        lon: number;
        lat: number;
    };
    public weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ];
    public base: string;
    public main: {
        temp: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
    };
    public visibility: number;
    public wind: {
        speed: number;
        deg: number;
    };
    public clouds: {
        all: number;
    };
    public dt: number;
    public sys: {
        type: number;
        id: number;
        message: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    public id: number;
    public name: string;
    public cod: number;
}
