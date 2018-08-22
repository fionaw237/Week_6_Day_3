const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  result = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  result = this.journeys.map((journey) => {
    return journey.endLocation
  });
  return result;
};

Traveller.prototype.getModesOfTransport = function () {
  result = this.journeys.map((journey) => {
      return journey.transport
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  result = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  result = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  result = this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0);
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  modesOfTransports = this.getModesOfTransport()
  result = modesOfTransports.filter((transport, index, self) => {
    return self.indexOf(transport) === index;
  // this works because self.indexOf teturns the first index in self (modesOfTransports) at which transport occurs
  });
  return result;
};



module.exports = Traveller;
