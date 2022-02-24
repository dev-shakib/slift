import * as Yup from "yup";
import brandKitFormModel from "./formModel";

const {
  formFields: {
    logos,
    uploadedLogo,
    fonts,
    headingsFont,
    bodyFont,
    colors,
    sectionBackgroundColorPrimary,
    headingTextColorPrimary,
    bodyTextColorPrimary,
    saleTextColorPrimary,
    btnColorPrimary,
    btnTextColorPrimary,
    sectionBackgroundColorSecondary,
    headingTextColorSecondary,
    bodyTextColorSecondary,
    saleTextColorSecondary,
    btnColorSecondary,
    btnTextColorSecondary,
    sectionBackgroundColorAccent1,
    headingTextColorAccent1,
    bodyTextColorAccent1,
    saleTextColorAccent1,
    btnColorAccent1,
    btnTextColorAccent1,
    sectionBackgroundColorAccent2,
    headingTextColorAccent2,
    bodyTextColorAccent2,
    saleTextColorAccent2,
    btnColorAccent2,
    btnTextColorAccent2,
  },
} = brandKitFormModel;

const BrandKitSchema = Yup.object().shape({
  [logos.name]: Yup.boolean()
    .required(logos.errorMsg.required)
    .oneOf([true], logos.errorMsg.invalid),
  [uploadedLogo.name]: Yup.mixed()
    .required(uploadedLogo.errorMsg.required)
    .nullable(),
  [fonts.name]: Yup.boolean()
    .required(fonts.errorMsg.required)
    .oneOf([true], fonts.errorMsg.invalid),
  [headingsFont.name]: Yup.string().required(headingsFont.errorMsg.required),
  [bodyFont.name]: Yup.string().required(bodyFont.errorMsg.required),
  [colors.name]: Yup.boolean()
    .required(colors.errorMsg.required)
    .oneOf([true], colors.errorMsg.invalid),
  [sectionBackgroundColorPrimary.name]: Yup.string().required(
    sectionBackgroundColorPrimary.errorMsg.required
  ),
  [headingTextColorPrimary.name]: Yup.string().required(
    headingTextColorPrimary.errorMsg.required
  ),
  [bodyTextColorPrimary.name]: Yup.string().required(
    bodyTextColorPrimary.errorMsg.required
  ),
  [saleTextColorPrimary.name]: Yup.string().required(
    saleTextColorPrimary.errorMsg.required
  ),
  [btnColorPrimary.name]: Yup.string().required(
    btnColorPrimary.errorMsg.required
  ),
  [btnTextColorPrimary.name]: Yup.string().required(
    btnTextColorPrimary.errorMsg.required
  ),
  [sectionBackgroundColorSecondary.name]: Yup.string().required(
    sectionBackgroundColorSecondary.errorMsg.required
  ),
  [headingTextColorSecondary.name]: Yup.string().required(
    headingTextColorPrimary.errorMsg.required
  ),
  [bodyTextColorSecondary.name]: Yup.string().required(
    bodyTextColorSecondary.errorMsg.required
  ),
  [saleTextColorSecondary.name]: Yup.string().required(
    saleTextColorSecondary.errorMsg.required
  ),
  [btnColorSecondary.name]: Yup.string().required(
    btnColorSecondary.errorMsg.required
  ),
  [btnTextColorSecondary.name]: Yup.string().required(
    btnTextColorSecondary.errorMsg.required
  ),
  [sectionBackgroundColorAccent1.name]: Yup.string().required(
    sectionBackgroundColorAccent1.errorMsg.required
  ),
  [headingTextColorAccent1.name]: Yup.string().required(
    headingTextColorAccent1.errorMsg.required
  ),
  [bodyTextColorAccent1.name]: Yup.string().required(
    bodyTextColorAccent1.errorMsg.required
  ),
  [saleTextColorAccent1.name]: Yup.string().required(
    saleTextColorAccent1.errorMsg.required
  ),
  [btnColorAccent1.name]: Yup.string().required(
    btnColorAccent1.errorMsg.required
  ),
  [btnTextColorAccent1.name]: Yup.string().required(
    btnTextColorAccent1.errorMsg.required
  ),
  [sectionBackgroundColorAccent2.name]: Yup.string().required(
    sectionBackgroundColorAccent2.errorMsg.required
  ),
  [headingTextColorAccent2.name]: Yup.string().required(
    headingTextColorAccent2.errorMsg.required
  ),
  [bodyTextColorAccent2.name]: Yup.string().required(
    bodyTextColorAccent2.errorMsg.required
  ),
  [saleTextColorAccent2.name]: Yup.string().required(
    saleTextColorAccent2.errorMsg.required
  ),
  [btnColorAccent2.name]: Yup.string().required(
    btnColorAccent2.errorMsg.required
  ),
  [btnTextColorAccent2.name]: Yup.string().required(
    btnTextColorAccent2.errorMsg.required
  ),
});

export default BrandKitSchema;
