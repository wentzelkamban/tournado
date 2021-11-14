import React from 'react';
import Text from "../../components/Text";
import Input from "../../components/Input";

const Home: React.FC = () => {
  return (
    <>
      <Text>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et qAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum del
      </Text>
      <Input label={'Nafn á móti'} id={'tournament-name'} />
      <Input label={'Nafn liðs'} id={'team-name'} />
    </>
  );
};

export default Home;
