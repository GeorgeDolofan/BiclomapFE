import { Container, Subtitle } from './styles';

interface IProps {
  name: string;
}

const Placeholder = (props: IProps) => {
  const { name } = props;

  return (
    <Container>
      <h1>{name}</h1>
      <Subtitle>Placeholder</Subtitle>
    </Container>
  );
};

export default Placeholder;
