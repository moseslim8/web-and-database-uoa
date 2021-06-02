module.exports = {
    getAll (pool, callback) {
        pool.getConnection((err,connection) => {
            if (err) {
                throw err;
            }
            var query = "SELECT restaurant.restaurantID, restaurantName, priceRating, city, thumbnail, ROUND(AVG(review.rating)) as averageRating "+
                        "FROM restaurant LEFT JOIN review ON review.restaurantID=restaurant.restaurantID "+
                        "GROUP BY restaurant.restaurantID ORDER BY restaurantID;"+
                        "SELECT * FROM cuisine ORDER BY restaurantID;"+ 
                        "SELECT restaurantID, userID, comments, rating FROM review ORDER BY restaurantID";
            connection.query(query, [], (err, rows, fields) => {
                connection.release();
                if(err){
                    throw err;
                }
                else{
                    callback(this.formatRestaurants(rows[0], rows[1], rows[2]));
                }
            });
        }); 
    },
    formatRestaurants(restaurants, cuisines, reviews){
        var newArr = [];
        var ci = 0;
        var revi = 0;
        restaurants.map(rest => {
            var current = rest;

            rest.cuisines = [];
            while(ci < cuisines.length && cuisines[ci].restaurantID == rest.restaurantID){
                rest.cuisines.push(cuisines[ci++].cuisine);
            }

            rest.reviews = [];
            while(revi < reviews.length && reviews[revi].restaurantID == rest.restaurantID){
                rest.reviews.push(reviews[revi++]);
            }

            rest.availTimes = this.getAvailTimes();
            newArr.push(current);
        });
        return newArr;
    },
    getAvailTimes(){
        return [
            {
                time: "7:00 pm",
                available: true
            },
            {
                time: "7:15 pm",
                available: true
            },
            {
                time: "7:30 pm",
                available: true
            },
            {
                time: "7:45 pm",
                available: true
            },
        ];
    }
};