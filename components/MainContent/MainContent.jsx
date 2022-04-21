const MainContent = props => {
  const { show } = props;
  switch (show) {
    case 'home':
      return <>Home</>;
    case 'contact':
      return <>Contact Me</>;
    case 'experience':
      return <>Experience</>;
    case 'projects':
      return <>Projects</>;
    case 'about':
      return <>About</>;
    default:
      return <>Home</>;
  }
};

export default MainContent;
