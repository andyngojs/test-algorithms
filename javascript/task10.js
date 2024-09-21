/**
 * Read amount money by text
 * Eg: 1.234.567 ==> một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy đồng
 *
 * 1997 => 1.997
 */

const numbersInWords = {
  0: "không",
  1: "một",
  2: "hai",
  3: "ba",
  4: "bốn",
  5: "năm",
  6: "sáu",
  7: "bảy",
  8: "tám",
  9: "chín",
  10: "mười",
};
const units = ["tỉ", "triệu", "nghìn", "trăm"];

/**
 * TODO: 
 *  - Handle tram nghin, ti, trieu
 *  - optimize code
 */

function readNumberDigit(value) {
  const numberTypeCast = Number(value);

    if (numberTypeCast >= 1000000) {
      if (numberTypeCast % 1000000 === 0) {
        return numbersInWords[numberTypeCast / 1000000] + " " + units[1]
      } else {
        let restBehind = numberTypeCast % 1000000
        // if (restBehind.)

        return numbersInWords[Math.floor(numberTypeCast / 1000000)] + " " + units[1] + " " + readNumberDigit(numberTypeCast % 1000000)
      }
    }

  if (numberTypeCast % 1000 !== 0) {
    let restNumber = numberTypeCast % 1000;
    let restBehind = readThreeDigits(numberTypeCast % 1000);

    if (restNumber < 100) {
      if (restNumber < 10) {
        restBehind = "không trăm linh" + " " + readThreeDigits(restNumber);
      } else {
        restBehind = "không trăm" + " " + readThreeDigits(restNumber);
      }
    }

    return (
      readThreeDigits(Math.floor(numberTypeCast / 1000)) +
      " " +
      units[2] +
      " " +
      restBehind
    );
  } else {
    return numbersInWords[Math.floor(numberTypeCast / 1000)] + " " + units[2];
  }
}
// console.log(readNumberDigit(1997));
console.log(readNumberDigit(1000900));
console.log(readNumberDigit(2068989));
// console.log(readNumberDigit(90004));
// console.log(readNumberDigit(900704));
// console.log(readNumberDigit(989004));

function readThreeDigits(value) {
  const numberTypeCast = Number(value);

  if (numberTypeCast < 100) {
    return readTwoDigit(numberTypeCast);
  }

  if (numberTypeCast >= 100) {
    if (numberTypeCast % 100 !== 0) {
      let integerNumber = Math.floor(numberTypeCast / 100);
      let decimalNumber = numberTypeCast % 100;
      let unitNameWord = readTwoDigit(decimalNumber);

      if (decimalNumber < 10) {
        unitNameWord = "linh" + " " + readUnitNumberName(decimalNumber);
      }

      return (
        numbersInWords[integerNumber] + " " + units[3] + " " + unitNameWord
      );
    } else {
      return numbersInWords[numberTypeCast / 100] + " " + units[3];
    }
  }
}

function readTwoDigit(value) {
  const numberTypeCast = Number(value);

  if (numberTypeCast <= 10) {
    return numbersInWords[numberTypeCast];
  }

  if (numberTypeCast > 10) {
    if (numberTypeCast % 10 !== 0) {
      let integerNumber = Math.floor(numberTypeCast / 10);
      let decimalNumber = numberTypeCast % 10;

      if (integerNumber === 1) {
        return "mười" + " " + numbersInWords[decimalNumber];
      }

      return (
        numbersInWords[integerNumber] +
        " " +
        "mươi" +
        " " +
        readUnitNumberName(decimalNumber)
      );
    } else {
      return numbersInWords[numberTypeCast / 10] + " " + "mươi";
    }
  }

  return numbersInWords[numberTypeCast];
}

function readUnitNumberName(value) {
  let unitNameWord;

  switch (value) {
    case 1:
      unitNameWord = "mốt";
      break;
    case 4:
      unitNameWord = "tư";
      break;
    case 5:
      unitNameWord = "lăm";
      break;
    default:
      unitNameWord = numbersInWords[value];
  }

  return unitNameWord;
}
