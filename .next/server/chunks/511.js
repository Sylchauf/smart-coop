exports.id = 511;
exports.ids = [511];
exports.modules = {

/***/ 2557:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const winston = __webpack_require__(944);

__webpack_require__(2510);

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: {
    service: "user-service"
  },
  transports: []
});

if (false) {} else {
  logger.add(new winston.transports.DailyRotateFile({
    filename: "%DATE%.log",
    datePattern: "YYYY-MM-DD-HH",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d"
  }));
}

module.exports = logger;

/***/ }),

/***/ 3801:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"locale":"fr","skipGpio":{"dht22":true,"sensoren":true,"bme280":true,"cputemp":true,"ir":true},"gpioPorts":{"in":{"dht22":14,"oben":5,"unten":6,"bme280":"0x76"},"out":{"hoch":23,"runter":24,"ir":25}},"intervals":{"dht22":30,"dht22OnError":300,"cpu":30,"sensoren":1,"bme280":60},"door":{"module":"GCERelay","options":{"upPin":1,"downPin":2,"activateWhen":true},"correctionSec":2,"automation":{"openTimes":["sunrise+30"],"closeTimes":["sunset+25"]}},"light":{"module":"GCERelay","options":{"pin":5,"activateWhen":true}},"camera":[{"module":"UsbWebcam","options":{"device":"/dev/video0","width":1024,"height":768},"intervalSec":20}],"location":{"lat":45.288331,"lon":1.589881},"heating":{"enabled":true,"heatBelowC":5,"minimumHeatingMins":30,"timeFrame":{"from":"sunrise+0","to":"dusk-60"}},"shelly":{"url":"xxx","intervalSec":30}}');

/***/ })

};
;