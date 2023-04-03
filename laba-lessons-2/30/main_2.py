#2. Використовуючи API для погоди https://open-meteo.com/en/docs, написати програму, яка буде приймати від
#користувача назву міста і виводити поточні показники погоди в консоль.

import requests
from pprint import pprint

city = input(str("Введіть місто для відображення погоди: "))
select_city_url = 'https://geocoding-api.open-meteo.com/v1/'
weather_url = 'https://api.open-meteo.com/v1/forecast?'
res = requests.get(f'{select_city_url}search?name={city}')
geo_data = res.json()
if 'results' in geo_data:
    latitude = geo_data.get('results')[0].get('latitude')
    longitude = geo_data.get('results')[0].get('longitude')
    res1 = requests.get(f'{weather_url}latitude={latitude}&longitude={longitude}&hourly=temperature_2m&current_weather=true')
    data = res1.json()
    tem_and_time = data.get('current_weather')
    temperature_now = tem_and_time.get('temperature')
    print(temperature_now, "°C")
else:
    print('Такого міста не існує')