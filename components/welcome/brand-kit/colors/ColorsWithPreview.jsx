import { Layout, Stack } from "@shopify/polaris";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import ColorPicker from "../../../form/ColorPicker";
import Preview from "./Preview";

const ColorsWithPreview = ({
  sectionBackgroundColor,
  headingTextColor,
  bodyTextColor,
  saleTextColor,
  btnColor,
  btnTextColor,
}) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  return (
    <Layout>
      <Layout.Section>
        <Stack distribution="fillEvenly" spacing="extraLoose">
          <Controller
            name={sectionBackgroundColor}
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <ColorPicker
                name={name}
                label="Section Background"
                color={value}
                onChange={onChange}
                error={errors?.sectionBackgroundColorSecondary?.message}
              />
            )}
          />
          <Stack vertical spacing="tight">
            <Controller
              name={headingTextColor}
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <ColorPicker
                  name={name}
                  label="Heading Text"
                  color={value}
                  onChange={onChange}
                  error={errors?.headingTextColorSecondary?.message}
                />
              )}
            />
            <Controller
              name={bodyTextColor}
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <ColorPicker
                  name={name}
                  label="Body Text"
                  color={value}
                  onChange={onChange}
                  error={errors?.bodyTextColorSecondary?.message}
                />
              )}
            />
            <Controller
              name={saleTextColor}
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <ColorPicker
                  name={name}
                  label="Sale Text"
                  color={value}
                  onChange={onChange}
                  error={errors?.saleTextColorSecondary?.message}
                />
              )}
            />
          </Stack>
          <Stack vertical spacing="tight">
            <Controller
              name={btnColor}
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <ColorPicker
                  name={name}
                  label="Button"
                  color={value}
                  onChange={onChange}
                  error={errors?.btnColorSecondary?.message}
                />
              )}
            />
            <Controller
              name={btnTextColor}
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <ColorPicker
                  name={name}
                  label="Button Text"
                  color={value}
                  onChange={onChange}
                  error={errors?.btnTextColorSecondary?.message}
                />
              )}
            />
          </Stack>
        </Stack>
      </Layout.Section>
      <Layout.Section secondary>
        <Preview
          cardStyles={{
            backgroundColor: watch(sectionBackgroundColor),
          }}
          headingStyles={{ color: watch(headingTextColor) }}
          btnStyles={{
            backgroundColor: watch(btnColor),
            color: watch(btnTextColor),
          }}
          bodyStyles={{ color: watch(bodyTextColor) }}
        />
      </Layout.Section>
    </Layout>
  );
};

export default ColorsWithPreview;
