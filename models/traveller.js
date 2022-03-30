const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  result = this.journeys.map((journey) => {
    return journey.startLocation;
  });return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  result = this.journeys.map((journey) => {
    return journey.endLocation;
  });return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  result = this.journeys.filter((journey) => {
    return journey.transport === transport;
  }); return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  result = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  }); return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
