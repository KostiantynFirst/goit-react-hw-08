import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import {
  selectError,
  selectLoading,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

import { ListContainer, ListItem, Message, ListContainerLabel } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts) || [];
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading && <Message>Loading...</Message>}
      {error && <Message>Error occurred while loading contacts.</Message>}
      <ListContainerLabel>
        <ListContainer>
        {Array.isArray(contacts) && 
          contacts?.map((contact) => (
            <ListItem key={contact.id}>
              <Contact {...contact} />
            </ListItem>
          ))}
      </ListContainer>
      </ListContainerLabel>
    </>
  );
};

export default ContactList;