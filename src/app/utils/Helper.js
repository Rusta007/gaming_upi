import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  type: Yup.string().required("This field is required").oneOf(["amount"], "Invalid option"),
  condition: Yup.string().required("select").oneOf(["<", ">", ">=", "<="], "Invalid option"),
  amount: Yup.string().required("select")
});

export default validationSchema;
export const COLOR_CODE = {
  a: "#428777",
  p: "#f0ca43",
  r: "#ee4444",
  e: "#9babc5"
};
