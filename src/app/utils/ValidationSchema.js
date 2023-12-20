import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required")
});

export const bankSchema = Yup.object().shape({
  bankName: Yup.string().required("Bank Name is required"),
  upiID: Yup.string().required("UPI ID is required"),
  userName: Yup.string().required("User Name is required"),
  status: Yup.string()
    .oneOf(["active", "inactive"], "Invalid status selection")
    .required("Status is required")
});
export const reportValidationSchema = Yup.object().shape({
  reportname: Yup.string().required("Report Name is required"),
  reporttype: Yup.string().required("Report Type is required"),
  status: Yup.string().required("Status is required"),
  amount: Yup.number().positive("Amount must be positive").required("Amount is required"),
  user: Yup.string().required("User is required"),
  startdate: Yup.date().required("Start Date required"),
  enddate: Yup.date()
    .min(Yup.ref("startdate"), "end date can't be before start date")
    .required("End date required")
});

export const ruleValidationSchema = Yup.object().shape({
  upiId: Yup.string().required("UPI id is required"),
  userName: Yup.string().required("User Name is required"),
  ruleName: Yup.string().required("Rule name is required"),
  rules: Yup.array().of(
    Yup.object().shape({
      type: Yup.string().required("This field is required").oneOf(["amount"], "Invalid option"),
      condition: Yup.string()
        .required("select condition")
        .oneOf(["<", ">", ">=", "<=", "="], "Invalid option"),
      amount: Yup.number().required("amount is required").min(1, "amount must be positive")
    })
  )
});
export const ticketValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  file: Yup.mixed().required("Please upload max 5 image")
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required")
});

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required")
});

export const signupValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  mobileNumber: Yup.string().required("Mobile Number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required")
});

export const changePasswordValidationSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Old Password is required"),
  newPassword: Yup.string()
    .min(8, "New Password must be at least 8 characters")
    .required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required")
});

// export const otpValidationSchema = Yup.object().shape({
//   otp: Yup.array()
//     .of(Yup.string().required("Please enter all OTP digits"))
//     .min(6, "Please enter a 6-digit OTP")
//     .max(6, "Please enter a 6-digit OTP")
// });
export const otpValidationSchema = Yup.object().shape({
  otp: Yup.string()
    .length(6, "OTP must be exactly 6 characters")
    .matches(/^[0-9]+$/, "OTP must only contain numbers")
    .required("OTP is required")
});

export const ProfileSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobileNumber: Yup.string().required("Mobile Number is required")
});
