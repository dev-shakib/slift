import {
  Badge,
  Card,
  Heading,
  Icon,
  Layout,
  Link,
  Stack,
  TextContainer,
  TextStyle,
} from "@shopify/polaris";
import {
  TextMajor,
  ImageMajor,
  SidebarRightMajor,
} from "@shopify/polaris-icons";

import styles from "./RecommendationsCards.module.scss";

const RecommendationsCards = () => {
  return (
    <div className={styles.recommendations}>
      <Stack>
        <Stack.Item fill>
          <Heading>Recommendations</Heading>
        </Stack.Item>
        <Link monochrome url="/recommendations">
          See more
        </Link>
      </Stack>
      <div className="cards">
        <Layout>
          <Layout.Section oneThird>
            <Card>
              <Card.Section
                title={
                  <Stack>
                    <Icon source={TextMajor} />
                    <Stack.Item fill>
                      <TextStyle variation="subdued">Copy test</TextStyle>
                    </Stack.Item>
                    <Badge>Homepage</Badge>
                    <Badge>High Impact</Badge>
                  </Stack>
                }
              >
                <TextContainer spacing="tight">
                  <Heading>Test your homepage headline and subheadline</Heading>
                  <p>
                    <TextStyle variation="subdued">
                      Recommended test for your store
                    </TextStyle>
                  </p>
                </TextContainer>
              </Card.Section>
            </Card>
          </Layout.Section>
          <Layout.Section oneThird>
            <Card>
              <Card.Section
                title={
                  <Stack>
                    <Icon source={ImageMajor} />
                    <Stack.Item fill>
                      <TextStyle variation="subdued">Creative test</TextStyle>
                    </Stack.Item>
                    <Badge>Homepage</Badge>
                  </Stack>
                }
              >
                <TextContainer spacing="tight">
                  <Heading>Test your homepage hero image</Heading>
                  <p>
                    <TextStyle variation="subdued">
                      Recommended test for your store
                    </TextStyle>
                  </p>
                </TextContainer>
              </Card.Section>
            </Card>
          </Layout.Section>
          <Layout.Section oneThird>
            <Card>
              <Card.Section
                title={
                  <Stack>
                    <Icon source={SidebarRightMajor} />
                    <Stack.Item fill>
                      <TextStyle variation="subdued">Layout test</TextStyle>
                    </Stack.Item>
                    <Badge>Homepage</Badge>
                  </Stack>
                }
              >
                <TextContainer spacing="tight">
                  <Heading>Test the placement of your press section</Heading>
                  <p>
                    <TextStyle variation="subdued">
                      Recommended test for your store
                    </TextStyle>
                  </p>
                </TextContainer>
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
      </div>
    </div>
  );
};

export default RecommendationsCards;
