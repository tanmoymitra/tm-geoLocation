/**
 * Tm-GeoLocation
 * https://github.com/tanmoymitra/tm-geoLocation
 *
 * Copyright (c) 2017 Tanmoy Mitra
 * Licensed under the MIT license.
 */
 const getIP = require('external-ip')();
 const where = require('node-where');

 exports.geolocation = function(req, res, next){
   getIP(function (err, ip) {
       if (err) { throw err; }
       where.is(ip, function(err, result) {
           if (err) { throw err; }
           req.PublicIP = ip;
           req.Country = result.attributes.Country;
           req.CountryCode = result.attributes.countryCode;
           req.State = result.attributes.region;
           req.Latitude = result.attributes.lat;
           req.Longitude = result.attributes.lng;
           req.City = result.attributes.city;
           req.ZipCode = result.attributes.postalCode;
           next();
       });
   });
 };
