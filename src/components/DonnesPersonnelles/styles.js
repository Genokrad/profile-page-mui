// export const styleSectionWraper = isMobile => {
//   return {
//     sectionWraper: {
//       borderRadius: '16px',
//       backgroundColor: '#ffffff',
//       padding: isMobile ? '24px 0 20px 0' : '24px 0 20px 0',
//     },
//   };
// return {
//   textField: () => ({
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: !isMobile ? '50%' : '100%',
//   }),
//   buttonWraper: () => ({
//     paddingTop: '24px',

//     paddingRight: '24px',
//     // justifyContent: !isMobile ? 'flex-end' : 'space-between',
//     // paddingLeft: !isMobile ? '0' : '24px',
//   }),
// }[mark];
// };

export const itemStyle = {
  fontFamily: 'RedHatText',
  fontSize: '16px',
  lineHeight: 1.5,
  width: '50%',
  letterSpacing: 0.15,
  color: '#0B2333',
};

export const sectionWraper = {
  borderRadius: '16px',
  backgroundColor: '#ffffff',
  padding: '24px 0 20px 0',
};

export const buttonWraper = {
  paddingTop: '16px',
  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  paddingRight: '24px',
};
