export default function Age(age, agePast, ageFuture, pBday, fBday, ageDelta) {
  this.age = age;
  this.agePast = agePast;
  this.ageFuture = ageFuture;
  this.pBday = pBday;
  this.fBday = fBday;
  this.ageDelta = ageDelta;
}

Age.prototype.mercury = function() {
  let numb = ((1/.24) * this.age).toFixed(2)
  let ageAlt = parseFloat(numb);
  return ageAlt;
}

Age.prototype.venus = function() {
  let numb = ((1/.62) * this.age).toFixed(2)
  let ageAlt = parseFloat(numb);
  return ageAlt;
}

Age.prototype.mars = function() {
  let numb = ((1/1.88) * this.age).toFixed(2)
  let ageAlt = parseFloat(numb);
  return ageAlt;
}

Age.prototype.jupiter = function() {
  let numb = ((1/11.86) * this.age).toFixed(2)
  let ageAlt = parseFloat(numb);
  return ageAlt;
}
