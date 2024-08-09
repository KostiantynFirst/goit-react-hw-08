import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Avatar } from '@mui/material';
import { stringAvatar } from '../../utils/utils';

import { ContactContainer, ContactInfo, PhoneBlock, PhoneIcon, DeleteButton } from './Contact.styled';


const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this contact?');

    if (isConfirmed) {
      dispatch(deleteContact(contactId));
    }
  };

  return (
    <ContactContainer>
      <ContactInfo>
        <div>
          <Avatar {...stringAvatar(name)} />
          <span>{name}</span>
        </div>
        <PhoneBlock>
          <PhoneIcon />
          <span>{number}</span>
        </PhoneBlock>
      </ContactInfo>
      <DeleteButton variant="outlined" onClick={() => handleDeleteContact(id)}>
        Delete
      </DeleteButton>
    </ContactContainer>
  );
};

export default Contact;