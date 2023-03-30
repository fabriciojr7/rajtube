import { Container } from './styles';

interface SectionProps {
  title: string
  children?: JSX.Element
  arrayNumber?: number
}

export function Section({title, children, arrayNumber}: SectionProps){
  if(arrayNumber === 0){
    return <></>;
  }

  return (
    <Container>
      <h2>{title}</h2>
      <div className="separator"></div>

      {children}
    </Container>
  );
}
