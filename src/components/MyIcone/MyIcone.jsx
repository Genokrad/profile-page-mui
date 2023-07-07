import sprite from '../../images/sprite.svg';

const styles = {
  width: '24px',
  height: '24px',
};

export const MyIcon = ({ symbol }) => (
  <svg style={styles}>
    <use href={sprite + `#icon-${symbol}`} />
  </svg>
);
