import List "mo:core/List";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Char "mo:core/Char";
import Runtime "mo:core/Runtime";

actor {
  type User = {
    name : Text;
    email : Text;
    phone : Text;
    otp : Text;
    otpTimestamp : Int;
    otpVerified : Bool;
  };

  let users = List.empty<User>();

  func isValidEmail(email : Text) : Bool {
    email.contains(#char('@')) and email.contains(#char('.')) and email.size() > 5
  };

  func isValidPhone(phone : Text) : Bool {
    if (phone.size() != 10) {
      return false;
    };
    func isDigit(c : Char) : Bool {
      c >= '0' and c <= '9'
    };
    let trimmedPhone = phone.trimStart(#char(' '));
    let chars = trimmedPhone.toArray();
    if (chars.size() == 0) {
      return false;
    };
    if (chars.size() == 10) {
      for (i in chars.keys()) {
        let x = chars[i];
        if (not isDigit(x)) {
          return false;
        };
      };
    } else {
      if (chars[0] == '+') {
        if (chars[1].toText().concat(chars[2].toText()).concat(chars[3].toText()) != "91+") {
          return false;
        };
        for (i in chars.keys()) {
          if (i >= 4 and not isDigit(chars[i])) {
            return false;
          };
        };
      } else if (chars[0] == '0') {
        for (i in chars.keys()) {
          if (i != 0 and not isDigit(chars[i])) {
            return false;
          };
        };
      } else {
        return false;
      };
    };
    trimmedPhone.size() > 0;
  };

  func generateOTP() : Text {
    let randomNumber = (Time.now() % 900000) + 100000;
    randomNumber.toText();
  };

  public shared ({ caller }) func registerUser(name : Text, email : Text, phone : Text) : async Text {
    if (not isValidEmail(email)) {
      Runtime.trap("Invalid email address. Please enter a valid email.");
    };

    if (not isValidPhone(phone)) {
      Runtime.trap("Invalid phone number. Please enter a valid 10 digit Indian phone number.");
    };

    let otp = generateOTP();
    let timestamp = Time.now();

    let user : User = {
      name;
      email;
      phone;
      otp;
      otpTimestamp = timestamp;
      otpVerified = false;
    };

    users.add(user);
    otp;
  };

  public shared ({ caller }) func verifyOTP(email : Text, otp : Text) : async Bool {
    switch (users.find(func(u) { u.email == email })) {
      case (null) { false };
      case (?user) {
        let currentTime = Time.now();
        let otpValidDuration = 5 * 60 * 1_000_000_000;

        if (user.otp == otp and (currentTime - user.otpTimestamp <= otpValidDuration)) {
          users.add({
            user with
            otpVerified = true;
            otp = "";
            otpTimestamp = Time.now();
          });
          true;
        } else {
          false;
        };
      };
    };
  };

  public query ({ caller }) func getUsers() : async [User] {
    users.toArray();
  };
};

