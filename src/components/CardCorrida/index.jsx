import PropTypes from 'prop-types';

const CardCorrida = ({ caminho }) => {
  return <img src={caminho} alt="card" />;
};

CardCorrida.propTypes = {
  caminho: PropTypes.string,
};

export default CardCorrida;
