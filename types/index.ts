export type optionType = {
    name: string;
    country: string;
    lat: number;
    lon: number;
};
export type forecastType = {
    description: string | undefined;
    name:string;
    country:string;
    sunrise:number;
    sunset:number;
    icon:string;
    list:[{
        dt:number;
        main:{
            feels_like:number;
            humidity:number;
            pressure:number;
            temp:number;
            temp_max:number;
            temp_min:number;
        };
        weather:[{
            description:string;
            icon:string;
            id:number;
            main:string;
        }];
        wind:{
            speed:number;
            gust:number;
            deg:number;
        };
        clouds:{
            all:number;
        };
        pop:number;
        visibility:number;
    }]
};

