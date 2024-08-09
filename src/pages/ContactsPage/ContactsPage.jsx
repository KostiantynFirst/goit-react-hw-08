import { ContactForm, ContactList, SearchBox } from '../../components';
import { ContactsPageContainer, Title, ContactSearchBlock, SearchFormWrapper } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <ContactsPageContainer>
      <Title>Contacts Page</Title>
      <ContactSearchBlock>
        <SearchFormWrapper>
          <ContactForm />
          <SearchBox />
        </SearchFormWrapper>
      </ContactSearchBlock>
      <ContactList />
    </ContactsPageContainer>
  );
};

export default ContactsPage;