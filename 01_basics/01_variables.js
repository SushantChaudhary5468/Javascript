const accountId=1234;
let accountMail="hitesh@gmail.com";
var accountPassword="231";
accountCity="Jaipur";
let accountState;

/*
prefr not to use var use let
Because of issue in block scope and personal scope.
*/
//accountId="2"; //not allowed
console.log(accountId);
console.table([accountId,accountMail,accountPassword,accountCity,accountState]);
