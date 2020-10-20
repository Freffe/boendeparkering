const axios = require('axios');

/* axios.get(`https://openparking.stockholm.se/LTF-Tolken/v1/servicedagar/street/Odengatan?outputFormat=json&apiKey=${APIKEY}`)
.then(resp => { return resp.toJSON(); } )
.catch(err => console.log(err)); */
const APIKEY = process.env.OPENPARKINGAPIKEY;
//process.env.OPENPARKINGAPIKEY;

// If the API change their data structure, this will fail and returning map data to client wont work.
const sliceGeometry = mapData => {
    return mapData.features.map(street => { return {
            streetId: street.id, 
            geometry: street.geometry, 
            properties: street.properties 
        }
    });
}


module.exports = app => {
    // Req.body.data is the adress sent from the client side, currently residing in mapdata.sagas.
    // Given the clients adress, fetch all avaiable map data for that adress from openparking API.
    // Return relevant data to the client for further process (Show on maps, alert if unavaiable for free parking).
    app.post("/fetchAdressData", async (req, res) => {
        const data = req.body.data;
        console.log("Requested adress is: ", data);
        try {
            const mapData = await axios.get(`https://openparking.stockholm.se/LTF-Tolken/v1/servicedagar/street/${data}?outputFormat=json&apiKey=${APIKEY}`)
            .then(resp => sliceGeometry(resp.data))
            .catch(error => { console.log("Error fetching mapData from API: ", error); res.status(500).send(error); } );
            res.send(mapData);
        } catch (error) {
            res.status(500).send(error);
        }
       
    });
}