import {
  Button,
  Card,
  Checkbox,
  DropZone,
  InlineError,
  Layout,
  Stack,
} from "@shopify/polaris";
import classNames from "classnames";
import { DeleteMajor, RefreshMajor } from "@shopify/polaris-icons";
import { Controller, useFormContext } from "react-hook-form";

// Styles
import styles from "../BrandKit.module.scss";

// Functions
import brandKitFormModel from "../../../helpers/brand-kit/formModel";

const {
  formFields: { logos, uploadedLogo },
} = brandKitFormModel;

const Logos = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const displayUploadedLogo = (uploadedLogo, onChange) =>
    uploadedLogo ? (
      <Stack alignment="center" spacing="tight">
        <Stack.Item>
          <img
            className={styles.uploadedLogo}
            src={window.URL.createObjectURL(uploadedLogo)}
            alt={uploadedLogo.name}
          />
        </Stack.Item>
        <Stack.Item fill>
          <p>{uploadedLogo.name}</p>
        </Stack.Item>
        <Stack.Item>
          <div className="ml-auto">
            <Stack vertical spacing="extraTight">
              <Button plain monochrome icon={RefreshMajor} />
              <Button
                plain
                monochrome
                icon={DeleteMajor}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onChange(null);
                }}
              />
            </Stack>
          </div>
        </Stack.Item>
      </Stack>
    ) : (
      <DropZone.FileUpload
        actionHint={
          <span className="text-left">
            <p>or drop a file to upload</p>
            <p> Max file size ~1MB</p>
          </span>
        }
      />
    );

  return (
    <Layout.Section>
      <Card>
        <Card.Section
          title={
            <div className={styles.cardTitleCheckbox}>
              <Controller
                name={logos.name}
                control={control}
                render={({ field: { ref, ...fieldProps } }) => (
                  <Checkbox
                    {...fieldProps}
                    label={logos.label}
                    checked={fieldProps.value}
                    error={errors?.[logos.name]?.message}
                  />
                )}
              />
            </div>
          }
        >
          <p className={styles.cardSubtitle}>
            Our optimized page sections will use your logo at key moments to
            reinforce your brand.
          </p>
          <div className={styles.cardContent}>
            <Card.Subsection>
              <div
                className={classNames(
                  styles.uploadLogo,
                  styles.hasUploadedData
                )}
              >
                <Controller
                  name={uploadedLogo.name}
                  control={control}
                  render={({ field: { ref, ...fieldProps } }) => {
                    return (
                      <DropZone
                        {...fieldProps}
                        label={<span className="label">{uploadedLogo.label}</span>}
                        accept="image/png, image/svg+xml"
                        allowMultiple={false}
                        variableHeight={true}
                        onDrop={(files, acceptedFiles) =>
                          fieldProps.onChange(acceptedFiles[0])
                        }
                        outline={!fieldProps.value}
                        error={!!errors?.[uploadedLogo.name]}
                      >
                        {displayUploadedLogo(
                          fieldProps.value,
                          fieldProps.onChange
                        )}
                      </DropZone>
                    );
                  }}
                />
                {errors?.[uploadedLogo.name] && (
                  <InlineError
                    message={errors?.[uploadedLogo.name]?.message}
                    fieldID={uploadedLogo.name}
                  />
                )}
              </div>
            </Card.Subsection>
          </div>
        </Card.Section>
      </Card>
    </Layout.Section>
  );
};

export default Logos;
