import PropTypes from 'prop-types';
import { ContactItem, Info, BtnInfoDelete } from './Contact.styled';

const Contact = ({ contact: { name, number, id }, onDeleteContact }) => {
  return (
    <>
      <ContactItem>
        <Info>{name}:</Info>
        <Info>{number}</Info>
        <BtnInfoDelete type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </BtnInfoDelete>
      </ContactItem>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
