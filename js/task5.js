const checkForSpam = function (message) {
  message = message.toLowerCase();
  const itemsToCheck = message.split(" ");
  console.log(itemsToCheck);
  for (const item of itemsToCheck) {
    if (item.includes("sale") || item.includes("spam")) {
      return true;
    }
  }
  return false;
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
