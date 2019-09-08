import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { Button } from 'baseui/button';
import { StatefulInput } from 'baseui/input';

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const MainHeader = styled('h1', {
  fontSize: '60px',
  color: '#0044ee',
  border: '1px solid #000',
});
export default function Hello() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <MainHeader>Awesome Contact List</MainHeader>
          <StatefulInput />
          <Button onClick={() => alert('click')}>Hello</Button>
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  );
}
