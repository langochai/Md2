let phoneNumberRegex: RegExp = /^\([0-9]{2}\)\-\([0-9]{10}\)$/
let validPhoneNumber:string = '(84)-(1234567890)'
let invalidPhoneNumber = 'bruh'
console.log(phoneNumberRegex.test(validPhoneNumber))
console.log(phoneNumberRegex.test(invalidPhoneNumber))