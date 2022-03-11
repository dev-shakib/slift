import { Heading, Page, Card, EmptyState} from '@shopify/polaris';

const Index = () => (
  <Page>
    <Heading>Shopify app with Node and React 🎉</Heading>

    <Card sectioned>
      <EmptyState
        heading="Manage your inventory transfers"
        action={{ content: 'Add transfer' }}
        secondaryAction={{
          content: 'Learn more',
          url: 'https://help.shopify.com',
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Track and receive your incoming inventory from suppliers.</p>
      </EmptyState>
    </Card>
  </Page>
);

export default Index;
