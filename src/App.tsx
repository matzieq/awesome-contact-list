import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { StateProvider } from './components/StateProvider';
import MainView from './components/MainView';

const engine = new Styletron();

export default function Hello() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <StateProvider>
          <MainView />
        </StateProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}
