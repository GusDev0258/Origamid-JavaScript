export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  get _presentDate() {
    return new Date();
  }

  get _futureDate() {
    return new Date(this.futureDate);
  }
  get _remainingDays() {
    return (
      (this._futureDate.getTime() - this._presentDate.getTime()) /
      (24 * 60 * 60 * 1000)
    ).toFixed();
  }
  get _remainingHours() {
    return (
      (this._futureDate.getTime() - this._presentDate.getTime()) /
      (60 * 60 * 1000)
    ).toFixed();
  }
  get _remainingMinutes() {
    return (
      (this._futureDate.getTime() - this._presentDate.getTime()) /
      (60 * 1000)
    ).toFixed();
  }
  get _remainingSeconds() {
    return (
      (this._futureDate.getTime() - this._presentDate.getTime()) /
      1000
    ).toFixed();
  }
  get _remainingTotalTime() {
    const days = +this._remainingDays;
    const hours = this._remainingHours % 24;
    const minutes = this._remainingMinutes % 60;
    const seconds = this._remainingSeconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}
