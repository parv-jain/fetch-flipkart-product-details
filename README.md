# fetch-flipkart-product-details
Fetches product title, current_price and mrp from flipkart

# Setting up:
* change directory to project folder
* use npm install command
* use node server command

# flipkart

__API Call:__
```GET/```
```http://localhost:3000/flipkart?q=[FlipkartProductUrl]```

__example request:__
```http://localhost:3000/flipkart?q=https://www.flipkart.com/safari-mosaic-cabin-luggage-22-inch/p/itmewdb3pfhbhz8f?pid=STCEWDB38C5FRKMN&srno=b_1_8&otracker=hp_omu_Fashion%20Accessories_2_Min.%2050%25%20off_OBU4MJVVSD_1&lid=LSTSTCEWDB38C5FRKMNAXIQBA&fm=neo/merchandising&iid=d3268d29-3368-4eff-b23f-9c2589c86081.STCEWDB38C5FRKMN.SEARCH```

```json
response:
{
    "title": "Safari Mosaic Cabin Luggage - 22 inch  (Red)",
    "current_price": "2,509",
    "mrp": "7,549"
}
