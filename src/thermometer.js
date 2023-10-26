/* eslint-disable no-useless-constructor */
/* eslint-disable getter-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/*
 * thermometer.js
 * Language: javascript
 * Test: tests/thermometer.test.js
 * Path: src/thermometer.js
 *
 * Create a Thermometer class
 * Using getters and setters - https://bit.ly/3DLVSuF (Javascript.info)
 * getters - access properties https://mzl.la/3p9oLwR
 * setters - change properties https://mzl.la/3vjPiZl
 * private class field - https://mzl.la/3vhtrC5
 *
 */

/**
 * @class Thermometer
 *
 * An instance of this class is a temperature that
 * is represented in celsius units (store it in a private class field)
 * The other unit values are calculated from the
 * stored celsius temperature
 *
 *
 */
class Thermometer {
  // write your code here for the private class field called celsius

  /**
   * @constructor
   * @param {number} celsius
   */
  constructor(celsius) {
    this.celsius = celsius;
    this.kelvin = this.celsius + 273.15;
    this.fahrenheit = Math.round((this.celsius * 1.8 + 32) * 10000) / 10000;
  }

  /*  -------- celsius -------------------*/
  /**
   * @getter celsius
   * @returns {number}
   * @memberof Thermometer
   * @description - returns the celsius temperature
   * */
  get celsius() {
    return this._celsius;
  }

  /**
   * @setter celsius
   * @param {number} celsius
   * @memberof Thermometer
   * @description - sets the celsius temperature
   */
  set celsius(tempCelsius) {
    this._celsius = tempCelsius;
    this._kelvin = this._celsius + 273.15;
    this._fahrenheit = Math.round((this._celsius * 1.8 + 32) * 10000) / 10000;
  }

  /*  -------- kelvin -------------------*/
  /**
   * @getter kelvin
   * @returns {number}
   * @memberof Thermometer
   * @description - returns the kelvin temperature
   */
  get kelvin() {
    return this._kelvin;
  }

  /**
   * @setter kelvin
   * @param {number} kelvin
   * @memberof Thermometer
   * @description - sets the kelvin temperature
   */
  set kelvin(tempKelvin) {
    this._kelvin = tempKelvin;
    this._celsius = this._kelvin - 273.15;
    this._fahrenheit = Math.round((this._celsius * 1.8 + 32) * 10000) / 10000;
  }

  /*  -------- fahrenheit -------------------*/
  /**
   * @getter fahrenheit
   * @returns {number}
   * @memberof Thermometer
   * @description - returns the fahrenheit temperature
   */
  get fahrenheit() {
    return this._fahrenheit;
  }

  /**
   * @setter fahrenheit
   * @param {number} fahrenheit
   * @memberof Thermometer
   * @description - sets the fahrenheit temperature
   */
  set fahrenheit(tempFahrenheit) {
    this._fahrenheit = tempFahrenheit;
    this._celsius = Math.round((((this._fahrenheit - 32) * 5) / 9) * 10000) / 10000;
    this._kelvin = this._celsius + 273.15;
  }

  /**
   * @method toString
   * @param {string} unit - 'C', 'K', 'F'
   * @returns {string} - the temperature in the specified unit
   * @memberof Thermometer
   * @description - returns a string with the temperature in the specified unit
   *
   * Example: Assuming an instance of this class is 0°C
   * toString('C') returns '0°C'
   * toString('K') returns '273.15K' - notice no ° symbol
   * toString('F') returns '32°C'
   * Any other value, or no value, for unit returns the celsius value + '°C'
   *
   */
  toString(unit) {
    let str;
    switch (unit) {
      case 'C':
        str = `${this.celsius}°C`;
        break;
      case 'K':
        str = `${this.kelvin}K`;
        break;
      case 'F':
        str = `${this.fahrenheit}°F`;
        break;
      default:
        str = `${this.celsius}°C`;
        break;
    }
    return str;
  }
}

module.exports = {
  Thermometer,
};
